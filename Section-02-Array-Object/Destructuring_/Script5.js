const firstName = 'Mittal';
const lastName = 'Rathva';
const age = 26;

const person = {
    // firstName: firstName,
    // lastName: lastName,
    // age :age,
    firstName,
    lastName,
    age,
};


console.log(person.age);



// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'mittal',
    },
};
const { id: todoId,
    title,
    user: { name },
} = todo;
// const  id  = todo;
console.log(todoId);


// Destructure Arrays
const numbers = [23, 67, 33, 49];

const [] = numbers;

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

