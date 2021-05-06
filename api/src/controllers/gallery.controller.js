const mongoose = require('mongoose');
const Photo=require('../models/photo.model');
const _ = require('lodash');
const {validateGallery,Gallery,GallerySchema}=require('../models/gallery.model');
const User=require('../models/user.model');


module.exports.create=async(req,res)=>{
    const { error } = validateGallery(req.body); 
   
    if (error) return res.status(400).send({message:error.details[0].message});
    
     try {
        const gallery = new Gallery(_.pick(req.body, ['title', 'description']));

        const user = await User.UserModel.findById(res.locals.userid);
 
        console.log(user._id);
        user.Gallery.push(gallery._id);
        
        gallery.User=res.locals.userid;

        await gallery.save();
        await user.save();
        res.status(200).send({
            gallery_id:gallery._id,
            gallery_url: req.get("host")+req.originalUrl+'/'+gallery._id
        });
    } catch (ex) {
        res.status(500).send({message:"Failed to create gallery"});
    }
};


module.exports.addphoto=async(req,res)=>{
    const gallery= await Gallery.findById(req.body.gallery_id);
    if(!gallery) return res.status(404).send({message:'Gallery not found'});

    const photo= await Photo.Photo.findById(req.body.Photo_id);
    if(!photo) return res.status(404).send({message:'photo not found'});

    if (res.locals.userid!=gallery.User)
    {
        return res.status(401).send({message:'not authorized'});
    }

    if(gallery.Photos.includes(req.body.Photo_id)) return res.status(500).send({message:'Photo is already in this gallery'});
    
    try {
        gallery.Photos.push(req.body.Photo_id);
        await gallery.save();

        res.status(201).send({
            gallery_id:gallery._id,
            gallery_url: req.get("host")+req.originalUrl+'/'+gallery._id
        });
    } catch (ex) {
        res.status(500).send({message:'Failed to add photo to gallery'});
    }
};

module.exports.deletePhoto=async(req,res)=>{
    const gallery= await Gallery.findById(req.params.gallery_id);
    if(!gallery) return res.status(404).send({message:'Gallery not found'});

    const photo= await Photo.Photo.findById(req.params.photo_id);
    if(!photo) return res.status(404).send({message:'photo not found'});

    if (res.locals.userid!=gallery.User)
    {
        return res.status(401).send({message:'Unauthorized request'});
    }

    if(!gallery.Photos.includes(req.params.photo_id)) return res.status(500).send({message:'Image not member of the gallery'});

    try {
        var index=-1;
        
        var i;
        for (i =0;i<gallery.Photos.length;i++)
        {
            if(req.params.photo_id==gallery.Photos[i])
            {
                index=i;
            }
        }
        // const index = gallery.photos.(req.params.photo_id);
        // console.log(req.params.photo_id);
        if (index > -1) {
            gallery.Photos.splice(index, 1);
        }
        // console.log(req.params.photo_id);
        await gallery.save();
        res.status(200).send({message:'Photo removed successfully'});
    } catch (ex) {
        
    }
};

