// way to declare variable
//  three ways to declare variable var, let ,const

let firstName = 'mittal';
let lastName = 'Rathva';


//  let age = 26;
 console.log(firstName, lastName, age);
 var age = 26;
 console.log(age);

//  Naming Conventions
//  -only letters, numbers , underscores and dollar signs
//  - Can't start with a number

// Multi-word Formating
// firstName = camelCase
// FirstName = PascalCase
// first_name = underscore
// firstname = lowercase

// Re-assigning Variable
 age = 30;
 console.log(age);
 let score;
 score = 1;
 console.log(score);

 if (true) {
    score =score + 2 ;

 }
 console.log(score);

 const x =100;

 const arr  = [1,2,3,4,5];

 arr.push(6);
console.log(arr);

const person = {
    name: "bhavesh"
};
person.name = 'mittu';
person.email = 'bhavesh@gmail.com'
console.log(person);

// Declare multiple value at once
let a,b ,c ;

const d =10, e= 20,  f=30;

console.log(d,f);