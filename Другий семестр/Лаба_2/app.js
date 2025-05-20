'use strict';

const API_URL = 'https://api.tvmaze.com/shows';
const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const genreSelect = document.getElementById('genreSelect');
const errorMessage = document.getElementById('errorMessage');

let allMovies = [];

// Отримання даних з API
async function fetchMovies() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    allMovies = data;
    populateGenres(data);
    renderMovies(data);
  } catch (error) {
    errorMessage.textContent = 'Помилка при завантаженні фільмів. Спробуйте пізніше.';
    console.error(error);
  }
}

// Заповнення випадаючого списку жанрів
function populateGenres(movies) {
  const genres = new Set();
  movies.forEach(movie => {
    movie.genres.forEach(genre => genres.add(genre));
  });

  const sortedGenres = Array.from(genres).sort();
  sortedGenres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

// Відображення фільмів
function renderMovies(movies) {
  moviesContainer.innerHTML = '';
  movies.forEach(({ name, image, rating, genres }) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${name}">
      <div class="movie-content">
        <h2 class="movie-title">${name}</h2>
        <p class="movie-info">Жанри: ${genres.join(', ')}</p>
        <p class="movie-info">Рейтинг: ${rating.average ?? 'N/A'}</p>
      </div>
    `;
    moviesContainer.appendChild(card);
  });
}

//  Пошук за назвою
function filterMoviesByName(query) {
  return allMovies.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
}

//  Фільтрація за жанром
function filterMoviesByGenre(genre) {
  if (!genre) return allMovies;
  return allMovies.filter(movie => movie.genres.includes(genre));
}

//  Сортування
function sortMovies(movies, criteria) {
  const sorted = [...movies];
  if (criteria === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria === 'rating') {
    sorted.sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0));
  }
  return sorted;
}

//  комбінована фільтрація + сортування
function updateResults() {
  const nameQuery = searchInput.value;
  const genreQuery = genreSelect.value;
  const sortQuery = sortSelect.value;

  let filtered = allMovies;

  if (nameQuery) {
    filtered = filterMoviesByName(nameQuery);
  }

  if (genreQuery) {
    filtered = filtered.filter(movie => movie.genres.includes(genreQuery));
  }

  const finalResult = sortQuery ? sortMovies(filtered, sortQuery) : filtered;
  renderMovies(finalResult);
}

//  Події
searchInput.addEventListener('input', updateResults);
genreSelect.addEventListener('change', updateResults);
sortSelect.addEventListener('change', updateResults);

//  Запуск
fetchMovies();
