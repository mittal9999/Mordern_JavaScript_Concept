// challenge 1
// function getCelsius(f) {
//     const celsius = ((f - 32) * 5) / 9;
//     return celsius;
// }

const getCelsius = (f) => ((f -
    32) * 5) / 9;
// console.log(getCelsius(32));
console.log(`The temp is ${getCelsius(50) }\xB0C`);


// challenge 2 
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max
    }
}
console.log(minMax([10,24,3,4,5]));

// Challenge 3
((length, width) => { 
    const area = length * width ;
    const output  = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    console.log(output);
})(20,10);