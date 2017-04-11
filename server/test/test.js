const chai = require('chai');
const chaiHttp = require('chai-http');
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);




describe('CHANGE DIFFERENT ARTICLE', function(){

  this.timeout(15000)
  it(`should show article with title Javajog returns`, function(done){
    nightmare
      .goto('http://127.0.0.1:8080/')
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
        done()
      })
  })
})
