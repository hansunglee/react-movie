import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  //console.log(id);

  // fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(
  //   (res) => res.json()

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail2</h1>;
}

export default Detail;
