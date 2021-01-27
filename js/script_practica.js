"use strict";

let numberOfFilms = 0;

const  DB = 
{
    count: numberOfFilms,
    movies:[]
};

let i = 0;

while(++i < 2) 
{
    const a = prompt('which?',''),
        b = prompt('how is it?','');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) 
    {
        DB.movies[a] = b;
        alert(i);
    }else 
    {
        alert('Error etner');
        i--;
    }
    alert(a);
    
}

numberOfFilms = prompt('how many?','');

alert(typeof(numberOfFilms));

if(numberOfFilms < 10)
{
    alert('you have few watched films');
}else if(numberOfFilms <= 30 && numberOfFilms >= 10 )
{
    alert('you have watched medium');
}else if(numberOfFilms > 30)
{
    alert('you are cool guy');
}else
{
    alert('error 304');
}
console.log(DB);