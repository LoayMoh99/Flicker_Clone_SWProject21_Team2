const httpmocks=require('node-mocks-http');
const mongoose=require('mongoose');
const gallerymodel=require('../../../src/controllers/gallery.controller');
//const { describe } = require('joi/lib/types/lazy');
//const { items } = require('joi/lib/types/array');
const {validateGallery,Gallery,GallerySchema} = require('../../../src/models/gallery.model');
beforeAll(async()=>{
    const url="mongodb://127.0.0.1:27017/jestuser";
await mongoose.connect(url,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
        
      });

    });
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

    afterAll(async()=>{
await mongoose.connection.db.dropDatabase();
await mongoose.connection.close();

    })



describe('create new gallery',()=>{
    it('should test if the data passed is not corect',()=>{
        const req=httpmocks.createRequest();
        const res=httpmocks.createResponse();
        req.body={
            title:'',
            description:'this is my description for my first gallery'
        };
        gallerymodel.create(req,res);
        expect(res._getStatusCode()).toBe(400);
    });

    it('should test if the data are correcet the the response status shloud be 200',()=>{
        const req=httpmocks.createRequest();
        const res=httpmocks.createResponse();
        req.body={
            title:'first gallery',
            description:'this is my description for my first gallery'
        };
        gallerymodel.create(req,res);
        expect(res._getStatusCode()).toBe(200);
    });
});

    




