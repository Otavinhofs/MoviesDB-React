import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import { NavbarStyle, TitleNavbar, NavForm, InputStyle, SubmitStyle} from './styles';
import { useState } from "react";


const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <NavbarStyle>
            <Link to="/">
                <TitleNavbar>
                    <BiCameraMovie />MoviesDB
                </TitleNavbar>
            </Link>
            <NavForm onSubmit={handleSubmit}>
                <InputStyle 
                type="text"
                placeholder="Busque um filme"
                onChange={(e) => setSearch(e.target.value)}
                value={search} 
                   />
                <SubmitStyle type="submit">
                    <BiSearchAlt2 />
                </SubmitStyle>
            </NavForm>

        </NavbarStyle>
    )
}




export default Navbar

