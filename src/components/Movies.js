import React, {useState} from 'react'

import FetchedMovies from "./FetchedMovies";
import NominationMovies from "./NominationMovies";

const Movies = ({ movies, error}) => {

    const [selectedMovies, setSelectedMovies] = useState([]);
    const [status, setStatus] = useState("");

    return (
        <div className="ui row">
            <div className="eight wide column">
            <FetchedMovies 
            movies={movies}
            error={error}
            selectedMovies={selectedMovies} 
            setSelectedMovies={setSelectedMovies}/>
          </div>
          <div className="eight wide column">
            <NominationMovies setSelectedMovies={setSelectedMovies} selectedMovies={selectedMovies} />
          </div>
        </div>
    )
}

export default Movies
