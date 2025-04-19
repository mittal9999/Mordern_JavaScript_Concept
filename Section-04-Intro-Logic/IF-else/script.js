const d = new Date(18, 4, 2025, 20, 42, 30);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Goof Afternoon');
}
else {
    console.log('Good night');
}


//Nested If

if (hour < 12) {
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake Up!');
    }
} else if (hour < 18) {
    console.log('Goof Afternoon');
}
else {
    console.log('Good night');

    if (hour >= 20) {
        console.log('zzzzzz');
    }
}



if (hour >= 7 && hour < 15) {
    console.log('It is Work Time!');
}

if(hour === 6 || hour === 20) {
    console.log('Brush your teeth!');
}