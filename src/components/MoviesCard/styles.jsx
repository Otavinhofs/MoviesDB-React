import styled from "styled-components";


export const MovieCardContainer = styled.div `
    width: 30%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;

    h2, p{
        margin-bottom: 1rem;
    }

    svg {
        color: #f7d354;
    }

    a {
        background-color: #f7d354;
        border: 2px solid #f7d354;
        color: #000;
        align-items: center;
        transition: 0.4s;
        padding: 1rem 0.5rem;
        border-radius: 4px;
        text-align: center;
        font-weight: bold;
        &:hover {
            background-color: transparent;
            color: #f7d354;
        }
    }
`

export const ImageCard = styled.img `
    max-width: 100%;
`

export const ImageCardContainer = styled.div`
    position: relative; 
    height: 100%; 

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem; 
  }

`;

