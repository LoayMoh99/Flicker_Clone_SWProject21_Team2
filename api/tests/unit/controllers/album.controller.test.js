const httpmocks = require('node-mocks-http');
const mongoose = require('mongoose');
const albumController = require('../../../src/controllers/album.controller');
const albumModel = require('../../../src/models/album.model');
const config=require('config')
//const db=config.get('db');
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
beforeAll(async () => {
    const db=config.get('dbtest');
    const url = db+"/jestalbum";
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
   

})

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

describe('Create new album', async () => {
    // it('Should return 201, successfully created, when the passed parameters are satisfactory', async () => {
    //     // create fake response and request 
    //     const req = httpmocks.createRequest();
    //     const res = httpmocks.createResponse();
    //     // set title and description and photos data in the req body
    //     req.body = {
    //         title: 'Album1',
    //         description: 'my first album',
    //         photos: [
    //             '6093528c112f9f5bec107920', '6093528c112f9f5bec107921'
    //         ],
    //         coverPhoto: '6093528c112f9f5bec107920'
    //     };

    //     albumController.createAlbum(req, res);
    //     expect(res._getStatusCode()).toBe(201);
    // })
    it('Should return 400 if parameters are not valid', async () => {
        // create fake response and request 
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set req body, here title is a required property so it willl fail
        req.body = {
            description: 'my first album',
            photos: [
                '6093528c112f9f5bec107920'
            ],
        };
        albumController.createAlbum(req, res);
        expect(res._getStatusCode()).toBe(400);
    })
});

describe('get album by id', async () => {
    it('Should return 400 is the album id is not valid', async () => {
        // create fake response and request 
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set req params
        req.params = {
            id: '1234' // Invalid ID
        }
        albumController.getAlbumbyId(req, res);
        expect(res._getStatusCode()).toBe(400)
    });
    it('Should check if findById is called and return true', async () => {
        // create fake response and request 
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set request params
        req.params = {
            id: '60933af42a33b75d783afcc8'
        }
        albumModel.Album.findById = jest.fn();
        albumController.getAlbumbyId(req, res);
        expect(albumModel.Album.findById).toHaveBeenCalled();
    });
    it('should return status 200 when inputs are valid', async () => {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        // set comment data in request body
        req.body = {};
        //set parameters sent in path
        req.params = {
            id: '608f4985490a9381560f77e1'
        };
        res.locals.userid = {
            id: '608f4985490a9381560f77e1'
        };
        albumController.getAlbumbyId(req, res);
        expect(res._getStatusCode()).toBe(200);
    });
})


describe('Delete Album', async () => {
    it('Should return 400 if the album id is not valid', async () => {
        // create fake response and request 
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set req params
        req.params = {
            id: '1234' // Invalid ID
        }
        albumController.deleteAlbum(req, res);
        expect(res._getStatusCode()).toBe(400)
    });
    it('Should check if findOneAndDelete is called and return true', async () => {
        // create fake response and request 
        const req = httpmocks.createRequest();
        const res = httpmocks.createResponse();
        // set request params
        req.params = {
            id: '60933af42a33b75d783afcc8'
        }
        albumModel.Album.findOneAndDelete = jest.fn();
        albumController.deleteAlbum(req, res);
        expect(albumModel.Album.findOneAndDelete).toHaveBeenCalled();
    })
    it('should return status 200 when inputs are valid', async () => {
        // create fake response and request
        let req = httpmocks.createRequest();
        let res = httpmocks.createResponse();
        //set parameters sent in path
        req.params = {
            id: '608f4985490a9381560f77e1'
        };
        res.locals.userid = '608f4985490a9381560f77e1'
        albumController.deleteAlbum(req, res);
        expect(res._getStatusCode()).toBe(200);
    });

})