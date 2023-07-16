import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies } from "../../features/movies/moviesSlice"
import MovieList from "../MovieList"
import { MovieSearch } from "../MovieSearch"
import { useGetMoviesByTextQuery } from "../../common/apis/apiRTKQuery"

const Home = () => {
  const dispatch = useDispatch()

  const randomSearch = () => {
    const exampleSearches = [
      "Marvel",
      "Mission Impossible",
      "Fast and Furious",
      "Harry Potter",
      "James Bond",
      "Hunger Games",
    ]
    const random = Math.floor(Math.random() * exampleSearches.length)
    return exampleSearches[random]
  }
  const { data, isError, isLoading } = useGetMoviesByTextQuery(randomSearch())
  console.log("rtkQuery data, ", data)

  useEffect(() => {
    dispatch(fetchAsyncMovies(randomSearch()))
  }, [dispatch])

  return (
    <>
      <MovieSearch />
      <MovieList />
    </>
  )
}

export default Home
