const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// Short versions
// const evenNumbers = number.filter(number => number % 2 === 0);

// Same with FoReACH

// let evenNumbers  = [];
// numbers.forEach(number => {
//     if(number % 2 === 0) {
//         evenNumbers.push(number)
//     }
// });
// console.log(evenNumbers);

const compines = [
    { name: 'Company One', category: 'Finance', start: 1971, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1982, end: 2005 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2011 },
    { name: 'Company Four', category: 'Ratail', start: 1998, end: 2007 },
    { name: 'Company Five', category: 'Technology', start: 1981, end: 2006 },
    { name: 'Company Six', category: 'Finance', start7: 1981, end: 2002 },
    { name: 'Company Seven', category: 'Auto', start: 1975, end: 1998 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2000 },
    { name: 'Company Nige', category: 'Retail', start: 1981, end: 2001 },
];

// Get only Retail company
const retailCompanies = compines.filter((company) => company.category === 'Retail');
// console.log(retailCompanies);

// Get companines that started in or after 1980 and ended in or 2005
const earlyCompanies = compines.filter((company) => company.start >= 1980 && company.end <= 2005);
// console.log(earlyCompanies);

// get companies that lasted 10 yearsa or more

const longCompaines = compines.filter((company) => (company.end - company.start >= 10)
);
console.log(longCompaines);