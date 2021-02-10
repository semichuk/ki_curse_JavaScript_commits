"use strict";

let personalMovieDB = 
{
    count: 0,
    movies:[],
    actors:{},
    genres:[],
    privat: '',
    start: function ()
    {
        do
        {
            personalMovieDB.count = +prompt('how many?','');
        }while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count));
    
    },

    
    
    rememberMyFilms: function ()
    {
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
    },




   
   
    detectPersonalLevel: function (){

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
    },
        
    
    
    showMyDB: function (privat)
    {
        if(!privat)
        {
            console.log(DB);
        }else
        {
            console.log('privat is true');
        }
    },
        
        
    writeYourGenres: function ()
    {
        for (let i = 1;i <= 3; i++) 
        {
            DB.genres[i - 1] = prompt(`Your the most love genre №${i}`);
        }
    }
    
}





