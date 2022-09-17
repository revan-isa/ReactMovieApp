import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const navigate = useNavigate();

  const truncatePlot = (str, maxLength) => {
    if (!str) return null;
    if (str.length <= maxLength) return str;
    return `${str.substring(0, maxLength)}...`;
  };

  return (
    <div className="row">
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className="col col-sm-6 col-lg-3  ">
            <div className="card mb-4 shadow-sm " style={{ width: "100%" }}>
              <img
                onError={(e) => props.imgErrorProp(e)}
                src={movie.posterUrl}
                className="card-img-top img-fluid align-self-center rounded-0"
                alt="poster"
              />
              <div className="card-body">
                <h5 className="card-title text-center fs-6">{movie.title}</h5>
                <p className="card-text text-muted">
                  {truncatePlot(movie.plot, 150)}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    onClick={(e) => props.deleteMovieProp(movie)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(`/edit/${movie.id}`)}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Edit
                  </button>
                  <span className="badge text-bg-light p-3 fs-5 font-monospace">
                    ({movie.year})
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
