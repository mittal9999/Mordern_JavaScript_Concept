//  javascript have 2 types of data types
// 1. primitive   data type
// String - Sequence of charcters. Must in quotes or backticks
// Number - integer as well as floating point number 
// Boolean  - Logical entity / true or false
// Null - Intentional absence of any object value
// undefined - 
// Symbol - Built-in-object whose constructor returns a unique symbol
// bigInt - very large number   Numbers that are greater than the 'Number' type can handle




// 2. reference type (Object)
//  Reference type or object are non primitive value and when assigned to a variable the variable is given a reference o that value .

// object literals , arrays, and functios are all reference type



// Static Typing vs  Dynamic Types
//  javascript is a daynamically type language. this means , we do not explicitly define the types for our variable.
// manyother languages are statically -typed such as C,C++ and JAVA 


// String
const firstName = 'Sara';
// const output  = firstName;

// console.log(firstName, typeof firstName);

// Number
const age = 27;
// const output  = age;
const temp = 98.9;
// const output  = temp;

// boolean
const haskids = true; 
// const output = true; 

// null
const aptNumber = null;
// const output = aptNumber;

// undefine
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');
// const output = id;

// BigInt
const n = 9874651324568n;
// const output = n;

// Reference Type 
const numbers = [1,2,3,4];
// const  output = numbers;
const person = {
 name : 'Brad'
};
// const  output = person;


function sayHello(){
    console.log('Hello');
}
const output = sayHello;



console.log(output, typeof output);

