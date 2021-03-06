const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.listOfFilmTitles = function (films) {
  const filmTitles = films.map((film) => {
    return film.title;
  });
  return filmTitles;
};

//  RETURN FILM BY TITLE - TWO FUNCTIONS BELOW //
//  filter creates a new array with the returned items - trapped //
//  find returns the first VALUE which matches the argument, the object //

Cinema.prototype.findByTitle = function (title) {
  const filmTitle = this.films.filter(film => film.title === title);
  return filmTitle[0];
};

Cinema.prototype.findByTitle = function (title) {
  const filmTitle = this.films.find(film => film.title === title);
  return filmTitle;
};

  //     END    //

Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};

//  CHECK BY YEAR - TWO FUNCTIONS BELOW //
Cinema.prototype.checkByYear = function (year) {
  const returnedFilm = this.films.some(film => film.year === year)
  return returnedFilm
};

Cinema.prototype.checkByYear = function (year) {
  const returnedFilm = this.films.filter(film => film.year === year);
  if (returnedFilm.length >= 1) {
  return true;
  }
  else {
    return false
  }
};
 //    END    //

Cinema.prototype.checkByLength = function (length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.totalRunningTime = function (films) {
  let filmTimes = films.map((film) => {
    return film.length;
  });
  const totalFilmTime = filmTimes.reduce((totalLength, filmLength) => {
    return totalLength + filmLength
  }, 0);
  return totalFilmTime;
};
