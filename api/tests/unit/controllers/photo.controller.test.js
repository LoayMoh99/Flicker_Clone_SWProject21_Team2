const httpmocks = require('node-mocks-http');
const mongoose = require('mongoose');
const photoController = require('../../../src/controllers/photo.controller');
const photoModel = require('../../../src/models/photo.model')

//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
beforeAll(async () => {
    const url = "mongodb://127.0.0.1:27017/jestphoto";
    await mongoose.connect(url,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true

        });

});
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('create new comment',async () => {
    it('should return error 400 if photoId sent in params is invalid', async () => {
        // create fake response and request
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {
            comment: 'Ahmed'
        }
        //set parameters sent in path
        req.params = {
            photoId: '5657'
        }
        //Photo.findById = jest.fn().mockReturnValue({ _id: 5657, privacy: 'private', ownerId: 56757 })

        photoController.addComment(req, res);
        expect(res._getStatusCode()).toBe(400);

    });
    it('should check if findById is called and return true', async ()=> {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            photoId: '608f4985490a9381560f77e1'
        };
        res.locals.userid={
            id:'608f4985490a9381560f77e1'
        };
        photoModel.Photo.findById=jest.fn();
        photoModel.validateComment=jest.fn();
        photoController.addComment(req, res);
        //expect(photoModel.validateComment).toHaveBeenCalled();
        expect(photoModel.Photo.findById).toHaveBeenCalled();
    });
    it('should return status 200 when inputs are valid',  async ()=> {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            photoId: '608f4985490a9381560f77e1'
        };
        res.locals.userid={
            id:'608f4985490a9381560f77e1'
        };
        photoController.getComments(req, res);
        expect(res._getStatusCode()).toBe(200);
    });
});

describe('get comments', async () => {
    it('should return error 400 if photoId sent in params is invalid', async() => {
        // create fake response and request
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {
            comment: 'Ahmed'
        }
        //set parameters sent in path
        req.params = {
            photoId: '5657'
        }
        //Photo.findById = jest.fn().mockReturnValue({ _id: 5657, privacy: 'private', ownerId: 56757 })

        photoController.getComments(req, res);
        expect(res._getStatusCode()).toBe(400);

    });
    it('should check if findById is called and return true', async ()=> {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            photoId: '608f4985490a9381560f77e1'
        };
        res.locals.userid={
            id:'608f4985490a9381560f77e1'
        };
        photoModel.Photo.findById=jest.fn();
        photoModel.validateComment=jest.fn();
        photoController.getComments(req, res);
        //expect(photoModel.validateComment).toHaveBeenCalled();
        expect(photoModel.Photo.findById).toHaveBeenCalled();
    });
    it('should return status 200 when inputs are valid',  async()=> {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            photoId: '608f4985490a9381560f77e1'
        };
        res.locals.userid={
            id:'608f4985490a9381560f77e1'
        };
        photoController.getComments(req, res);
        expect(res._getStatusCode()).toBe(200);
    });
});

describe('delete comments', async () => {
    it('should return error 400 if photoId sent in params is invalid', async () => {
        // create fake response and request
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {
            comment: 'Ahmed'
        }
        //set parameters sent in path
        req.params = {
            photoId: '5657'
        }
        //Photo.findById = jest.fn().mockReturnValue({ _id: 5657, privacy: 'private', ownerId: 56757 })

        photoController.deleteComment(req, res);
        expect(res._getStatusCode()).toBe(400);

    });
    it('should check if findById is called and return true', async ()=> {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            photoId: '608f4985490a9381560f77e1'
        };
        res.locals.userid={
            id:'608f4985490a9381560f77e1'
        };
        photoModel.Photo.findById=jest.fn()
            .mockReturnValue({id:req.params.photoId,comments:[{id:3242,comments:'hey'}]});
        photoModel.validateComment=jest.fn();
        
        photoController.deleteComment(req, res);
        //expect(photoModel.validateComment).toHaveBeenCalled();
        expect(photoModel.Photo.findById).toHaveBeenCalled();
    });
    it('should return status 200 when inputs are valid', async ()=> {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            photoId: '608f4985490a9381560f77e1'
        };
        res.locals.userid={
            id:'608f4985490a9381560f77e1'
        };
        photoController.deleteComment(req, res);
        expect(res._getStatusCode()).toBe(200);
    });
});