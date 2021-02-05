import React from "react";
import "./App.css";

import { listItems, MoviesList } from "./components/ListItems";
import DynamicMoviesList from "./components/movies/DynamicMoviesList";

function App() {
  return (
    <div className="m-5">
      <ul>{listItems}</ul>
      <MoviesList/>
      <hr/>

      <DynamicMoviesList />

    </div>
  );
}

export default App;
