import { Button } from "antd";
import React, { useMemo, useState } from "react";
import MovieList from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import Filter from "./components/Filter";
import CreateNewMovie from "./components/CreateNewMovie";
import { movies } from "./data";

function App() {
  const [myMovies, setMyMovies] = useState(movies);
  const [random, setRandom] = useState(0);

  // lets memorize movies in usememo hook
  const memorizedMovies = useMemo(() => {
    return {
      myMemorizedmovies: myMovies,
    };
  }, [random]);

  return (
    <div > 
      <Navbar />
      <div className="max-w-4xl flex mx-auto justify-between max-auto my-4 gap-4 align-middle max-sm:flex-col-reverse  ">
        <Filter setMyMovies={setMyMovies} memorizedMovies={memorizedMovies} />
        <CreateNewMovie
          setMyMovies={setMyMovies}
          memorizedMovies={memorizedMovies}
          setRandom={setRandom}
        />
      </div>
      {myMovies.length === 0 ? (
        <div className="text-center py-24 text-3xl">
          {" "}
          search movies did not return any result
        </div>
      ) : (
        <MovieList myMovies={myMovies} />
      )}
    </div>
  );
}

export default App;
