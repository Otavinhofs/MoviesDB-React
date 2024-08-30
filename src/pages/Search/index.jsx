import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MoviesCard";
import { Title, MoviesContainer } from '../Home/styles';

export default function Search() {
  const searchURL = import.meta.env.VITE_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
      setLoading(true); 
      getSearchedMovies(searchWithQueryURL);
    } else {
      setLoading(false);
    }
  }, [query]);

  return (
    <>
      <Title>Resultado para: <span>{query}</span></Title>
      <MoviesContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </MoviesContainer>
    </>
  );
}
