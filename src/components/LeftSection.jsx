import logo from "../images/logo.png"
import "../styles/leftSection.css"
import {NavLink} from "react-router-dom"
import { FiHome } from "react-icons/fi"
import { RiPlayListFill } from "react-icons/ri"
import { BsHeartFill, BsSearch } from "react-icons/bs"
import { useContext } from "react"
import { applicationContext } from "../App"

function LeftSection() {
    const { activeLink, updateActiveLink } = useContext(applicationContext)

        return (
            <div className="left-section">
                <div className="page__logo-group">
                    <img
                        className="page__logo-img"
                        src={logo}
                        alt="logo de Musiker"
                    />
                    <span className="page__logo-text">Musiker</span>
                </div>
                <nav className="page__navigation">
                    <NavLink
                        className="page__link"
                        to="/accueil"
                    >
                        <span className="icon">
                            <FiHome />
                        </span>
                        <span className="page__link-text">Accueil</span>
                    </NavLink>
                    <NavLink className="page__link" to="/playlists">
                        <span className="icon">
                            <RiPlayListFill />
                        </span>
                        <span className="page__link-text">Playlists</span>
                    </NavLink>
                    <NavLink className="page__link" to="/chansons-aimees">
                        <span className="icon">
                            <BsHeartFill />
                        </span>
                        <span className="page__link-text">Chansons aimées</span>
                    </NavLink>
                </nav>
            </div>
        )
}

export default LeftSection
