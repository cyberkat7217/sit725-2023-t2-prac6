

const { expect } = require("chai"); 
const request = require("request");
let project;


describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request('http://localhost:3000/api/project', function(error,response,bodyString){
        //console.log(arguments);
        done();
        });
    });
});


describe('test POST api', function(){
    it('post object to DB', function(done){
        request.post({url:'url',form:project}, function(error,response,bodyString){
        //console.log(arguments);
        done();
        });
    });
});



describe('test DELETE api', function(){
    it('delete a object', function(done){
        request.delete({url:'url',form:project}, function(error,response,bodyString){
        //console.log(arguments); 
        done();
        });
    });
}); 