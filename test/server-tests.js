const chai = require("chai");
const expect = chai.expect;
const server = require("../server.js");

describe("Server", function() {
  describe("Test IMDb API"), function() {
    it("gets info about Pure Luck to test the API", function() {
      const promise = new Promise(function(resolve, reject) {
        const output = server.test();
        resolve(output);
      }).then(function(data) {
        expect(data).to.have.property("Title").and.equal("Pure Luck");
      })
    });
  }
});
