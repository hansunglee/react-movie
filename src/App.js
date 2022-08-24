import { useEffect, useState } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // ---------------------------------------------------------------------------------
  // Way [1]
  // ---------------------------------------------------------------------------------
  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  // ---------------------------------------------------------------------------------
  // Way [2]
  // ---------------------------------------------------------------------------------

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // ---------------------------------------------------------------------------------

  console.log(movies);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default App;
