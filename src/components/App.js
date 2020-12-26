import React, {useState} from "react";

import SearchBar from "./SearchBar";
import Movies from"./Movies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="ui container">
      <SearchBar setMovies={setMovies} setError={setError} />
      <div className="ui grid">
        <Movies movies={movies} error={error} />
      </div>
    </div>
  );
};

export default App;
