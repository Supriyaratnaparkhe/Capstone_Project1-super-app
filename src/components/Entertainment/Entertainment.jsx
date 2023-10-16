import React from "react";
import MovieList from "./MovieList";

const Entertainment = () => {
  const apiKey = "7082fb8f";
  const storedSelectedGenre =
    JSON.parse(localStorage.getItem("selectedItems")) || [];

  return (
    <div>
      {storedSelectedGenre.map((item) => (
        <MovieList genre={item.name} apiKey={apiKey} />
      ))}
    </div>
  );
};

export default Entertainment;
