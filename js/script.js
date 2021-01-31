'use strict';

const obj={
    name: 'test1',
    age: 1,
    types: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

//console.log(obj['types']['border']);

// {
    
//     if(typeof(obj[key]) === 'object' )
//     {
        
//         for (let i in obj[key]) 
//         {
//             console.log(`option ${i} have ${obj[key][i]}`);
//             counter++;
//         }
//     }else
//     {
//     console.log(`option ${key} have ${obj[key]}`);
//     counter++;
//     }
// }
// console.log(counter);
console.log(Object.keys(obj).length);

const {background,border} = obj.types;

console.log(background);