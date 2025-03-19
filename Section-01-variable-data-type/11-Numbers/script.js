// const num =5;
let x;
const num = new Number(5);
x = num.toString();
x = num.toString().length;
// decimal 5.67
x = num.toFixed(2);

x = num.toPrecision(4);

x = num.toExponential(3);
// x = num.toLocaleString('ar-EG');
x = num.toLocaleString('en-US');

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
// console.log(num);
 console.log( x );
