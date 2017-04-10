const chai = require('chai');
const chaiHttp = require('chai-http');
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: false});
var should = chai.should();

chai.use(chaiHttp);




describe('CHANGE DIFFERENT ARTICLE', function(){

  this.timeout(5000)
  it(`should show article with title Javajog returns`, function(done){
    nightmare
      .goto('http://http://127.0.0.1:8080/')
      .wait('#sidebar')
      .click('#java-jog-returns-to-raise-money-for-women-grower-communities')
      .evaluate(function(){
        return document.querySelector('#blog-title').getAttribute('title')
      })
      .end()
      .then(function(result){
        console.log(result);
        result.should.equal('java-jog-returns-to-raise-money-for-women-grower-communities')
        done()
      })
      .catch(function(err){
        console.log('failed:--------------', err.message);
      })
  })
})
