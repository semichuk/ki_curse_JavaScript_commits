'use strict';

document.addEventListener('DOMContentLoaded', () =>
{
    /* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};







const adv = document.querySelectorAll('.promo__adv img'),
        promo = document.querySelector('div.promo__bg'),
        genre = promo.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');






addForm.addEventListener('submit' , (event) =>

{
    event.preventDefault();

    let newFilm = addInput.value,
        favorite = checkbox.checked
    ;
    if(newFilm)
    {
        if(newFilm.length > 21)
        {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if(favorite)
        {

            console.log('enter love film');
        }
    movieDB.movies.push(newFilm);
    sortArray(movieDB.movies);
    createMovieList(movieDB.movies,list);
    event.target.reset();
    }

});





const deleteAdv = (array) =>
{
    array.forEach((item) => {
        item.remove();
    });
};









const makeChanges = () =>
{
    genre.textContent = 'драмма';

    promo.style.backgroundImage = 'url("img/bg.jpg")';

};
 




const sortArray = (array) =>
{
    array.sort();

};




 





function createMovieList(films, parent)  
{
    parent.innerHTML = '';
    sortArray(films);

    films.forEach((item,i)=>{
        parent.innerHTML += `  <li class="promo__interactive-item">${i + 1} ${item}
                                <div class="delete"></div>
                               </li>`;
    });
    
    document.querySelectorAll('.delete').forEach((bn,i)=>
    {
        bn.addEventListener('click', ()=>
        {
            bn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies,list);

        }
        );
    }
    );
}




deleteAdv(adv);
makeChanges();
createMovieList(movieDB.movies,list);


})