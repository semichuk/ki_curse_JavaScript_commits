let numberOfFilms = +prompt("How many films have you seen?",0);
console.log(numberOfFilms);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let a = prompt("Last movie, which you have seen:",""),
    b = prompt('How was it  ?', ''),
    c = prompt("Last movie, which you have seen:",""),
    d = prompt('How was it  ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
 
console.log(personalMovieDB.movies);
console.log(personalMovieDB);