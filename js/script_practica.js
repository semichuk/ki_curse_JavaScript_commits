"use strict";
const  DB = 
{
    movies:[]
};

for (let i = 0; i < 2; i++) {
    
    const a = prompt('which?',''),
        b = prompt('how is it?','');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) 
    {
        DB.movies[a] = b;
        alert('done');
    }else 
    {
        alert('Error etner');
        i--;
    }
}
console.log(DB);