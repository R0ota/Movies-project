import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Movieslist from "./components/Movieslist";
import axios from "axios";
import Moviedetails from "./components/Moviedetails";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [movies, setmovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  // get all movies by axios
  // console.log(movies)
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=9b8db0464b5fe1d38b97abc3f5456be3&&language=en"
    );

    setmovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  // get current page
  // console.log(movies)
  const getpage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=9b8db0464b5fe1d38b97abc3f5456be3&&language=en&page=${page}`
    );

    setmovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9b8db0464b5fe1d38b97abc3f5456be3&query=${word}&Language=en`
      );
      setmovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };
  return (
    <div className=" font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Movieslist
                  movies={movies}
                  getpage={getpage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<Moviedetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
