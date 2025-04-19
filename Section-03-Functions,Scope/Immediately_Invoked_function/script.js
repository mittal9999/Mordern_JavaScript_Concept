

(function (){
    const user = 'john';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function(name){
    console.log('Hello '   +  name);

})('shawn');

(function hello () {
    console.log('Hello');

})();
