const auth=require('../../../src/middlewares/auth');
const httpmocks=require('node-mocks-http');
const jwt=require('jsonwebtoken');
const config=require('config');
const secret=config.get('JWT_KEY');

//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

test('testing authorization',async()=>{

const id='345';

function callback(){
    expect(res.locals).toHaveProperty('userid',id);
   // return;
    console.log(res.locals.userid);
}
const res=httpmocks.createResponse();
const req=httpmocks.createRequest();


const token=await jwt.sign(id,secret)
req.headers['token']=token

auth.authorization(req,res,callback);



})
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////