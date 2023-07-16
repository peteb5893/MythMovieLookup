import React from "react"
import { useSelector } from "react-redux"
import {
  getAllMovies,
  getFavouriteMovies,
} from "../../features/movies/moviesSlice"
import MovieCard from "../MovieCard"
import { Alert, Col, Row } from "react-bootstrap"
import {
  ExclamationCircleFill,
  ExclamationTriangle,
  ExclamationTriangleFill,
} from "react-bootstrap-icons"

const MovieList = () => {
  const movies = useSelector(getAllMovies)
  const favouriteMovies = useSelector(getFavouriteMovies)

  if (movies.Response === "True") {
    return (
      <>
        <h2>Movies</h2>
        <Row className="g-3">
          {movies.Search.map((movie: any, index: number) => (
            <Col
              key={index}
              className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            >
              <MovieCard
                imdbID={movie.imdbID}
                Title={movie.Title}
                Year={movie.Year}
                Poster={movie.Poster}
                IsFavourite={favouriteMovies.includes(
                  (m: any) => m.imdbID === movie.imdbID,
                )}
              />
            </Col>
          ))}
        </Row>
      </>
    )
  } else {
    return (
      <Row className="g-3">
        <Col className="col-6 mx-auto">
          <div className="movies-not-returned">
            <Alert variant="danger">
              <Alert.Heading>Uh oh! You got an error</Alert.Heading>
              <p>{movies.Error}</p>
            </Alert>
          </div>
        </Col>
      </Row>
    )
  }
}

export default MovieList
