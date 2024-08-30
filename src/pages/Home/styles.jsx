import {styled} from 'styled-components'

export const Title = styled.h2 `
    color: white;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
    &:span{
        color: #f7d354;
    }
`

export const MoviesContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

`

export const Pagination = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PaginationButton = styled.button `
    color: black;
    background-color: #f7d354;
    padding: 10px;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    border-radius: 46px;

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        background-color: transparent;
        border-color: #f7d354;
        color: white;
        opacity: 1;
    }

    
`




