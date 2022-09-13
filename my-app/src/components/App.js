import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  // FETCH DATA FROM LOCAL API
  async componentDidMount() {
    const baseUrl = "http://localhost:3001/movies";
    const response = await fetch(baseUrl);
    const data = await response.json();
    this.setState({ movies: data });
  }

  // DELETE METHOD
  deleteMovie = async (movie) => {
    const baseUrl = `http://localhost:3001/movies/${movie.id}`;
    await fetch(baseUrl, {
      method: "DELETE",
    });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    // this.setState({ movies: newMovieList });

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  // image error handler

  imgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg";
  };

  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>

        <MovieList
          movies={filteredMovies}
          imgErrorProp={this.imgError}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
