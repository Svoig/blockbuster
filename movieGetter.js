"use strict";

const request = require("request");

module.exports = {
    
    activeMovies: [],
  
    test: function() {
      const url = "http://www.omdbapi.com/?t=Pure+Luck&y=&plot=short&r=json";
      
      const options = {
        method: "GET",
        url: url
      }
    
      const promise = new Promise(function(resolve, reject) {
        request(options, function(err, req, res) {
          if (err) {
            throw new Error(err);
          } else {
            resolve(JSON.parse(res));
          }
        })
      });
      
      promise.catch(function(err) {
        console.log("Server.test promise got error: ", err);
      });
      
      return promise;
      
    },
    
    genId: function() {
        let str = "tt";
        
        while (str.length < 9) {
            let char = Math.floor(Math.random() * 10);
            
            if (str.length === 2) {
              while(char > 5 || char === 0) {
                char = Math.floor(Math.random() * 10);
              }
            }
            
            str += char;
        }
        
        return str;
    },
    
    getMovie: function() {
      const self= this;
      const url = "http://www.omdbapi.com/?i=" + this.genId();
      
      const options = {
        method: "GET",
        url: url
      };
      
      const promise = new Promise(function(resolve, reject) {
        request(options, function(err, req, res) {
            if (err) {
              console.log("Got an error in getMovie");
              throw new Error(err);
            }
            else {
              self.activeMovies.push(JSON.parse(res));
              resolve(JSON.parse(res));
            }
        });
      });
      
      
      promise.catch(function(err) {
        throw new Error(err);
      });
      
      return promise;
    }
} 