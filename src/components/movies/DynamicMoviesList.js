import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";

class DynamicMoviesList extends Component {
  state = {
    movies: [
      { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola" },
      { id: "EXN9npPlo", title: "Star Wars", director: "Rian Johnson" },
      {
        id: "lecqGHnAb",
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
      },
    ],
  };

  handleDeleteClick = (id) => {
    const moviesCopy = [...this.state.movies];
    const movieIndex = moviesCopy.findIndex(item => item.id === id);
    moviesCopy.splice(movieIndex, 1);

    this.setState({
      movies: moviesCopy
    })
  }

  render() {
    return (
      <div>
        <button> add movie</button>
        {this.state.movies.map((item) => (
          <ImprovedCard key={item.id} {...item} handleDeleteClick={this.handleDeleteClick} />
        ))}
      </div>
    );
  }
}

export default DynamicMoviesList;
