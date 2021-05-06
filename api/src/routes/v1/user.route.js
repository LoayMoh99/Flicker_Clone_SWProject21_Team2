const express = require('express');
const router = express.Router();
const UserController=require("../../controllers/user.controller");
const auth=require("../../middlewares/auth");
const { use } = require('./album.route');
//schemas
/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *
 *       username:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       age:
 *         type: integer
 *
 *   UserLogin:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *
 *   Avatar:
 *     type: object
 *     properties:
 *       photo_id:
 *         type: integer
 */
/**
 * @swagger
 *
 * responses:
 *   UserById:
 *     type: object
 *     properties:
 *       num_following:
 *         type: integer
 *         format: int32
 *       num_followers:
 *         type: integer
 *         format: int32
 *       num_views:
 *         type: integer
 *         format: int32
 *       date_joined:
 *         type: string
 *         format: date
 *       country:
 *         type: string
 *       num_public_photos:
 *         type: integer
 *
 *   UserByName:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *       Fname:
 *         type: string
 *       Lname:
 *         type: string
 *       num_following:
 *         type: integer
 *         format: int32
 *       num_followers:
 *         type: integer
 *         format: int32
 *       num_views:
 *         type: integer
 *         format: int32
 *       date_joined:
 *         type: string
 *         format: date
 *       country:
 *         type: string
 *
 *   UserAbout:
 *     type: object
 *     properties:
 *       num_views:
 *         type: integer
 *         format: int32
 *       num_tag:
 *         type: integer
 *         format: int32
 *       num_geotag:
 *         type: integer
 *         format: int32
 *       num_favs:
 *         type: integer
 *         format: int32
 *       num_groups:
 *         type: integer
 *         format: int32
 *       date_joined:
 *         type: string
 *         format: date
 *       email:
 *         type: string
 *   follower:
 *     type: object
 *     properties:
 *       Fname:
 *         type: string
 *       username:
 *         type: string
 *       Lname:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       id:
 *         type: integer
 *         format: int32
 *
 *       num_photos:
 *         type: integer
 *         format: int32
 *       relation:
 *         type: string
 *
 */
// export const setup = (router) => {
  /**
  * @swagger
  * /user:
  *   put: 
  *     description: Update user
  *     tags: [User]
  *     parameters:
  *       - name: data
  *         in: body
  *         required: true
  *         description: User object
  *         type: object
  *         properties:
  *           Fname:
  *             type: string
  *           Lname:
  *             type: string
  *           email:
  *             type: string
  *             format: email
  *           password:
  *             type: string
  *             format: password
  *     responses:
  *       200: 
  *         description: Success
  *         examples:
  *          application/json:
  *             
  *            {
  *                     "message": "User updated successfully",
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
  *                     "message": "User not found",
  *            }
  */
  
  
  
  
  
  router.put("/UpdateUser",(req,res)=>{
  
  
  
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /**
  * @swagger
  * /user:
  *   delete:
  *     description: Delete user 
  *     tags: [User]
  *     parameters:
  *       - name: user_id
  *         in: url
  *         required: true
  *         type: integer
  *     responses:
  *       200: 
  *         description: Success
  *         examples:
  *          application/json:
  *            
  *            {
  *                     "message": "User deleted successfully",
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
  *                     "message": "User not found",
  *            }
  */
  
  
  
  
  
  router.delete("/UpdateUser",(req,res)=>{
  
  
  
  });
  /**
  * @swagger
  * /user:
  *   post:
  *     tags: [User]
  *     description: Create a new user.
  *     responses:
  *       201: 
  *         description: Created successfully
  *         examples:
  *           application/json:
  *             
  *             {
  *                     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  *             }
  *       500: 
  *         description: Failed to create user
  *         examples:
  *           application/json:
  *             
  *             {
  *                     "message": "Failed to create user"
  *             }
  *       422: 
  *         description: User already exists
  *         examples:
  *           application/json:
  *             
  *             {
  *                     "message": "User already exists"
  *             }
  * 
  *     parameters:
  *       - in: body
  *         name: body
  *         description: user data
  *         required: true
  *         schema:
  *           $ref: '#/definitions/User'
  *    
  *   
  *     
  */
  
  router.post("/",UserController.register,auth.SendVerification );
  router.get('/:token',UserController.VerifyEmail);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  /**
  * @swagger
  * /user/login:
  *   post:
  *     tags: [User]
  *     description: User Login.
  *     responses:
  *       200: 
  *         description: Success
  *         examples:
  *          application/json:
  *           
  *            {
  *                     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  *            }
  *       500:
  *         description: Failed
  *         examples:
  *           application/json:
  *            
  *             {
  *                     "message": "Failed to login",
  *             }
  * 
  *     parameters:
  *       - in: body
  *         name: body
  *         description: user data
  *         required: true
  *         schema:
  *           $ref: '#/definitions/UserLogin'
  *    
  *   
  *     
  */
  
  router.post("/login",UserController.login,auth.authorization);
  /**
      * @swagger
      * /user/followers:
      *   get:
      *     description: Returns list of the followers of a specific user identified by the given user_id
      *     tags: [User]
      *    
      *           
      *     responses:
      *       200:
      *         description: Success
      *         schema: 
      *           type: array
      *           items:
      *             $ref: '#/responses/follower'
      *       401:
      *         description: Unauthorized
      *         examples:
      *           application/json:
      *             
      *             {
      *                       "message": "Permission denied"
      *             }   
      *       404:
      *         description: Not found
      *         examples:
      *           application/json:
      *             
      *             {
      *                       "message": "User not found"
      *             }   
      */
      
      
      
      
      
   router.get("/",auth.authentication,UserController.GetUser);
  
  /**
      * @swagger
      * /user/following:
      *   get:
      *     description: Returns list of the users followed by a specific user identified by the given user_id
      *     tags: [User]
      *     
      *           
      *     responses:
      *       200:
      *         description: Success
      *         schema:
      *           type: array
      *           items:
      *             $ref: '#/responses/follower'
      *       401:
      *         description: Unauthorized
      *         examples:
      *           application/json:
      *             
      *             {
      *                       "message": "Permission denied"
      *             }   
      *       404:
      *         description: Not found
      *         examples:
      *           application/json:
      *             
      *             {
      *                       "message": "User not found"
      *             }   
      */
   router.get("/user",(req,res)=>{
      
      
      
  });
       /**
      * @swagger
      * /user:
      *   get:
      *     description: Return data corresponding to the given user_id
      *     tags: [User]
      *     
      *     responses:
      *       200:
      *         description: success
      *         schema:
      *           $ref: '#/responses/UserById'
      *       401:
      *         description: Unauthorized request
      *         examples:
      *           application/json:
      *            
      *             {
      *                       "message": "User not allowed to perform request"
      *             }
      *       404:
      *         description: Not found
      *         examples:
      *           application/json:
      *             
      *             {
      *                       "message": "User not found"
      *             }
      *   
      */
      
      
      
      
      
        router.get("/user",(req,res)=>{
      
      
      
      });
  
   /**
      * @swagger
      * /user/photos:
      *   get:
      *     description: Return public and private photos for the user
      *     tags: [User]
      *    
      *     responses:
      *       200:
      *         description: success
      *         schema:
      *           type: array
      *           items:
      *             $ref: '#/responses/user_image'
      *       401:
      *         description: Unauthorized request
      *         examples:
      *           application/json:
      *            
      *             {
      *                       "message": "User not allowed to perform request"
      *             }
      *       404:
      *         description: Not found
      *         examples:
      *           application/json:
      *             
      *             {
      *                       "message": "User not found"
      *             }
      *   
      */
      
      
      
      
      
    router.get("/user/photos",(req,res)=>{
      
      
      
  });
  /**
  
  
  
  
  
  
  
  
  
  
  
  
  /**
      * @swagger
      * /user/avatar:
      *   put:
      *     description: Change profile picture 
      *     tags: [User]
      *     parameters:
      *       - name: body
      *         in: body
      *         schema:
      *           $ref: '#/definitions/Avatar'
      *     responses:
      *       200:
      *         description: Success
      *         examples:
      *           application/json:
      *             
      *             {
      *                     "message": "Avatar updated successfully",
      *             }
      *       404:
      *         description: Not found
      *         examples:
      *           application/json:
      *            
      *             {
      *                     "message": "Photo not found",
      *             }
      *       401:
      *         description: Unauthorized
      *         examples:
      *           application/json:
      *             
      *             {
      *                     "message": "Unauthorized request",
      *             }
      */
      
      
      
      
      
   router.put("/user/avatar",(req,res)=>{
      
      
      
  });
   /**
      * @swagger
      * /user/about:
      *   get:
      *     description: Return data corresponding to the given user_id
      *     tags: [User]
      *     parameters:
      *       - name: user_id
      *         in: url
      *         required: true
      *         schema:
      *           type: integer
      *           format: int32
      *           
      *     responses:
      *       200:
      *         description: Success
      *         schema:
      *           $ref: '#/responses/UserAbout' 
      *       404:
      *         description: Not found
      *         examples:
      *          application/json:
      *             
      *            {
      *                       "message": "User not found"
      *            }   
      */
      
      
      
      
   router.get("/user",(req,res)=>{
      
      
      
  });
  
  
  /**
  * @swagger
  *  /user/galleries:
  *   get:
  *     description: Get user galleries
  *     tags: [User]
  *    
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/responses/gallery'
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
  *                     "message": "one or more gallery are not found",
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
  
  
  
  
  
  router.post("/getphotos",(req,res)=>{
  
  
  
  });
  
  
  
  /**
  * @swagger
  *  /user/albums:
  *   get:
  *     description: Get user albums
  *     tags: [User]
  *    
  *     responses:
  *       200:
  *         description: Success
  *         schema:
  *           $ref: '#/responses/gallery'
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
  *                     "message": "one or more album are not found",
  *             }
  *       500:
  *         description: Gallery not found
  *         examples:
  *            application/json: 
  *              {
  *                     "message": "album not found",
  *              }
  *   
  */
  
  
  
  
  
  router.post("/getphotos",(req,res)=>{
  
  
  
  });
  
  
  /**
  * @swagger
  * /user/fav:
  *   get:
  *     tags: [User]
  *     description: delete a photo to favs list and add the user to that photo's fav list.
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
  *      
  *     parameters:
  *       - name: photo_id
  *         in: body
  *         required: true
  *         description: Photo id to delete from fav list
  *         schema:
  *           type: integer
  *     
  */
  
  router.post("user/fav",(req,res)=>{
  
  
    console.log(req.body.name);
    
    
    
    
    
    })  ;     
  
  
  /**
   * @swagger
   * responses:
   *   photo:
   *     type: object
   *     properties:
   *       photo_url:
   *         type: string
   *       photo_title:
   *         type: string
   *       photo_id:
   *         type: integer
   *       owner_username:
   *         type: string
   *       num_comments:
   *         type: integer
   */
  
  
  //}
  module.exports=router;
