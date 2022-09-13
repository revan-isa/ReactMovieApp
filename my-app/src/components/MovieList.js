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
            <div className="card mb-4 shadow-sm">
              <img
                onError={(e) => props.imgErrorProp(e)}
                style={{ height: "100%" }}
                src={movie.posterUrl}
                className="card-img-top"
                alt="poster"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.plot}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    onClick={(e) => props.deleteMovieProp(movie)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>

                  <h2>
                    <span className="badge text-bg-info">{movie.year}</span>
                  </h2>
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
