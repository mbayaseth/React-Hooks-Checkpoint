import React from "react";
import MovieCard from "./MovieCard";
import { movies } from "../data";

const MovieList = ({ myMovies }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 ">
        {myMovies.map((movies) => (
          <MovieCard key={movies.rating} {...movies} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
