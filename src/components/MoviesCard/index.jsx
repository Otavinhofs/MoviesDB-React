import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MovieCardContainer, ImageCardContainer, ImageCard } from "./styles";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

const imageUrl = import.meta.env.VITE_IMG;

const ImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <ImageCardContainer>
      {loading && <div className="loader"><LuLoader2/></div>}
      <ImageCard
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </ImageCardContainer>
  );
};

export default function MovieCard ({ movie, showLink = true }) {
  return (
    <MovieCardContainer>
      <ImageWithLoader src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average.toFixed(1)}
      </p>
      {
        showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>
      }
    </MovieCardContainer>
  )
}
