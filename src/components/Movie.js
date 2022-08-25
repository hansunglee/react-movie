import { Link } from "react-router-dom";

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
    <div>
      <h2>
        {/* <a href="/movie">{props.movie.title}</a> */}
        {/* <Link to="/movie">{props.movie.title}</Link> */}
        <Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link>
      </h2>
      <img alt={props.movie.title} src={props.movie.medium_cover_image}></img>
      <p>{props.movie.summary}</p>
      <ul>
        {props.movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
