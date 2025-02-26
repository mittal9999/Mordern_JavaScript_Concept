// challenge 1 

const arr = [1,2,3,4,5];
// arr.reverse();
// arr.push(o);
// arr.unshift(6);

arr.push(6);
arr.unshift(0);
arr.reverse();
// console.log(arr);

// Result:[6,5,4,3,2,1,0]


// challenge 2

const arr1 =  [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// solution 1
const arr3 = arr1.slice(0,4).concat(arr2);

// solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4,1);

// console.log(arr4);










// OBJECT Literals

let x1;
const  person = {
    name: 'john Doe',
    age:22,
    isAdmin:true,
    Address: {
        street:'112 Main st',
        city:'Boston',
        state:"NA"
    },
    hobbies:['music','sports'],
};

x1 = person.name;
x1 =person['age'];
x1 = person.Address.state;
x1 = person.hobbies[0];
person.name = 'John Doe';
person['isAdmin'] = false;

delete person.age;
person.hasChildren = true;
person.greet = function () {
    console.log(`hello my name is ${this.name}`);
};
person.greet();

const person2 = {
    'first name':'Mittal',
    'last name':'Rathva'
}

x1 = person2['first name'];

// console.log(x1);






// object Spread  & Method 

let x2;
const todo = new Object();



todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x2 = todo;

const person3 = {
    address: {
        coords:{
            lat:42.44646,
            lng: -32.455,
        },
    },
};
 x2 = person3.address.coords.lat;

 const obj1 =  {a: 1, b:2};
 const obj2 = {c:3,d:4}

 const obj3={...obj1, ...obj2 };
 const obj4= Object.assign({}, obj1, obj2);

 const todos = [
    { id: 1,name: 'Buy Milk'},
    { id: 2,name: 'Pickup kids from school'},
    { id: 3,name: 'Take out trash'},

 ];
  x2 = todos[0].name;
  x2 = Object.keys(todo);
  x2 = Object.values   (todo);
  x2 = Object.keys(todo).length;
  x2 = Object.entries(todo);
  x2 = todo.hasOwnProperty('name');



console.log(x2);