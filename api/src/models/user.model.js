const mongoose = require("mongoose");
const Joi = require('joi');
const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    Fname: {
      type: String,
      min: 1
      , required: true
    },
    Lname: {
      type: String,
      min: 1
      , required: true
    },
    UserName: {
      type: String,
      min: 1
      , required: true,
      unique: true,
      dropDups: true
    },
    Email: {
      type: String
      , min: 1
      , required: true,
      unique: true,
      dropDups: true
    },
    About: {
      type: String
      , min: 1,
      default: "",
    },

    Age: {
      type: Number
      , min: 1
      , required: true
    },

    Date_joined: {

      type: Date,
      required: true,
      min: '2021-01-1',
      default: Date.now,

    },
    Password: {
      type: String,
      required: true,
      min: 1,
    },


    Num_tags: {
      type: Number,
      min: 0
    },

    views: [{
      type: schema.Types.ObjectId,
      ref: 'User'
    }
    ],

    Followers: [
      {
        type: schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    Following: [
      {
        type: schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    Group: [
      {
        type: schema.Types.ObjectId,
        ref: 'Group'
      }
    ],
    Gallery: [
      {
        type: schema.Types.ObjectId,
        ref: 'Gallery'
      }
    ],
    Avatar: {
      type: schema.Types.ObjectId,
      ref: 'Photo'
    },
    Fav: [{
      type: schema.Types.ObjectId,
      ref: 'Photo'
    }
    ],
    isActive: {
      type: Boolean,
      default: false,
    },

  }
);

UserSchema.virtual('albums', {
  ref: 'Album',
  localField: '_id',
  foreignField: 'ownerId'
})

UserSchema.virtual('photos', {
  ref: 'Photo',
  localField: '_id',
  foreignField: 'ownerId'
})
////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.validateSignup = (body) => {

  const schema = Joi.object({
    firstName: Joi.string().min(1).max(50).required(),
    lastName: Joi.string().min(1).max(50).required(),
    age: Joi.number().integer().min(1).max(200).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(1).max(50).required(),
  });

  return schema.validate(body);

}
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.validateLogin = (body) => {

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(1).max(50).required(),
  });

  return schema.validate(body);

}


module.exports.UserModel = mongoose.model('User', UserSchema);;