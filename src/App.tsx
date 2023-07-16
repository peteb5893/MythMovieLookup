import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"

import PageNotFound from "./components/PageNotFound"
import "./App.css"
import Favourites from "./components/Favourites"

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/favourites" Component={Favourites} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
