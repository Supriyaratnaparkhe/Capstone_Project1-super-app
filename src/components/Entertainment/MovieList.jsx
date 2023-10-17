import React, { useState, useEffect } from "react";
import "./MovieList.css";
const MovieList = ({ genre, apiKey }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${genre}&type=movie&apikey=${apiKey}`
        );
        
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchMoviesByGenre();
  }, [genre, apiKey]);

  return (
    <div>
      <div className="genre-name">
        <h2>{genre} Movies</h2>
      </div>
      <div className="display-movies">
        {movies.map((movie) => (
          <div className="genre-poster" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;




