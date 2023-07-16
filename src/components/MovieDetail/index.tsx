// @ts-nocheck
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import {
  Calendar,
  CameraReelsFill,
  CurrencyDollar,
  HandThumbsDownFill,
  HandThumbsUp,
  HandThumbsUpFill,
  HourglassTop,
  PeopleFill,
  StarFill,
  TrophyFill,
} from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import {
  addFavourite,
  deselectMovie,
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeFavourite,
} from "../../features/movies/moviesSlice"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { useState } from "react"
import { AppDispatch } from "../../app/store"

interface IMovieDetailProps {
  imdbID: string
  IsFavourite: boolean
}

const MovieDetail = (props: IMovieDetailProps) => {
  const movie = useSelector(getSelectedMovie)

  const dispatch = useDispatch<AppDispatch>()

  const [show, setShow] = useState(false)

  const handleClose = () => {
    dispatch(deselectMovie())
    setShow(false)
  }
  const handleShow = () => {
    dispatch(fetchAsyncMovieDetail(props.imdbID))
    setShow(true)
  }

  const [favourite, setFavourite] = useState(props.IsFavourite)

  const handleUnfavourite = () => {
    dispatch(removeFavourite(movie.imdbID))
    setFavourite(false)
  }
  const handleFavourite = () => {
    dispatch(addFavourite(movie))
    setFavourite(true)
  }

  const posterUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/300x456?text=No+Poster+Found"

  return (
    <>
      <Button className="mt-auto" variant="primary" onClick={handleShow}>
        More Info
      </Button>

      {Object.keys(movie).length === 0 ? (
        <></>
      ) : (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {movie.Title} ({movie.Year}){" "}
                <Badge bg="dark">{movie.Rated}</Badge>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="g-3">
                <Col className="col-4">
                  <ul className="list-group">
                    <li className="list-group-item text-center">
                      <img src={posterUrl} alt={movie.Title} />
                      {movie.Genre}
                    </li>
                    {movie.Ratings.map((rating: any) => (
                      <li className="list-group-item">
                        <StarFill /> <b>{rating.Source}</b> rates this{" "}
                        <b>{rating.Value}</b>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col className="col-8">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <HourglassTop /> Runtime: {movie.Runtime}
                    </li>
                    <li className="list-group-item">
                      <Calendar /> Released: {movie.Year}
                    </li>
                    <li className="list-group-item">
                      <CurrencyDollar /> Box Office: {movie.BoxOffice}
                    </li>
                    <li className="list-group-item">
                      <CameraReelsFill /> Director: {movie.Director}
                    </li>
                    <li className="list-group-item">
                      <PeopleFill /> Actors: {movie.Actors}
                    </li>
                    <li className="list-group-item">
                      <TrophyFill /> Awards: {movie.Awards}
                    </li>
                  </ul>
                  <Card className="mt-3">
                    <Card.Body>
                      <Card.Title>Movie Plot</Card.Title>
                      <Card.Text>{movie.Plot}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {!favourite ? (
                <Button onClick={handleFavourite}>
                  <HandThumbsUp /> Favourite
                </Button>
              ) : (
                <Button onClick={handleUnfavourite} variant="danger">
                  <HandThumbsDownFill onClick={handleUnfavourite} /> Unfavourite
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  )
}

export default MovieDetail
