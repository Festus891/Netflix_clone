import React, { useEffect, useState } from "react";
import axios from "..//axios";
import "./row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  // const base_url = "https://image.tmdb.org/t/p/w500/";
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movie);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movie.map((movies) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            key={movie.id}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
