import { useState, useEffect } from "react"
import { MoviesContainer, Pagination, Title, PaginationButton } from "./styles"
import MovieCard from "../../components/MoviesCard"



export default function Home() {
    const moviesURL = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY
    const [topMovies, setTopMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1)
    }

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1))
    }

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        setTotalPage(data.total_pages)
        setLoading(false)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR&page=${currentPage}`
        if (topRatedUrl) {
            setLoading(true)
            getTopRatedMovies(topRatedUrl)
        } else {
            setLoading(false)
        }
        window.scrollTo(0, 0)

    }, [currentPage])

    const renderPageButtons = () => {
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPage, currentPage + 2);
        
        const buttons = [];
        for (let page = startPage; page <= endPage; page++) {
          buttons.push(
            <PaginationButton 
              key={page} 
              onClick={() => setCurrentPage(page)}
              disabled={currentPage === page}
            >
              {page}
            </PaginationButton>
          );
        }
        
        return buttons;
      };

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
            <Pagination>
                <PaginationButton onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Anterior
                </PaginationButton>
                {renderPageButtons()}
                <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPage}>Próxima</PaginationButton>
            </Pagination>
        </>
    )
}

