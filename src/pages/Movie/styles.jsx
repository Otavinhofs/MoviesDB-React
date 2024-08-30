import styled from "styled-components";


export const MoviePage = styled.div `
    color: white;
    display: flex;
    margin: 1rem 4rem;
    height: 100%;
    svg {
        font-size: 1.5rem;
        color: #f7d354;
    }

`

export const MovieCard = styled.div `

    img, h2, p {
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2rem;
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

export const Informations = styled.div `
    padding: 2rem;
`
