const x =100;
const foo =1;
var bar = 2;
if(true) {
    const y = 200;
    console.log(x + y);
}
// console.log(x + y);
for (let i =0; i <=10; i++){
    console.log(i);

}

// console.log(i);

if(true) {
    // const & let are block scope
    const a = 500;
    let b = 600;
    // var is not bloack scope
    
    var c =700;
    console.log(a,b);
}
console.log(c);

// var is function scope
function run (){
  var d =100;
  console.log(d);
}

run();
