const mongoose = require('mongoose');
const app = require('./app');
const config = require('config');


let server;
const db=config.get('db');
const port=config.get('PORT');

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  server = app.listen(port, () => {
    console.log(`Listening to port ${port} `);
    
  });
}).catch(err => {
  console.log('Error: ', err);
});
