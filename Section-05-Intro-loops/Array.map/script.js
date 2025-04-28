const numbers = [1, 2, 3, 4, 5 ,6,7,8,9,10];

const doubleNumbers = numbers.map((number) => number * 2);
const doubleNumbers1 = numbers.map((number) => 'Number ' + number);
console.log(doubleNumbers);
console.log(doubleNumbers1);

// Same with forEach

const doubleNumbers2 = [];

numbers.forEach((number) => {
    doubleNumbers2.push(number * 3);
});
// console.log(doubleNumbers2);
const companies = [
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

// Get an array of company names
const companyNames = companies.map((comapny) => comapny.name);
console.log(companyNames);

// Get an array of company category
// const companyCategory = companies.map((comapny) => company.category);
// // console.log(companyCategory);

// create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});


console.log(companyInfo);

// Create an array of objectwith  the name and the length of each  company in years
const companyYears = companies.map((company) => {
    return{
        name : company.name,
        length: company.end - company.start + 'years',
    };
});

// Chain map method
const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

const aquareAndDouble2 = numbers.map(function (number) {
    return Math.sqrt(number);
})
.map(function (sqrt) {
    return sqrt * 2;
})
.map(function(sqrtDoubled) {
    return sqrtDoubled * 3;
});
console.log(squareAndDouble);

// Chaining  different methods
const evenDouble = numbers.filter((number) => number % 2 ===0)
.map((number) => number * 2);
console.log(evenDouble);

// const oddDouble = numbers.filter((number) => number % 3 === 0);
// console.log(oddDouble);