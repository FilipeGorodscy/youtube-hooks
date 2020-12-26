import React, { useState, useEffect } from "react";

import omdb from "../apis/omdb";

const SearchBar = ({ setMovies, setError }) => {
  const [term, setTerm] = useState("Harry Potter");
  const [debouncedValue, setDebouncedValue] = useState(term);

  useEffect(() => {
    const search = async (term) => {
      const response = await omdb.get("/?apikey=5f2a6108&", {
        params: {
          s: term,
          type: "movie",
        },
      });
      if(response.data.Search) {
        setMovies(response.data.Search);
      } else if (response.data.Error) {
        setError(response.data.Error);
      }
    };
    
    const handler = setTimeout(() => {
      setDebouncedValue(term);
      search(term);
    }, 1000);

    return () => {
      clearTimeout(handler);
    }
  }, [term, debouncedValue, setMovies, setError]);

  return (
    <div className="ui segment search-bar">
      <form onSubmit={(e) => e.preventDefault()} className="ui form">
        <div className="field">
          <label>Search for a movie</label>
          <input
            value={term}
            type="text"
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
