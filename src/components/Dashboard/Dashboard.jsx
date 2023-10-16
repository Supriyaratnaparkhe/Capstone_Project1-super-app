// App.js
import React from "react";
import MovieList from "../Entertainment/MovieList";

const Dashboard = () => {
  const apiKey = "7082fb8f";

  return (
    <div className="dashboard">
      <MovieList genre="Action" apiKey={apiKey} />
      <MovieList genre="Horror" apiKey={apiKey} />
      <MovieList genre="Thriller" apiKey={apiKey} />
      <MovieList genre="Romance" apiKey={apiKey} />
      <MovieList genre="Drama" apiKey={apiKey} />
      <MovieList genre="Western" apiKey={apiKey} />
      <MovieList genre="Fantacy" apiKey={apiKey} />
      <MovieList genre="Music" apiKey={apiKey} />
      <MovieList genre="Fiction" apiKey={apiKey} />
      {/* Add more genre sections as needed */}
    </div>
  );
};

export default Dashboard;

