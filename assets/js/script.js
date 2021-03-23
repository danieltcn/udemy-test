/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        poster = document.querySelector('.promo__bg'),
        menu = document.querySelectorAll('.promo__menu-list'),
        btnMenu = menu.querySelectorAll('.promo__menu-item'),
        content = document.querySelector('.promo__interactive'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    let contents;


        btnMenu.forEach((menuBtn) => {
            
            menuBtn.addEventListener('click', (i) => {
                
                contents = content.innerHTML;
                content.innerHTML = '';
                console.log('delete');
                // console.log(contents);
                content.innerHTML += contents;
                console.log('add');

            });
        });



    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm){

            if (newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite){
                console.log('favorite film');
            }

            movieDB.movies.push(newFilm);

            createMovieList(movieDB.movies, movieList);
        }

        addForm.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {

        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("assets/img/bg.jpg")';

    };

    const sortArr = (arr) => {
        arr.sort();
    };


    deleteAdv(adv);
    makeChanges();
    

    createMovieList(movieDB.movies, movieList);


    function createMovieList(films, parent) {

        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

});





























let izy = 0;
const btn = document.querySelector('.btn2');
const deleteElement = (e) => {
    console.log(e.target);
    izy++;
    if (izy == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};
btn.addEventListener('click', deleteElement);

















