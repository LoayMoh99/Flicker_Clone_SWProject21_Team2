const httpmocks=require('node-mocks-http');
const mongoose=require('mongoose');
const userModel=require('../../../src/controllers/user.controller');
const config=require('config')


//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
beforeAll(async()=>{
    const db=config.get('dbtest');
    const url=db+"/jestuser";
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

await mongoose.connection.close();

    })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    test('testing user register',async()=>{
    // create fake response and request
     const req=httpmocks.createRequest();
     const res=httpmocks.createResponse();
     // set user data in request body
     req.body={
         Fname:'Ahmed',
         Lname:'Mohamed',
         Email:'Ahmed.mohamed10@gmail.com',
         Age:30,
         Password:'1234'

     }

     function my_next(){
         expect(res.locals).toHaveProperty('userid');
         expect(response.statusCode).toBE(200);
         return;

     }
     
    await userModel.register(req,res,my_next);



    });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('testing user login',async()=>{
        // create fake response and request
         const req=httpmocks.createRequest();
         const res=httpmocks.createResponse();
         // set user data in request body
         req.body={
             //Fname:'Ahmed',
             //Lname:'Mohamed',
             Email:'Ahmed.mohamed10@gmail.com',
             //Age:30,
             Password:'1234'
    
         }
    
         function my_nex(){
             expect(res.locals).toHaveProperty('userid');
             return;
    
         }
        await userModel.login(req,res,my_nex);
    
    
    
        });
    