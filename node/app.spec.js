const app = require('./app.js');
const request = require('supertest');


describe('GET Users는', ()=>{
  it('...',(done)=>{
    request(app)
    .get('/users')
    .end((err, res)=>{
      console.log(res.body);
      done();
    })
  })
})