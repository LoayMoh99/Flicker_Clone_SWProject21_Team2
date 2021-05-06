const express = require('express')
const router = express.Router()
/**
 * @swagger
 * /people/groups/{userid}:
 *   get:
 *     tags: [People]
 *     description: Return list of groups a user is in.
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            [
 *              {
 *                           "title": "Group 1",
 *                           "id": 1
 *              },
 *              {
 *                           "title": "Group 2",
 *                           "id": 2
 *              },
 *            ]
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "User not found",
 *            }
 *     parameters:
 *       - name: userid
 *         in: path
 *         required: true
 *         description: User id to search on it
 *
 */

router.get('/getgroups/:userid', (req, res) => {
    console.log(req.params.id)
    res.send({
        id: 'route',
    })
})

/**
 * @swagger
 * /people/photos/{user_id}:
 *   get:
 *     tags: [People]
 *     description: Return list of public photos.
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/responses/user_photo'
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "User not found",
 *            }
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         description: User id to search on it
 *
 */

router.get('/getgroups/:userid', (req, res) => {
    console.log(req.params.id)
    res.send({
        id: 'route',
    })
})
/**
 * @swagger
 * /people/{username|email|id}:
 *   get:
 *     tags: [People]
 *     description: Get info about a user using their name/id/email.
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/responses/UserByName'
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "User not found",
 *            }
 *     parameters:
 *       - name: identifier
 *         in: path
 *         required: true
 *         description: user identifier (username/email/id) to search on it
 *
 *
 */

router.get('/findByUsername/:username', (req, res) => {
    console.log(req.body.name)
})
/**
 * @swagger
 * /people/{username|email|id}:
 *   get:
 *     tags: [People]
 *     description: Get info about a user using their name/id/email.
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/responses/UserByName'
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "User not found",
 *            }
 *     parameters:
 *       - name: identifier
 *         in: path
 *         required: true
 *         description: user identifier (username/email/id) to search on it
 *
 *
 */

router.get('/people', (req, res) => {
    console.log(req.body.name)
})
/**
 * @swagger
 * /people/following/{user_id}:
 *   get:
 *     tags: [People]
 *     description: list of the  following users.
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref:  '#/responses/peopleinfo'
 *
 *       404:
 *         description: Not found
 *         examples:
 *           application/json:
 *
 *             {
 *                       "message": "User not found",
 *             }
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         description: user's id will be used to get its following list
 *
 *
 */

router.get('/findByUsername/:username', (req, res) => {
    console.log(req.body.name)
})

/**
 * @swagger
 * /people/fav/{username}:
 *   get:
 *     tags: [People]
 *     description: people fav list.
 *     parameters:
 *       - name: username
 *         in: path
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/responses/photo'
 *
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "list not found",
 *            }
 *       422:
 *         description: Missing photo parameter
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Missing  parameter",
 *            }
 *
 *
 *
 */

router.post('user/fav', (req, res) => {
    console.log(req.body.name)
})

/**
 *@swagger
 *responses:
 *  peopleinfo:
 *    type: object
 *    properties:
 *     Fname:
 *       type: string
 *     Lname:
 *       type: string
 *     username:
 *       type: string
 *     id:
 *       type: integer
 *       format: int32
 *     email:
 *       type: string
 *     date_joined:
 *       type: string
 *       format: date
 *     num_photos:
 *       type: integer
 *       format: int32
 *     num_following:
 *       type: integer
 *       format: int32
 *
 *
 *
 *
 */
modules.exports = router
