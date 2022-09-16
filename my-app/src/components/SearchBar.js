import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row mb-5">
        <div className="col-6">
          <input
            onChange={props.searchMovieProp}
            type="text"
            className="form-control rounded-0 shadow-sm "
            placeholder="Find your movie"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-dark rounded-0"
            onClick={() => navigate("/add")}
          >
            Add a Movie
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
