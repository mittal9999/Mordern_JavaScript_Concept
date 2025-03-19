let x;
let d = new Date('2025/02/20');

x = d.toString();

x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getDay();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth()  +1}-${d.getDate()}`;


//  PASSING  API 
 x = Intl.DateTimeFormat('en-US').format(d);
 x = Intl.DateTimeFormat('en-GB').format(d);
 x = Intl.DateTimeFormat('default').format(d);
 x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);

 x= d.toLocaleString('default',{month: 'short'});

 x = d.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZone:'America/New_York',


 })

console.log(x);