const request = require('supertest');
const {describe} = require('mocha');
const assert = require('assert');
const server = require('../server');
const app = require('../app.js');
const chai = require('chai'), chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe("get index home page", function(){
  it("expected 200 request and show header message bottle app", function (done){
    request(app).get("/")
    .expect(200)
    .expect(/Message Bottle App/)
    .expect(/Receive a Message/)
    .expect(/Send a Message/)
    .expect(/Get a message/, done);
  });
});

describe("get send message form page", function(){
  it("expected 200 request and show header send a message", function (done){
    request(app).get("/message")
    .expect(200)
    .expect(/Send a message/)
    .expect(/Receive a Message/)
    .expect(/Anonymous Name:/)
    .expect(/Message:/)
    .expect(/Send!/, done);
  });
});

describe("get all messages as object", function(){
  it('should list ALL messages on GET', function(done) {
    request(app).get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a('object');
          done();
      });
  });
});

describe("post", function(){
  it("expected 201 request", function (done){
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
