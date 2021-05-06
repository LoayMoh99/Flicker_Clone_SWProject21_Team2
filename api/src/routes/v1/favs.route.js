/**
 * @swagger
 * definitions:
 *   Fav:
 *     type: object
 *     properties:
 *       photo_id:
 *         type: integer
 */
const express = require('express')

const router = express.Router()
const { favsController } = require('../../controllers')
const { authorization, authentication } = require('../../middlewares/auth')
/**
 * @swagger
 * /favs:
 *   post:
 *     tags: [Favs]
 *     description: Add a photo to favs list and add the user to that photo's fav list.
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Photo added to favourites list successfully "
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Photo not found",
 *            }
 *       422:
 *         description: Missing photo parameter
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Missing photo parameter",
 *            }
 *       500:
 *         description: Photo is already in favorites
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Photo is already in favorites",
 *            }
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         description: Photo id to add the user to the followers list
 *         schema:
 *           $ref: '#/definitions/Fav'
 *
 */
router.use((req, res, next) => authentication(req, res, next))
router.post('/', (req, res) => favsController.add_fav(req, res))
/**
 * @swagger
 * /favs/{photo_id}:
 *   delete:
 *     tags: [Favs]
 *     description: Delete a photo to favs list and add the user to that photo's fav list.
 *     responses:
 *       200:
 *         description: Success
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Photo deleted from favourites list and removed from likes "
 *            }
 *       404:
 *         description: Not found
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Photo not found",
 *            }
 *       422:
 *         description: Missing photo parameter
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Missing photo parameter",
 *            }
 *       500:
 *         description: Photo not in favourites
 *         examples:
 *          application/json:
 *
 *            {
 *                       "message": "Photo not in favourites list",
 *            }
 *     parameters:
 *       - name: photo_id
 *         in: path
 *         required: true
 *         description: Photo id to delete from fav list
 *         schema:
 *           type: integer
 *
 */

router.delete('/:photoid', (req, res) => favsController.remove_fav(req, res))

module.exports = router
