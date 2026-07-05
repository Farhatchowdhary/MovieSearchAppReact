import { useState } from "react";
import "./App.css";

function App() {
  const movies = [
    {
      title: "Avatar",
      genre: "action",
      image: "https://m.media-amazon.com/images/I/61CQP5-a2jL._AC_SY879_.jpg",
    },
    {
      title: "Titanic",
      genre: "drama",
      image: "https://m.media-amazon.com/images/I/91pRm91AxmL._AC_SY879_.jpg",
    },
    {
      title: "Batman",
      genre: "action",
      image: "https://m.media-amazon.com/images/I/81quaO150WL._AC_SY879_.jpg",
    },
    {
      title: "Harry Potter",
      genre: "fantasy",
      image: "https://tse1.mm.bing.net/th/id/OIP.KnHsNWmAS0e4El6ABiZZzgHaK7",
    },
    {
      title: "Home Alone",
      genre: "comedy",
      image:
        "https://m.media-amazon.com/images/I/71dTylMnMES._AC_SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      title: "Jaws",
      genre: "thriller",
      image: "https://m.media-amazon.com/images/I/61zTN8rsBZL._AC_SY879_.jpg",
    },
    {
      title: "Inside Out",
      genre: "animation",
      image:
        "https://m.media-amazon.com/images/I/61BhAHKmQjL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
      title: "Lorem Ipsum",
      genre: "action",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.glnSDfqyn65JwkAXUrkGYQHaLH?pid=Api&h=220&P=0",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("all");

  const filtered = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genre === "all" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <>
      <div className="title">
        <h1>Movie Search App</h1>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filters">
        <button onClick={() => setGenre("all")}>All</button>
        <button onClick={() => setGenre("action")}>Action</button>
        <button onClick={() => setGenre("comedy")}>Comedy</button>
        <button onClick={() => setGenre("drama")}>Drama</button>
        <button onClick={() => setGenre("fantasy")}>Fantasy</button>
        <button onClick={() => setGenre("thriller")}>Thriller</button>
      </div>

      <div className="movie-cards">
        {filtered.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.image} alt={movie.title} width={250} height={400} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      <footer className="footer-title">
        <h1 className="footer">Search • Discover • Watch</h1>
        <p className="rights">© 2026 All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
