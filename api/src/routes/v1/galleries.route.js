const express = require('express')
const auth=require('../../middlewares/auth');
const _ = require('lodash');
const galleryController = require('../../controllers/gallery.controller');
const {Photo,PhotoSchema}=require('../../models/photo.model');
const {validateGallery,Gallery,GallerySchema}=require('../../models/gallery.model');

const router = express.Router()
//schemas
/**
 * @swagger
 * definitions:
 *   Gallery:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *
 */
/**
 * @swagger
 *  /galleries:
 *   post:
 *     description: Create new gallery
 *     tags: [Gallery]
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: Gallery's data
 *         schema:
 *           $ref: '#/definitions/Gallery'
 *     responses:
 *       201:
 *         description: Created successfully
 *         examples:
 *           application/json:
 *             {
 *               "gallery_id": "0",
 *               "gallery_url": "http://localhost:3000/api/v1/galleries/0"
 *             }
 *       500:
 *         description: Failed to create gallery
 *         examples:
 *           application/json:
 *
 *             {
 *                "message": "Failed to create gallery"
 *             }
 *       401:
 *         description: Unauthorized
 *         examples:
 *           application/json:
 *
 *             {
 *                     "message": "Unauthorized"
 *             }
 */

 router.post('/',auth.authentication,galleryController.create);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 *  /galleries/photo:
 *   post:
 *     description: Add a photo to a gallery owned by a user
 *     tags: [Gallery]
 *     parameters:
 *       - name: gallery_id
 *         in: body
 *         required: true
 *         description: Gallery id
 *         schema:
 *           type: integer
 *       - name: Photo_id
 *         in: body
 *         required: true
 *         description: Photo's attributes
 *         type: object
 *         properties:
 *           photo_id:
 *             type: integer
 *           gallery_id:
 *             type: integer
 *           comment:
 *             type: string
 *     responses:
 *       201:
 *         description: Photo added to gallery successfully
 *         examples:
 *           application/json:
 *             {
 *               "gallery_id": 0,
 *               "gallery_url": "http://localhost:3000/api/v1/galleries/:gallery_id"
 *             }
 *       500:
 *         description: Failed to add photo to gallery
 *         examples:
 *           application/json:
 *
 *             {
 *                     "message": "Failed to add photo to gallery"
 *             }
 *       404:
 *         description: Gallery not found
 *         examples:
 *           application/json:
 *
 *             {
 *                     "message": "Gallery not found"
 *             }
 */

router.post('/photo',auth.authentication,galleryController.addphoto);

///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 *  /galleries/{gallery_id}:
 *   get:
 *     description: Get photos in a gallery
 *     tags: [Gallery]
 *     parameters:
 *
 *       - name: gallery_id
 *         in: path
 *         required: true
 *         description: Gallery id
 *         schema:
 *           type: integer
 *       - name: page
 *         in: url
 *         required: true
 *         description: Page number
 *         schema:
 *           type: integer
 *       - name: per_page
 *         in: url
 *         required: true
 *         description: Items per page
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            [
 *              {
 *                       "photo_id": 0,
 *                       "photo_url": "url",
 *               },
 *            ]
 *       401:
 *         description: Unauthorized
 *         examples:
 *          application/json:
 *            {
 *                     "message": "Unauthorized request",
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Gallery not found",
 *            }
 *
 */

router.get('/{gallery_id}:',auth.authorization,async(req, res) => {

    const gallery= await Gallery.findById(req.params.gallery_id);
    if(!gallery) return res.status(404).send({message:"Gallery not found"});
    const index= req.params.page * req.params.per_page;
    res.status(200).send(gallery.Photos.slice(index,index+req.url.per_page));

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 *  /galleries/{gallery_id}/photo/{photo_id}:
 *   get:
 *     description: Get a photo in a gallery
 *     tags: [Gallery]
 *     parameters:
 *       - name: photo_id
 *         in: url
 *         required: true
 *         description: Photo id
 *         schema:
 *           type: integer
 *       - name: gallery_id
 *         in: url
 *         required: true
 *         description: gallery id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/responses/image'
 *       401:
 *         description: Unauthorized
 *         examples:
 *           application/json:
 *
 *             {
 *                     "message": "Unauthorized request",
 *             }
 *       404:
 *         description: Not found
 *         examples:
 *           application/json:
 *
 *             {
 *                     "message": "Image not found",
 *             }
 *       500:
 *         description: Gallery not found
 *         examples:
 *            application/json:
 *              {
 *                     "message": "Gallery not found",
 *              }
 *
 */

router.post('/getphoto', (req, res) => {})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @swagger
 *  /galleries/{gallery_id}/photo/{photo_id}:
 *   delete:
 *     description: Delete a photo in a gallery
 *     tags: [Gallery]
 *     parameters:
 *       - name: photo_id
 *         in: url
 *         required: true
 *         description: Photo's ID
 *         schema:
 *           type: integer
 *       - name: gallery_id
 *         in: url
 *         required: true
 *         description: Gallery's id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Photo removed successfully",
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
 *         description: Unauthorized
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Image/Gallery not found",
 *            }
 *       500:
 *         description: Unauthorized
 *         examples:
 *          application/json:
 *
 *            {
 *                     "message": "Image not member of the gallery",
 *            }
 */

router.delete('/:gallery_id/photo/:photo_id',auth.authentication,galleryController.deletePhoto);

/**
 * @swagger
 * responses:
 *   gallery:
 *     type: object
 *     properties:
 *       photos:
 *         type: array
 *         items:
 *           $ref: '#/responses/image'

 *        
 */
module.exports = router
