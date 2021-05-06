const { Album, validateAlbumId, validateCreateAlbum, validateUpdateAlbum } = require('../models/album.model');
const Photo = require('../models/photo.model');
const {UserModel} = require('../models/user.model');

const createAlbum = async (req, res) => {

    // Old validations commented for possible future need
    // const bodyParams = Object.keys(req.body);
    // const AllowedParams = ['title', 'description', 'photos', 'coverPhoto'];
    // const isValidOperation = bodyParams.every((bodyParam) => AllowedParams.includes(bodyParam));
    const { error } = validateCreateAlbum(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    try {

        if (req.body.photos.length != 0)
            req.body.photos.forEach(async (photo_id) => await Photo.findById(photo_id));

        if (req.body.coverPhoto) { // if the cover photo was passed
            if (req.body.photos.length == 0 || !req.body.photos.includes(coverPhoto)) // and it is not included in the photos array or it is passed and the array of photos is empty
                throw new Error("cover Photo must be a included in photos array");
        } else { // if the cover photo was not passed
            if (req.body.photos.length != 0) // and the photos array is not empty
            {
                req.body = {
                    ...req.body,
                    coverPhoto: req.body.photos[0] // the default cover photo is the first photo in the array
                }
            }
        }
        const album = new Album({
            ...req.body,
            ownerId: res.locals.userid
        });
        await album.save();
        //The following lines to modify the properties in the response object to match the documentation
        const albumObject = album.toObject()
        delete albumObject.ownerId;
        delete albumObject.updatedAt;
        delete albumObject.__v;
        res.status(201).send(albumObject);
    } catch (error) {
        res.status(500).send({ error: "An error has occured" })
    }
};

const updateAlbum = async (req, res) => {
    const _id = req.params.id;

    // Old validations commented for possible future need
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'coverPhoto'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation || updates.length == 0)
        return res.status(400).send({ error: "Invalid updates" });
    const { error } = validateUpdateAlbum(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const { error2 } = validateAlbumId({ id: _id });
    if (error2)
        return res.status(400).send(error2.details[0].message);
    try {
        const album = await Album.findOne({ _id, ownerId: res.locals.userid });
        if (!album) {
            return res.status(404).send({ error: 'Album not found!' });
        }
        updates.forEach((update) => {
            album[update] = req.body[update];
        })
        await album.save();
        res.send({ message: 'Album updated successfully' });
    } catch (error) {
        res.status(500).send({ error: "An error occured" });
    }
}

const deleteAlbum = async (req, res) => {
    const _id = req.params.id;
    const { error } = validateAlbumId({ id: _id });
    if (error)
        return res.status(400).send(error.details[0].message);
    try {
        const album = await Album.findOneAndDelete({ _id, ownerId: res.locals.userid });
        if (!album) {
            return res.status(404).send({ error: "Album not found" });
        }
        res.status(200).send({ message: "Album successfully deleted" });
    }
    catch (error) {
        res.status(500).send({ error: "An error has occured" });
    }

};

const getAlbumbyId = async (req, res) => {
    const _id = req.params.id;
    const { error } = validateAlbumId({ id: _id });
    if (error)
        return res.status(400).send(error.details[0].message);
    try {
        const album = await Album.findById({ _id, ownerId: res.locals.userid });
        if (!album)
            return res.status(404).send({ error: "Album not found" });
        await album.populate('photos').execPopulate();
        const albumObject = album.toObject();
        delete albumObject.ownerId;
        delete albumObject.__v;
        res.status(200).send(albumObject);
    } catch (error) {
        res.status(500).send({ error: "Album id not sent" });
    }
};

const getUserAlbums = async (req, res) => {
    const user = await UserModel.findById(res.locals.userid);
    try {
        await user.populate('albums').execPopulate();
        const albums = user.albums;
        var albumsObj = [];
        Array.prototype.forEach.call(albums, (album) => {
            const albumObj = album.toObject();
            delete albumObj.ownerId
            delete albumObj.__v
            albumsObj.push(albumObj);
        })
        res.status(200).send(albumsObj);

    } catch (error) {
        res.status(500).send({ error: "Internal server Error" });
    }
}

const getAlbumbyUsername = async (req, res) => {
    try {
        const user = await UserModel.findOne({ UserName: req.params.username });
        if (!user)
            res.status(404).send({ error: "User is not found" });

        await user.populate('albums').execPopulate();
        const albums = user.albums;
        var albumsObj = [];
        Array.prototype.forEach.call(albums, (album) => {
            const albumObj = album.toObject();
            delete albumObj.ownerId
            delete albumObj.__v
            albumsObj.push(albumObj);
        })
        res.status(200).send(albumsObj);
    } catch (error) {
        res.status(500).send({ error: "Username is not sent correctly" });
    }
}

module.exports = {
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getAlbumbyId,
    getUserAlbums,
    getAlbumbyUsername
};

