const d = new Date(2025, 4, 18, 12, 2, 0);
const month = d.getMonth();
console.log(month);
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is february');
        break;
    case 3:
        console.log('It is March');
        break;
    case 4:
        console.log('It is April');
        break;
        default:
            console.log('It is not Jan, feb,March or Apr');
}

switch(true) {
    case hour < 12:
    console.log('Good Mornig');
    break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
        default:
            console.log('Good night');

}


