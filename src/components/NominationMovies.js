import React from 'react'

import MovieItem from "./MovieItem";

const NominationList = ({selectedMovies, setSelectedMovies}) => {
    
    const removeMovie = (selectedMovies, selectedMovie) => 
        setSelectedMovies(selectedMovies.filter(movie => movie.imdbID !== selectedMovie.imdbID));

    const nominationList = selectedMovies.map(movie => 
    <MovieItem 
        movie={movie}
        key={movie.imdbID}
        selectedMovies={selectedMovies}
        buttonColor={"red"}
        action={"Remove"}
        performAction={removeMovie}
    />
    );
    return <div className="ui relaxed divided list">{nominationList}</div>;
}

export default NominationList
