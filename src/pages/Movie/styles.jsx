import styled from "styled-components";


export const MoviePage = styled.div `
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 2rem auto;

    svg {
        font-size: 1.5rem;
        color: #f7d354;
    }

`

export const MovieCard = styled.div `
    text-align: center;
    img, h2, p {
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2rem;
    }
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
    }
`

export const Tagline = styled.p `
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
`

export const Info = styled.div `
    margin-bottom: 1.5rem;

    h3 {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`

export const Description = styled.div `
    padding-bottom: 5rem;

    p{
        line-height: 1.4rem;
    }
`

