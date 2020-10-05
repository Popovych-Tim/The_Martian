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
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          newBG = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');


    addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length>21) newFilm = `${newFilm.substr(0,22)}...`;
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);   
            createMovieList(movieDB.movies, movieList);

            favorite ? console.log('Добавляем любимый фильм'): "" ;

            event.target.reset();
        }
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        newBG.style.backgroundImage = 'url("img/bg.jpg")';
    };
  
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
  
        sortArr(films);

        films.forEach((film, i) =>{
            parent.innerHTML +=      
                `<li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(movieDB.movies, movieList); //createMovieList(films, parent);
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
}); 
