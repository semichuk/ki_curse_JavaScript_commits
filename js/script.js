"use strict"
const num = 0;
if (num < 49){
    console.log("Error");
}else if (num > 100){
    console.log('Many');
}else {
    console.log('OK');
}

(num === 50) ? console.log('OK') : console.log('Error');

const number = 0;

switch (number) {
    case 49:
        console.log('Error');
        break;
    case 50:
        console.log('OK');
        break;
    default:
        console.log('Not a item');
        break;
}