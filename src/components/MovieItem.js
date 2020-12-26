import React, {useState} from "react";
import "./MovieItem.css";

const MovieItem = ({ movie, selectedMovies, performAction, action, color }) => {
  const [status, setStatus] = useState("");

  const onClick = (selectedMovies, movie) => {
    performAction(selectedMovies, movie);
    if(action === "Nominate") setStatus("disabled");

  }

  return (
    <div className="item content">
      <div>
        <div className="header">{movie.Title}</div>
        <div className="description">{movie.Year}</div>
        <button 
                onClick={() => onClick(selectedMovies, movie)}
                className={`ui ${color} button right floated ${status}`}
        >    
          {action}
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
