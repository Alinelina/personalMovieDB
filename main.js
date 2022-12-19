const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
let countsOfStars = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = countsOfStars;

lastMovie = prompt('Один из последних просмотренных фильмов?', '');
countsOfStars = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = countsOfStars;

console.log(personalMovieDB);