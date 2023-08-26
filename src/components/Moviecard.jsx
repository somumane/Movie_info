import React from "react";
import "./MovieCard.css";

const Moviecard =({
    title,
    releaseDate,
    posterurl,
    year,
    duration,
    actors,
    genres,
    storyline,
    ratings,
    imdbRating,
  }) => {
  return (
    <div>
      <div className="MovieCard">
        <div className="Poster">
          <div className="Title">
            <h1>{title}</h1>
          </div>
          <img src={posterurl} />
        </div>
        <div className="Details">
          <p>
            <span>RelaseDate:</span>
            {releaseDate}
          </p>
          <p>
            <span>Year:</span>
            {year}
          </p>
          <p>
            <span>Duration:</span>
            {duration}
          </p>
          <p>
            <span>Actors:</span>
            {actors+" "}
          </p>
          <p>
            <span>Geners:</span>
            {genres+" "}
          </p>
          <p>
            <span>StoryLine:</span>
            {storyline}
          </p>
          <div className="rating">
          <p>
            <span>Rating:</span>
            {ratings+" "}
          </p>
          </div>
          <p>
            <span>ImdbRating:</span>
            {imdbRating+" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
