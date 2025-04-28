const socials = ['Twitter','LinkedIn','Facebook','Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function(item){
// console.log(item)
// });

// socials.forEach((item) => {
//     console.log(item)
// });

// Other way one line expression
// socials.forEach((item) => console.log(item));

// socials.forEach((item, index, arr) => console.log(`${index} -${item}`,arr));

function LogSocials(social) {
    console.log(social);
}

socials.forEach(LogSocials);
const socialObjs = [
    { name:'Twitter',url:'https://twitter.com '},  
    { name:'LinkedIn',url:'https://linkedIn.com '},
    { name:'Facebook',url:'https://facebook.com '},
    { name:'Instagram',url:'https://instagram.com '},

];
socialObjs.forEach((item) => console.log(item.url));