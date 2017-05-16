'use strict'
 //This function takes in an integer value and generate prime number from 0 to n
 function getPrimes(num) {
  let primeNum = [2, 3];

  let checkPrime = function(num) {
    let numIsPrime;
    for(let i = 2; i < num; i++){
           if(num % i === 0){
               numIsPrime = false ;
               break;
           }
           else {
            numIsPrime = true;
           }
      }
      return numIsPrime;
  }

  if (num < 0) {
    return "negative integers can not be prime";
  }
  else if (num === 0) {
    return '0 is not a prime number';  
  }
  else if (num === 1) {
    return '1 is not a prime number';  
  }
  else if (num === 2) {
    return [2];
  }
  else if (num === 3) {
    return primeNum;
  }
  else {
    for(let i = 4; i <= num; i++) {
          if(checkPrime(i) === true ){
              primeNum.push(i);
          }
    }
    return primeNum;
  }
}

module.exports = getPrimes;
