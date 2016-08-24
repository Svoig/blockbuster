"use strict";

const chai = require("chai");
const expect = chai.expect;
const mg = require("../movieGetter.js");

describe("movieGetter", function() {
  /*describe("movieGetter.test", function() {
    it("should return an object with property Title which equals Pure Luck", function(done) {
      const promise = new Promise(function(resolve, reject) {
        const output = mg.test();
        resolve(output);
      }).then(function(data) {
        expect(data).to.have.property("Title").and.equal("Pure Luck");
        done();
      })
      .catch(function(err) {
        console.log(err);
        done(err);
      })
    });
  });*/
  
  describe("movieGetter.genId", function() {
      
      const val = mg.genId();
      
      it("should return an id with length 9", function(done) {
        
        expect(val.length).to.equal(9);
        done();
        
      });
      
      it("should return an id beginning with tt", function(done) {
        
        expect(val.slice(0,2)).to.equal("tt");
        done();
      });
      
      it("should return an id other than tt0000000", function(done) {
        expect(val.slice(3)).to.not.equal("0000000");
        done();
      });
      
      it("should return an id other than tt1000000", function(done) {
        expect(val.slice(3)).to.not.equal("1000000");
        done();
      });
      
      it("should return an id where the number doesn't start with 6 or above", function(done) {
        expect(val.slice(4,1)).to.be.below(6);
        done();
      });

    });
    
    describe("movieGetter.getMovie", function() {
      
      beforeEach(function(done) {
        mg.activeMovies = [];
        done();
      });
      
      this.timeout(3000);
      
      it("should return a response with a property Response", function() {
         return mg.getMovie().then(function(data) {
           expect(data).to.have.property("Response");
         });
      });
      
      it("should add the movie to movieGetter.activeMovies", function() {
        return mg.getMovie().then(function(data) {
          expect(mg.activeMovies).to.have.length(1);
          expect(mg.activeMovies[0].Title).to.equal(data.Title);
        });
      });
      
    });
    
    
    
    
});
