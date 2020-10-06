const expect = require("chai").expect;
const calculateTotal = require("../server.js").calculateTotal;
const app = require("../server");

const firstTest = calculateTotal(40, true, "no");

describe("Testing the calc fucntion", function(){
    it("total price is correct", function () {
        expect(firstTest).to.be.equal(45.2);
      });
});
