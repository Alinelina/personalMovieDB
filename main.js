/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        };
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let lastMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            let countsOfStars = prompt('На сколько оцените его?', '').trim();

            if (lastMovie != null && countsOfStars != null && lastMovie != '' && countsOfStars != '' && lastMovie.length < 50) {

                personalMovieDB.movies[lastMovie] = countsOfStars;
            } else {
                i--;
            }
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
            while (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '') {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }
        }
        this.genres.sort();
        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        this.privat === true ? this.privat = false : this.privat = true;
    },
};

//personalMovieDB.start();

//personalMovieDB.detectPersonalLevel();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.writeYourGenres();

//personalMovieDB.showMyDB(personalMovieDB.privat);

//personalMovieDB.toggleVisibleMyDB();

//console.log(personalMovieDB);