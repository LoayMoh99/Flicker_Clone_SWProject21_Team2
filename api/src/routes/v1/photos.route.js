const express = require('express')
const router = express.Router()
const {authentication}= require('../../middlewares/auth')
const photoController=require('../../controllers/photo.controller')
//schemas
/**
 * @swagger
 * definitions:
 *   photo:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *         required: false
 *       privacy:
 *          type: string
 *          required: false
 *       file:
 *         type: string
 *         format: base64
 *
 */
/**
 * @swagger
 *  /photo:
 *   post:
 *     description: Add photo
 *     tags: [photo]
 *     parameters:
 *       - name: title
 *         in: body
 *         required: false
 *         description: photo's title
 *         schema:
 *       - name: description
 *         in: body
 *         required: false
 *         description: photo's description
 *         schema:
 *       - name: privacy
 *         in: body
 *         required: false
 *         description: photo's privacy
 *         schema: 
 *       - name: file
 *         in: body
 *         required: true
 *         description: photo's file
 *         schema:
 *           $ref: "#/definitions/photo"
 *     responses:
 *       200:
 *         description: photo added successfully
 *         schema:
 *           $ref: "#responses/user_photo"
 *       401:
 *         description: Unauthorized
 *         examples:
 *          application/json:
 *
 *            {
 *                     "error": "Unauthorized request",
 *            }
 *       400:
 *         description: Bad request or file type
 *         examples:
 *          application/json:
 *
 *            {
 *                     "error": "Bad request or file type",
 *            }
*       500:
 *         description: internal server error
 *         examples:
 *          application/json:
 *
 *            {
 *                     "error": "Internal server error",
 *            }
 */

router.post('/',authentication,photoController.upload.single("photo"),photoController.AddPhoto)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 *  /photo/tag:
 *   post:
 *     description: Add tag to photo
 *     tags: [photo]
 *     parameters:
 *       - name: data
 *         in: body
 *         required: true
 *         description: photo id to add tag to the corresponding photo
 *         type: object
 *         properties:
 *           photo_id:
 *             type: integer
 *             format: int64
 *             description: Tag to add to photo
 *           tag:
 *             required: true
 *             type: string
 *             description: Tag to add to photo
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                     "photo_id": 0,
 *            }
 *       401:
 *         description: Unauthorized
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized request",
 *            }
 */

router.put('/tag', (req, res) => {})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @swagger
 * /{photo_id}/comments:
 *   get:
 *     description: return list of comments for a given photo.
 *     tags: [photo]
 *     parameters:
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo id to get comments for the corresponding photo
 *         schema:
 *           type: integer
 *
 * 
 *     responses:
 * 
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *              [
 *                  {
 *                     "comment": "comment title",
 *                     "_id": "123456",
 *                     "user": {
 *                                  "Fname":"John",
 *                                  "Lname":"Smith"
 *                             },
 *                     "createdAt":"2020-5-23",
 *                     "updatedAt":"2021-4-2"
 *                  }
 *              ]
 *
 *       404:
 *         description: Not found
 *
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photos not found",
 *            }
 *       401:
 *         description: invalid token
 *
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Invalid token",
 *            }
 *
 *
 */

 router.get('/:photoId/comments',authentication,photoController.getComments);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @swagger
 *  /photo/{photo_id}:
 *   delete:
 *     description: Delete a photo
 *     tags: [photo]
 *     parameters:
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo id to add tag to the corresponding photo
 *         schema:
 *           type: integer
 * 
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo deleted successfully",
 *            }
 *       401:
 *         description: Unauthorized
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized request",
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 */

router.delete('/delete/:photo_id', (req, res) => {})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 * /{photo_id}/comments:
 *   post:
 *     description: Add comment to photo
 *     tags: [photo]
 *     parameters:
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo id to add comment to the corresponding photo
 *         schema:
 *           type: integer
 *
 *     properties:
 *           comment:
 *             type: string
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *            {
 *                     "message": "success"
 *            }
 *         
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 *       401:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized",
 *            }
 *
 */

 router.post('/:photoId/comments',authentication,photoController.addComment);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 * /{photo_id}/comments/{comment_id}:
 *   put:
 *     description: edit comment on a given photo
 *     tags: [photo]
 *     parameters:
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo id to edit its comment 
 *         schema:
 *           type: integer
 *       - name: comment_id
 *         in: path
 *         required: true
 *         description: comment id to edit it
 *         schema:
 *           type: integer
 *
 *     properties:
 *           comment:
 *             type: string
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *            {
 *                     "message": "comment updated"
 *            }
 *         
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 *          
 *       401:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized",
 *            }
 *       403:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Access denied",
 *            }
 *
 */

 router.put('{photo_id}/comment', (req, res) => {})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 * /photo/explore:
 *   get:
 *     description: return list of photos that are public and above certain number of likes.
 *     tags: [photo]
 *
 *
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/responses/photo'
 *
 *       404:
 *         description: Not found
 *
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photos not found",
 *            }
 *
 *
 */

router.get('/photo/explore', (req, res) => {})

/**
 * @swagger
 * /photo/{photo_id}:
 *   put:
 *     description: change photo mode between { private public friends}
 *     tags: [photo]
 *     parameters:
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo_id to edit it
 *         schema:
 *           type: integer
 *       - name: privacy
 *         in: body
 *         required: true
 *         description: mode of photo
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Success
 *
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "updated successfully",
 *            }
 *
 *
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "not found",
 *            }
 *       401:
 *         description: bad request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "unauthorized request.",
 *            }
 *
 *
 */

router.put('/photo/{photo_id}', (req, res) => {})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 * /photo/{photo_id}/comments/{comment_id}:
 *   delete:
 *     description: delete comment from a photo
 *     tags: [photo]
 *     parameters:
 *       - name: comment_id
 *         in: path
 *         required: true
 *         description: comment_id to delete a comment from a photo
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo_id to delete a comment from it
 *
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Success",
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 *
 *       401:
 *         description: Invalid token
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Invalid token",
 *            }
 *       403:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Access denied",
 *            }
 *          
 *
 */

router.delete('/:photoId/comments/:commentId', authentication, photoController.deleteComment)

/**
 * @swagger
 * /photo/{photo_id}/tag/{tag_id}:
 *   delete:
 *     description: delete a tag from a photo
 *     tags: [photo]
 *     parameters:
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: tag_id to delete a comment from a photo
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo_id to delete a comment from a it
 *
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Success",
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 *       401:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized",
 *            }
 *
 */

router.put('/photo/:photo_id/tag/{tag_id}', (req, res) => {})

/**
 * @swagger
 * /photo/{photo_id}:
 *   get:
 *     description: get a photo by id
 *     tags: [photo]
 *     parameters:
 *
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: photo id
 *
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Success",
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 *       401:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized",
 *            }
 *
 */

router.get('/photo/:photo_id', (req, res) => {})

/**
 * @swagger
 * /photo/{title}:
 *   get:
 *     description: get a photo by title
 *     tags: [photo]
 *     parameters:
 *
 *       - name: photo_title
 *         in: path
 *         required: true
 *         description: photo id
 *
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/responses/photo'
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "photo not found",
 *            }
 *       401:
 *         description: Unauthorized request
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Unauthorized",
 *            }
 *
 */

router.get('/photo/:photo_id', (req, res) => {})

/**
 * @swagger
 * responses:
 *   photo:
 *     type: object
 *     properties:
 *       photo_id:
 *         type: integer
 *       photo_url:
 *         type: string
 *       photo_owner_id:
 *         type: integer
 *       tag:
 *         type: array
 *         items:
 *           $ref: '#/responses/tag'
 *       comment:
 *         type: array
 *         items:
 *           $ref: '#/responses/comment'
 *       description:
 *         type: string
 *
 */
/**
 * @swagger
 * responses:
 *   comment:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       comment:
 *         type: string
 *       photo_id:
 *         type: integer
 *       commented_user_id:
 *         type: integer
 *       userName:
 *          typre:string
 *       createdAt:
 *          type:date
 *       updatedAt:
 *          type:date
 *   tag:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       comment:
 *         type: string
 *       photo_id:
 *         type: integer
 *       taged_user_id:
 *         type: integer
 *
 *   user_photo:
 *     type: object
 *     properties:
 *       _id:
 *         type: integer
 *       title:
 *          type: string
 *       description:
 *          type: string
 *       photo_url:
 *         type: string
 *       privacy:
 *         type: string
 *       
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

module.exports = router