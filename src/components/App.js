import React, {useState} from "react";

import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);

  return (
    <div className="ui container">
      <SearchBar setMovies={setMovies} setError={setError} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eight wide column">
            <MovieList 
            movies={movies}
            error={error}
            selectedMovies={selectedMovies} 
            setSelectedMovies={setSelectedMovies}/>
          </div>
          <div className="eight wide column">
            <NominationList setSelectedMovies={setSelectedMovies} selectedMovies={selectedMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
