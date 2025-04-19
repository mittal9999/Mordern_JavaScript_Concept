if (true) {
    console.log('This is true');
}
if (false) {
    console.log('this is NOT true');
}


const x = 103;
const y = 102;

if (x > y) {
    console.log(`${x} is greater then ${y}`);
}

if (x >= y) {
    console.log(`${x} is greater then  or equal to  ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to  ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

// block scope (const, let)
if(x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}
// console.log(z);

// Shorthand IF
if (x >= y) 
    console.log(`${x} is greater then  or equal to  ${y}`),
console.log('This is true');
else console.log('This is false');
