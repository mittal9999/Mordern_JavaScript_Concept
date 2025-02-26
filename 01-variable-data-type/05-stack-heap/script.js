// this valuues are store in stack
const name = 'John';
const age  = 30;

// Reference value
const person = {
    name : 'Bard',
    age : 40
}

let newName = name ;
newName = 'mittal rathva';

let newPerson = person;
newPerson.name  = 'Bardley';

console.log(name, newName);
console.log(person,newPerson);