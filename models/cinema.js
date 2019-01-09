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
  return filmGenre
};
