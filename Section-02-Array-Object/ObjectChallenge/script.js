// step 1
const library = [
    {
        title:'The Road Ahead',
        author:'Bill Gates',
        status:{
            own:true,
            reading:false,
            read: false
        }
    },

    {
        title:'Steve JObs',
        author:'Walter Isaacson',
        status:{
            own:true,
            reading:false,
            read: false
        }
    },

    {
        title:'Mockingjay',
        author:'Suzanne Collins' ,
        status:{
            own:true,
            reading:false,
            read: false
        }
    }
];


// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

// Step 3 Destructur
const { title: firstBook } = library[0];
console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);