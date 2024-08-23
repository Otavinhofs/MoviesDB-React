import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs"
import { Description, Info, MovieCard, MoviePage, Tagline } from "./styles"
import { FaStar } from "react-icons/fa"

export default function Movie() {
  const imageURL = import.meta.env.VITE_IMG
  const movieURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const movieUrl = `${movieURL}${id}?${apiKey}`
    getMovie(movieUrl)
  })

  return (
    <MoviePage>{movie && (
      <>
        <MovieCard>
          <img src={imageURL + movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>
            <FaStar  /> {movie.vote_average.toFixed(1)}
          </p>
        </MovieCard>
        <Tagline>{movie.tagline}</Tagline>
        <Info>
          <h3>
            <BsWallet2 /> Orçamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </Info>
        <Info>
          <h3>
            <BsGraphUp /> Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </Info>
        <Info>
          <h3>
            <BsHourglassSplit /> Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
        </Info>
        <Description>
          <h3>
            <BsFillFileEarmarkTextFill /> Descrição:
          </h3>
          <p>{movie.overview}</p>
        </Description>
      </>
    )
    }</MoviePage>
  )
}
