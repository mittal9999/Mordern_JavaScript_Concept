const myString = 'devloper';

let myNewString;
// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
 myNewString = myString[0].toUpperCase() + myString.substring(0);
// solution 3:
//  myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
 myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log("hello");
console.log(myNewString);