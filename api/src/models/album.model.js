const mongoose = require('mongoose');
const Photo = require("./photo.model");
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 255
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: 1024
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }],
    coverPhoto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }

}, {
    timestamps: true
});

function validateAlbumId(id)
{
    const schema = Joi.object({
        id: Joi.objectId().required()
    });
    const result = schema.validate(id);
    return result;
}

function validateCreateAlbum(album)
{
    const schema = Joi.object({
        title: Joi.string().required().max(255),
        description: Joi.string().max(1024).allow(null,''),
        photos: Joi.array().items(Joi.objectId().required).required(),
        coverPhoto: Joi.objectId()
    });
    const result = schema.validate(album);
    return result;
}

function validateUpdateAlbum(album)
{
    const schema = Joi.object({
        title: Joi.string().max(255),
        description: Joi.string().max(1024).allow(null,''),
        coverPhoto: Joi.objectId()
    });
    const result = schema.validate(album);
    return result;
}


const Album = mongoose.model('Album', albumSchema);


module.exports = {
    Album,
    validateAlbumId,
    validateCreateAlbum,
    validateUpdateAlbum
}