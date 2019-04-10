process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var app = require('../app');

chai.use(chaiHttp);



describe('Todo', () => {
  describe('API', () => {
    it('should show default welcome message', done => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.equal('Welcome to the beginning of nothingness');
          done();
        });
    });
    it('should show api welcome message', done => {
      chai.request(app)
        .get('/api')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.equal('Welcome to the Cake Boss API!');
          done();
        });
    });
  });
});