const app = require('../../src/app');
const supertest = require('supertest');
const base = '/api/v1/';
const mongoose = require('mongoose');
const config = require('config');
const { Photo } = require('../../src/models');
const { UserModel: User } = require('../../src/models/user.model');
describe('Favs add integration tests', function () {
  beforeEach(async () => {
    await mongoose.connect(config.get('db'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    await mongoose.connection.dropDatabase();
    user = new User({
      _id: '608834536de13632903701b7',
      Email: 'test@test.com',
      UserName: 'test',
      Fname: 'test',
      Lname: 'test',
      username: 'test',
      about: 'test',
      date_joined: Date.now(),
      Age: 50,
      Password: '123456',
      Fav: [],
    });
    await user.save();
    photo = new Photo({
      _id: '608834536de13632903701b7',
      title: 'url',
      photoUrl: 'url',
      description: 'desc',
      Fav: [],
      privacy: 'public',
      ownerId: '608834536de13632903701b7',
    });
    await photo.save();
  });
  it('Should post to api/v1/favs without token', async () => {
    const photoid = {
      photo_id: '608834536de13632903701b7',
    };
    const response = await supertest(app)
      .post(base + 'favs/')
      .send(photoid);
    expect(response.status).toBe(403);
  });
  it('Should post to api/v1/favs with token and a photoId that does not exist', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODgzNDUzNmRlMTM2MzI5MDM3MDFiNyJ9.dOWzfn2laD5YWqfgKhbFgk17_cCCbkW4K6lN6CV8GSg';
    const photoid = {
      photo_id: '608834536de13632903701b5',
    };
    const response = await supertest(app)
      .post(base + 'favs/')
      .set({ token: token })
      .send(photoid);
    expect(response.status).toBe(404);
  });
  it('Should post to api/v1/favs with token and a photoId that exists', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODgzNDUzNmRlMTM2MzI5MDM3MDFiNyJ9.dOWzfn2laD5YWqfgKhbFgk17_cCCbkW4K6lN6CV8GSg';
    const photoid = {
      photo_id: '608834536de13632903701b7',
    };
    const response = await supertest(app)
      .post(base + 'favs/')
      .set({ token: token })
      .send(photoid);
    expect(response.status).toBe(200);
  });
});
describe('Favs delete integration tests', function () {
  beforeEach(async () => {
    await mongoose.connect(config.get('db'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    await mongoose.connection.dropDatabase();
    user = new User({
      _id: '608834536de13632903701b7',
      Email: 'test@test.com',
      UserName: 'test',
      Fname: 'test',
      Lname: 'test',
      username: 'test',
      about: 'test',
      date_joined: Date.now(),
      Age: 50,
      Password: '123456',
      Fav: ['608834536de13632903701b7'],
    });
    await user.save();
    photo = new Photo({
      _id: '608834536de13632903701b7',
      title: 'url',
      photoUrl: 'url',
      description: 'desc',
      Fav: ['608834536de13632903701b7'],
      privacy: 'public',
      ownerId: '608834536de13632903701b7',
    });
    photoNoFav = new Photo({
      _id: '608834536de13632903701b5',
      title: 'url',
      photoUrl: 'url',
      description: 'desc',
      Fav: [],
      privacy: 'public',
      ownerId: '608834536de13632903701b7',
    });
    await photo.save();
    await photoNoFav.save();
  });
  it('Should delete at api/v1/favs/{id} without token', async () => {
    const photoid = '608834536de13632903701b7';
    const response = await supertest(app).delete(base + 'favs/' + photoid);

    expect(response.status).toBe(403);
  });
  it('Should Fail when req contains an incorrect photoId', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODgzNDUzNmRlMTM2MzI5MDM3MDFiNyJ9.dOWzfn2laD5YWqfgKhbFgk17_cCCbkW4K6lN6CV8GSg';
    const photoid = '608834536de13632903701b9';
    const response = await supertest(app)
      .delete(base + 'favs/' + photoid)
      .set({ token: token });
    expect(response.status).toBe(404);
  });
  it('Should fail as photo is not favourite', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODgzNDUzNmRlMTM2MzI5MDM3MDFiNyJ9.dOWzfn2laD5YWqfgKhbFgk17_cCCbkW4K6lN6CV8GSg';
    const photoid = '608834536de13632903701b5';
    const response = await supertest(app)
      .delete(base + 'favs/' + photoid)
      .set({ token: token });
    expect(response.status).toBe(500);
  });
  it('Should successfully remove photo', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODgzNDUzNmRlMTM2MzI5MDM3MDFiNyJ9.dOWzfn2laD5YWqfgKhbFgk17_cCCbkW4K6lN6CV8GSg';
    const photoid = '608834536de13632903701b7';
    const response = await supertest(app)
      .delete(base + 'favs/' + photoid)
      .set({ token: token });
    expect(response.status).toBe(200);
  });
});
