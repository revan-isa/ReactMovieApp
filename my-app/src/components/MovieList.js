import React from "react";

const MovieList = (props) => {
  //   function handleClick( ) {
  //     console.log();
  //   }

  return (
    <div className="row">
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className="col col-sm-6 col-lg-3  ">
            <div className="card mb-4 shadow-sm " style={{ width: "100%" }}>
              <img
                onError={(e) => props.imgErrorProp(e)}
                src={movie.posterUrl}
                className="card-img-top align-self-center rounded-0"
                alt="poster"
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold fs-4">
                  {movie.title}
                </h5>
                <p className="card-text text-muted">{movie.plot}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    onClick={(e) => props.deleteMovieProp(movie)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
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
