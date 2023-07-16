import React from "react"
import { Card, Button } from "react-bootstrap"
import MovieDetail from "../MovieDetail"
import "./style.css"

interface IMovieCardProps {
  imdbID: string
  Title: string
  Year: number
  Poster: string
  IsFavourite: boolean
}

const MovieCard = (props: IMovieCardProps) => {
  const posterUrl =
    props.Poster !== "N/A"
      ? props.Poster
      : "https://placehold.co/300x456?text=No+Poster+Found"

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={posterUrl}
          alt={props.Title}
          className="img-fluid"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.Title}</Card.Title>
          <Card.Subtitle>{props.Year}</Card.Subtitle>
          <Card.Text></Card.Text>
          <MovieDetail imdbID={props.imdbID} IsFavourite={props.IsFavourite} />
        </Card.Body>
      </Card>
    </>
  )
}

export default MovieCard
