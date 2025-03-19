let x;
const name  ='mittal';
const age = 30;
x = 'Hello , my name is '   + name +  ' and I am' + age + 'years old.'

//  Template Literals
x = `Hello ,my name is ${name} and I am ${age} years old`;

//String properties and method
const s =  new String('hello world');
x = typeof s;

 x = s.length;


//  Access value by key
x = s[1];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('o');
x = s.substring(0,4);
x = s.substring(7);
x =s.slice(0,3);
x = s.trim();
x = '     hello world';
x = s.replace('world','john');
x = s.includes('Hell');
x = s.valueOf();
x = s.split('');

console.log(x);
