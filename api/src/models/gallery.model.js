const Joi=require('joi');
const mongoose=require('mongoose');
const schema=mongoose.Schema;

const GallerySchema= new mongoose.Schema({
    title:{
        type:String,
        min:1,
        required:true,
        minlength:5,
        maxlength:50,
        unique:true
    },
    description:{
        type:String,
        min:1,
        minlength:30,
        maxlength:255,
        required:true
    },
    Date2Creat:{
        type:Date,
        default:Date.now,

    },
    
    Photos:[{
            type:schema.Types.ObjectId,
            ref:'photos'
    }],
    
    cover_photo:{
        type:schema.Types.ObjectId,
        ref:'photos'
    },

    User:{
        type:schema.Types.ObjectId,
        ref:'users'

    }

});

const Gallery = mongoose.model('Gallery',GallerySchema);
function validateGallery(gallery) {
    const schema = Joi.object({
      title: Joi.string().min(5).max(50).required(),
      description: Joi.string().min(30).max(255).required()
    });
    return schema.validate(gallery);
};

module.exports.validateGallery=validateGallery;
module.exports.Gallery = Gallery;
module.exports.GallerySchema=GallerySchema; 