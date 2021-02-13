"use strict";

let personalMovieDB = 
{
    count: 0,
    movies:[],
    actors:{},
    genres:[],
    privat: true,
    
    toggleVisibleMyDB: function() 
    {

            if(personalMovieDB.privat)
            {
                personalMovieDB.privat = false;
            }
            else
            {
                personalMovieDB.privat = true;
            }
    },

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
            personalMovieDB.movies[a] = b;
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

        if(personalMovieDB.count  < 10)
        {
            alert('you have few watched films');
        }else if(personalMovieDB.count  <= 30 && personalMovieDB.count  >= 10 )
        {
            alert('you have watched medium');
        }else if(personalMovieDB.count > 30)
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
            console.log(personalMovieDB);
        }else
        {
            console.log('privat is true');
        }
    },
        
        
    writeYourGenres: function ()
    {
        for (let i = 1;i <= 3; i++) 
        {
            
            let genre = prompt(`Your the most love genre №${i}`);
            if(genre === '' || genre === null)
            {
                console.log('The data is not correct');
                i--;
            }
            else
            {
                personalMovieDB.genres[i - 1] = genre;

            }
    
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your lovest genre #${i+1} is ${item}`);

    
        });
    }
    
}




