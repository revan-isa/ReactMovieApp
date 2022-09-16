import React from "react";
import serialize from "form-serialize";
import { useNavigate } from "react-router-dom";

const AddMovie = (props) => {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
    props.onAddMovie(newMovie);
    navigate("/");
  };

  return (
    <div className="container">
      <form
        className="mt-5 shadow p-3 font-monospace rounded"
        onSubmit={handleFormSubmit}
      >
        <h3 className="text-center  lead ">
          Fill Out The Movie Details To Add Into Your List!
        </h3>
        <div className="form-row ">
          <div className="form-group col-md-10 ">
            <label htmlFor="inputName">Title</label>
            <input
              type="text"
              className="form-control shadow-none"
              name="title"
              required
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputRating">Year</label>
            <input
              type="text"
              className="form-control shadow-none"
              name="year"
              required
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
            ></textarea>
          </div>
        </div>

        <button
          className="btn btn-primary me-1 rounded-0 my-3"
          onClick={() => navigate("/")}
        >
          Homepage &#8603;
        </button>
        <input
          type="submit"
          className="btn btn-dark rounded-0 my-3"
          value="Add Movie "
        />
      </form>
    </div>
  );
};

export default AddMovie;
