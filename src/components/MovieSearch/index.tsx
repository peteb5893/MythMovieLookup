// @ts-nocheck
import { useEffect, useState } from "react"
import { Search } from "react-bootstrap-icons"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies } from "../../features/movies/moviesSlice"
import { Col, Form, InputGroup, Row } from "react-bootstrap"
import { AppDispatch } from "../../app/store"

export function MovieSearch() {
  const [searchText, setSearchText] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (searchText.length > 0) {
      dispatch(fetchAsyncMovies(searchText))
    }
  }, [dispatch, searchText])

  return (
    <Row className="py-3">
      <Col className="col-md-6 mx-auto">
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for a movie title"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </InputGroup>
      </Col>
    </Row>
  )
}
