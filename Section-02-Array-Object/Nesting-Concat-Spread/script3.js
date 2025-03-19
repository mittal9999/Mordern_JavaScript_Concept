let x;

const fruits = ['apple', 'orange','pear'];
const berries = ['strawbwrry','bluerray','rasberry'];

fruits.push(berries);
 x = fruits[3][1];
 const allfruits = [fruits,berries];
 x = allfruits[1][0];

 x =fruits.concat(berries);

//  Spread Operator(...)
x =[...fruits, ...berries];

// FLatten  Array 
const arr = [1,2,[3,4],5 ,[6,7],8];
x = arr.flat();

// Static Method on Array objet
 x =Array.isArray('Sgyttu');

 x = Array.from('12345');
 const a =1;
 const b =2;
 const c =3;

 x = Array.of(a,b,c);

console.log(x);
