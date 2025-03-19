let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed =[12 ,'hello',true, null];

// Array Constructor
const fruits = new Array('apple','grape','orange');

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favourite fruit is an ${fruits[2]}`;
x = numbers.length;
fruits[2] = 'pear';
fruits[3]= 'banana';

// fruits.length = 3;
fruits[fruits.length] = 'blueberry';
x  = fruits;

console.log(x);

