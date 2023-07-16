import React from "react"
import { useSelector } from "react-redux"
import { getFavouriteMovies } from "../../features/movies/moviesSlice"
import MovieCard from "../MovieCard"
import { Col, Row } from "react-bootstrap"

const Favourites = () => {
  const movies = useSelector(getFavouriteMovies)
  if (movies.length > 0) {
    return (
      <>
        <h2>Favourite Movies</h2>
        <Row className="g-3">
          {movies.map((movie: any, index: number) => (
            <Col className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <MovieCard
                key={index}
                imdbID={movie.imdbID}
                Title={movie.Title}
                Year={movie.Year}
                Poster={movie.Poster}
                IsFavourite={true}
              />
            </Col>
          ))}
        </Row>
      </>
    )
  } else {
    return (
      <div className="movies-not-returned">
        You have not added any movies to your favourites yet.
      </div>
    )
  }
}

export default Favourites
