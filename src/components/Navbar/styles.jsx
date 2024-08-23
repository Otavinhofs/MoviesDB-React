import styled from 'styled-components'

export const NavbarStyle = styled.div`    
    justify-content: space-between;
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    background-color: #121212;
`

export const TitleNavbar = styled.h2`
    display: flex;
    align-items: center;
    gap:0.5rem;

    span {
        color: #f7d354;
    }
`

export const NavForm = styled.form`
    display: flex;
    gap: 0.5rem;
`

export const InputStyle = styled.input`
    border-radius: 4px;
    border: none;
    padding: 0.2rem 0.8rem;
`

export const SubmitStyle = styled.button`
    display: flex;
    align-items: center;
    padding: 0.3rem;
    background-color: #f7d354;
    border: 2px solid #f7d354;
    border-radius: 4px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: .4s;
    &:hover {
        background-color: transparent;
        color: #f7d354;
    } 
`