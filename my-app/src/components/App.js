import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditMovie from "./EditMovie";

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

    this.setState(() => ({
      movies: newMovieList,
    }));
  };

  // image error handler

  imgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg";
  };

  // Search Movie
  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  // Add Movie
  AddMovie = async (movie) => {
    const response = await fetch("http://localhost:3001/movies/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    const data = await response.json();
    this.setState((state) => ({
      movies: state.movies.concat([data]),
    }));
  };

  // Edit Movie
  EditMovie = async (id, updatedMovie) => {
    const response = await fetch(`http://localhost:3001/movies/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    });
    const data = await response.json();
    console.log(data);
  };

  render() {
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.title
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return b.id - a.id;
      });

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container-fluid p-5 bg-light">
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
              </>
            }
          ></Route>
          <Route
            path="add"
            element={
              <AddMovie
                onAddMovie={(movie) => {
                  this.AddMovie(movie);
                }}
              />
            }
          ></Route>
          <Route
            path="edit/:id"
            element={
              <EditMovie
                onEditMovie={(id, movie) => {
                  this.EditMovie(id, movie);
                }}
              />
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
