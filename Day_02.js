//* 2620. Counter
// Easy
// 446
// 20
// Companies

//* Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//* Example 1:

//* Input:
//* n = 10
//* ["call","call","call"]
//* Output: [10,11,12]

//* Explanation:
//* counter() = 10 // The first time counter() is called, it returns n.
//* counter() = 11 // Returns 1 more than the previous time.
//* counter() = 12 // Returns 1 more than the previous time.

//* Example 2:

//* Input:
//* n = -2
//* ["call","call","call","call","call"]
//* Output: [-2,-1,0,1,2]

//* Explanation: counter() initially returns -2. Then increases after each sebsequent call.

//! Constraints:

//* -1000 <= n <= 1000
//* At most 1000 calls to counter() will be made

//**************  SOLUTION  ***************

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    const m = n;
    n = n + 1;
    return m;

    //one line solution
    // return n++;
    //Every time the function is called, it will return the value of n and then increment it by 1, then the function will end.
    // It remembers the value of n from the previous call because of closure. so return the value of n and then again increment it by 1.
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
