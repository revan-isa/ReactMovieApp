import React from "react";

class EditMovie extends React.Component {
  state = {
    title: "",
    year: "",
    plot: "",
    posterUrl: "",
  };

  async componentDidMount() {
    const id = window.location.pathname.replace("/edit/", "");
    const baseUrl = `http://localhost:3001/movies/${id}`;
    const response = await fetch(baseUrl);
    const data = await response.json();

    this.setState({
      title: data.title,
      year: data.year,
      plot: data.plot,
      posterUrl: data.posterUrl,
    });
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { title, year, plot, posterUrl } = this.state;

    const id = window.location.pathname.replace("/edit/", "");

    const updatedMovie = {
      title,
      year,
      plot,
      posterUrl,
    };
    this.props.onEditMovie(id, updatedMovie);
  };

  render() {
    return (
      <div className="container">
        <form
          className="mt-5 shadow p-3 font-monospace rounded"
          onSubmit={this.handleFormSubmit}
        >
          <h3 className="text-center  lead ">Update The Movie Details!</h3>
          <div className="form-row ">
            <div className="form-group col-md-10 ">
              <label htmlFor="inputName">Title</label>
              <input
                type="text"
                className="form-control shadow-none"
                name="title"
                required
                value={this.state.title}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Year</label>
              <input
                type="text"
                className="form-control shadow-none"
                name="year"
                required
                value={this.state.year}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Poster URL</label>
              <input
                type="text"
                className="form-control shadow-none"
                name="posterUrl"
                required
                value={this.state.posterUrl}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control shadow-none"
                name="plot"
                rows="5"
                required
                value={this.state.plot}
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-dark rounded-0 my-3"
            value="Update"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
