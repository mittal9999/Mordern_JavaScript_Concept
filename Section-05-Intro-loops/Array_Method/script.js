// First challenges

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gamil.com',
        phone: '111-111-111',
        age: 30,
    }, {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gamil.com',
        phone: '222-222-222',
        age: 25,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gamil.com',
        phone: '333-333-333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gamil.com',
        phone: '4444-444-444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gamil.com',
        phone: '555-555-555',
        age: 23,
    },

];

const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email,
    }));

console.log(youngPeople);


// Second Challenge  

const numbers = [2, 3, -4, -6, -3, 33, 61, -21];

const positiveSum1 = numbers
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum1);

// Three Challenge

const words = ['coder', 'programmer', 'devloper'];
const cWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(cWords);