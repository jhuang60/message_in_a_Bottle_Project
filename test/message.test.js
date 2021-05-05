const request = require('supertest');
const {describe} = require('mocha');
const assert = require('assert');
const server = require('../server');
const app = require('../app.js');
const chai = require('chai'), chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

//Test the index page for components. This makes sure that all
//front end components are inplace and not mistakenly modified
//and the page returns 200 OK success status response
describe("get index home page", function(){
  it("expected 200 request and show header: 'Message Bottle App', 'Receive a Message', 'Send a Message', and 'Get a message'", function (done){
    request(app).get("/")
    .expect(200)
    .expect(/Message Bottle App/)
    .expect(/Receive a Message/)
    .expect(/Send a Message/)
    .expect(/Get a message/, done);
  });
});

//Test the post page for components. This makes sure that all
//front end components are inplace and not mistakenly modified
//and the page returns 200 OK success status response
describe("get post message form page", function(){
  it("expected 200 request and show header: 'Send a message', 'Receive a Message', 'Anonymous Name:', 'Message:', and 'Send!'", function (done){
    request(app).get("/message")
    .expect(200)
    .expect(/Send a message/)
    .expect(/Receive a Message/)
    .expect(/Anonymous Name:/)
    .expect(/Message:/)
    .expect(/Send!/, done);
  });
});

//Test the index page for get requests. This makes sure the get
//request returns an object and the page returns 200 OK
//success status response
describe("get all messages as object from the index page", function(){
  it('should list ALL messages on GET, return 200 reponse, and make sure it is an obj', function(done) {
    request(app).get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          done();
      });
  });
});

//Test the post page for post requests. This inserts two
//inputs and makes sure that it returns a 201 status response,
//an _id, and makes sure that it is an object
describe("post a new message", function(){
  it("expected 201 request from post message", function (done){
    request(app).post("/messages")
    .send({'anonymousName':'a name', 'message':'this is a new test message'})
    .end((err, res) => {
      expect(res).to.have.status(201);
      expect(body).to.contain.property('_id');
      expect(res).to.be.a('object');
      done();
    });
  });
});
