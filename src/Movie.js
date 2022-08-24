function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img alt={title} src={coverImg}></img>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
