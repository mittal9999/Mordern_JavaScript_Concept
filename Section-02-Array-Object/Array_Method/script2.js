let x;

const arr = [23, 34, 55,54,20];

// arr.push(100);
// arr.pop();
// arr.unshift(99);
// arr.shift();
// arr.reverse();

x =arr.includes(4);
x = arr.indexOf(54);


// slice and splice
 x = arr.slice(1, 4);
// x=arr.splice(1,4);
// x = arr.splice(3 ,1);

x = arr.splice(1 ,4).reverse().toString().charAt(0);






console.log(x, arr);
