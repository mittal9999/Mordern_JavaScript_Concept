// function add(a,b) {
//     return a+b;
// }
// regular function like this
// const add = function () {}

// Arrow function syntax
const add = (a,b) =>{
    return a + b;
};

// Implicit Retur
const subtract = (a,b)=> a-b;

// can Leave off () with a single param
 const double = (a) => a * 2;


// Returning an object
const createObj = () => ({
    name:"Bard"
});

const numbers = [1,2,3,4,5];
numbers.forEach(function (n) {
console.log(n);
});

// Arroe function in a callback
numbers.forEach(n => console.log(n));

console.log(add(4,2));
console.log(subtract(3,1));
console.log(double(10));
console.log(createObj());
