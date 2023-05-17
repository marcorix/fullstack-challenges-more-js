const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";
const input = document.getElementById('movie-name');
const movieList = document.getElementById('movie-cards');

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a
// http://www.omdbapi.com/?s=MOVIE_TITLE&apikey=YOUR_API_KEY
const createMovieCard = (movie) => {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="card mb-2">
        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
        <div class="card-body">
          <span class="badge bg-primary mb-2">${movie.Year}</span>
          <h5 class="card-title">${movie.Title}</h5>
        </div>
      </div>
    </div>
  `;
};


const appendMoviesToDom = (movies) => {
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    movieList.insertAdjacentHTML('beforeend', movieCard);
  });
}

const getmovies = (e) => {
  e.preventDefault();
  const url = `${omdbapiUrl}?s=${input.value}&apikey=${apiKey}`;
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      appendMoviesToDom(data.Search);
    });
};

const form = document.getElementById("search-movies");

form.addEventListener('submit', getmovies);
