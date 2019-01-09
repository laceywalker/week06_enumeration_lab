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

Cinema.prototype.findByTitle = function (title) {
  const filmTitle = this.films.filter(film => film.title === title);
  return filmTitle[0];
};

Cinema.prototype.findByGenre = function (genre) {
  const filmGenre = this.films.filter(film => film.genre === genre);
  return filmGenre;
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

Cinema.prototype.checkByLength = function (length) {
  const returnedLength = this.films.every(film => film.length > length);
  return returnedLength;
};
