import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const imgArtLogo = "../../../public/img/artlinegallerylogo.png";
    return (
        <header className="headerContainer">
            <Link to={"/"}>
                <img className="imgArtLogo" src={imgArtLogo} alt="" />
            </Link>

            <nav>
                <ul>
                    <li className="listaLi">
                        <NavLink to={"/categoria/2"} className="enlaceSeleccion"> Naturaleza </NavLink>
                    </li>

                    <li className="listaLi">
                        <NavLink to={"/categoria/3"} className="enlaceSeleccion"> Personas </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar