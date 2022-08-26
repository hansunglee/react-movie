import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// -------------------------------------------------
// 1) Each Parameter
// -------------------------------------------------
// function Movie({ id, title, coverImg, summary, genres }) {
//   return (
//     <div>
//       <h2>
//         {/* <Link to="/movie">{title}</Link> */}

//         <Link to={`/movie/${id}`}>{title}</Link>
//       </h2>
//       <img alt={title} src={coverImg}></img>
//       <p>{summary}</p>
//       <ul>
//         {genres.map((genre, index) => (
//           <li key={index}>{genre}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// -------------------------------------------------
// 2) Whole Object
// -------------------------------------------------
function Movie(props) {
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__img}
        alt={props.movie.title}
        src={props.movie.medium_cover_image}
      ></img>
      <h2 className={styles.movie__title}>
        {/* <a href="/movie">{props.movie.title}</a> */}
        {/* <Link to="/movie">{props.movie.title}</Link> */}
        <Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link>
      </h2>
      <p>{props.movie.summary}</p>
      <ul className={styles.movie__genres}>
        {props.movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
