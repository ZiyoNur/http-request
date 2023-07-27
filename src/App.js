import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

// const dummyMovies = [
//   {
//     id: 1,
//     title: 'Some Dummy Movie',
//     openingText: 'This is the opening text of the movie',
//     releaseDate: '2021-05-18',
//   },
//   {
//     id: 2,
//     title: 'Some Dummy Movie 2',
//     openingText: 'This is the second opening text of the movie',
//     releaseDate: '2021-05-19',
//   },
// ];

function App() {

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

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


const fetchMoviesHandler = useCallback(async() => {
  setIsLoading(true);

  try {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
      
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
  } catch (error) {
    setError(error.message);
  }
  setIsLoading(false);
    }, []);

    useEffect(() => {
      fetchMoviesHandler();
    }, [fetchMoviesHandler])


    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
      content = <MoviesList movies={movies} />;
    }
  
    if (error) {
      content = <p>{error}</p>;
    }
  
    if (isLoading) {
      content = <span className="loader"></span>;
    }
  
    return (
      <React.Fragment>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>{content}</section>
      </React.Fragment>
    );
  }
  
  export default App;