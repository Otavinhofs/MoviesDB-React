import { useState, useEffect } from "react"
import { MoviesContainer, Title } from "./styles"
import MovieCard from "../../components/MoviesCard"


export default function Home() {
    const moviesURL = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY
    const [topMovies, setTopMovies] = useState([])
    const [loading, setLoading] = useState(true); 

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        setLoading(false)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        if(topRatedUrl) {
            setLoading(true)
            getTopRatedMovies(topRatedUrl)
        } else {
            setLoading(false)
        }
        
    }, [])

    return (
        <>
            <Title>Melhores Filmes:</Title>
            <MoviesContainer>
                {loading ? (
                    <p>Carregando...</p>
                ) : topMovies.length > 0 ? (
                    topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
                ) : (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </MoviesContainer>
        </>
    )
}

