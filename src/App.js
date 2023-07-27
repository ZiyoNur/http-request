import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const dummyMovies = [
  {
    id: 1,
    title: 'Some Dummy Movie',
    openingText: 'This is the opening text of the movie',
    releaseDate: '2021-05-18',
  },
  {
    id: 2,
    title: 'Some Dummy Movie 2',
    openingText: 'This is the second opening text of the movie',
    releaseDate: '2021-05-19',
  },
];

function App() {

const [movies, setMovies] = useState([]);

// const fetchMovieHandler = () => {
//   fetch("https://swapi.dev/api/films/")
//     .then(response => {
//       return response.json();
//     })
//     .then((data) => {
//       const transformedData = data.results.map((movie) => {
//         return {
//           id: movie.episode_id,
//           title: movie.title,
//           openingText: movie.opening_crawl,
//           releaseDate: movie.release_date,
//         };
//       });
//       setMovies(transformedData);
//     })
    
// };


function fetchMoviesHandler() {
  fetch('https://swapi.dev/api/films/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    });
};

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;