const jwt = require("jsonwebtoken");
const configure = require("../config/default.json")
const nodemailer = require('nodemailer');
const emailExisyence = require('email-existence');
const Model = require('../models/user.model')
const secret = configure.JWT_KEY;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
module.exports.authorization = (req, res) => {

  let token = jwt.sign({ id: res.locals.userid }, secret, { expiresIn: '24 hours' });
  res.status(200).send({ token: token });


}
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
module.exports.authentication = (req, res, next) => {


  let token = req.headers['token'];
  if (!token)
    res.status(403).send({ message: "no token" });

  jwt.verify(token, secret, (err, decoded) => {

    if (err)
      res.status(500).send({ message: "error while trying to decode the token" });

    if (!decoded)
      res.status(401).send({ message: "failed to authenticate" });
    res.locals.userid = decoded.id;
    next();
  });


}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.SendVerification = async (req, res) => {

  emailExisyence.check(req.body.email, async (err, response) => {
    if (err) {
      await Model.UserModel.deleteOne({ Email: req.body.email });
      return res.status(400).send({ message: 'invalid email , insert valid one' });
    }

    ;
  });



  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dropoidcompany@gmail.com',
      pass: 'Dropoid123',
    },
    tls: {
      rejectUnauthorized: false
    },
  });



  let token = jwt.sign({ email: req.body.email }, secret, { expiresIn: '24 hours' });

  let option = {
    from: 'noreplay@example.com', // sender address
    to: req.body.email, // list of receivers
    subject: "Mail confirmation", // Subject line
    text: "confirm please your mail", // plain text body
    html: '<a href="' + req.protocol + '://' + req.get('host') + req.originalUrl + '/' + token + '">link of confirmation</a>', // html body
  }


  let info = await transporter.sendMail(option, (err, data) => {

    if (err)
      return res.status(400).send({ message: 'failed to sent verification mail please fill with a valid email' });
    else
      return res.status(200).send({ message: 'email verification has been sent to you' });

  });



}
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
