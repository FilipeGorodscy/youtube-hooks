import React, {useState} from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, selectedMovies, setSelectedMovies, error }) => {

  if (!movies && error) return <div>Please search for a movie to nominate</div>
  if(error) return <div>{error}</div>
  

  const nominate = (selectedMovies, movie) => {
    setSelectedMovies([...selectedMovies, movie]);
  }

  const renderedList = movies.map((movie) => (
    <MovieItem
      selectedMovies={selectedMovies}
      performAction={nominate}
      key={movie.imdbID}
      movie={movie}
      action={"Nominate"}
      color={"olive"}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default MovieList;
