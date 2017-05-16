(function(){
  'use strict';

  var chai = require('jasmine'); 

var getPrimes = require('../app/library.JS')

  describe("Test cases for getPrimes function", function() {
    it("should return an empty array if argument is equal to 4", function() {
    expect(getPrimes(4)).toBe("4 is not a prime number");
    });

    it("should return 'negative integers can not be prime' for negative integers", function() {
      expect(getPrimes(-11)).toEqual("negative integers can not be prime");
    });

     
    it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] if argument is equal to 23", function() {
     expect(getPrimes(23)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return an [2,3, 5] if the argument passed is equal to 6", function() {
      expect(getPrimes(6).toEqual([ 2, 3 ,5]);
    });

    it("should return an [2,3,5,7] if the argument passed is equal to 7", function() {
      expect(getPrimes(7)).toEqual([ 2, 3, 5, 7 ]);
    });

    it("should return an [ 2, 3, 5, 7, 11 ,13] if the argument passed is equal to 13", function() {
      expect(getPrimes(12)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
    });

    it("should return an [ 2, 3, 5, 7, 11, 13, 17, 19 ] if the argument passed is equal to 20", function() {
      expect(getPrimes(13)).toEqual([ 2, 3, 5, 7, 11 ]);
    });

    it("should return the equivalent of getPrimes(29) if the argument passed is equal to getPrimes(30)", function() {
      expect(getPrimes(30)).toEqual(getPrimes(29));
    });

    it("should return an [ 2 ] if the argument passed is equal to 2", function() {
      expect(getPrimes(2)).toEqual([ 2 ]);
    });

    it("should return an [ 2, 3, 5, 7] if the argument passed is equal to 10", function() {
      expect(getPrimes(10)).toEqual([ 2, 3, 5, 7 ]);
    });
    
  });
})();