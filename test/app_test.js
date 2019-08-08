process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

describe('Cake boss', () => {
  describe('API', () => {
    it('should show default welcome message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.equal('Welcome to the beginning of nothingness');
          done();
        });
    });
    it('should show api welcome message', (done) => {
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
