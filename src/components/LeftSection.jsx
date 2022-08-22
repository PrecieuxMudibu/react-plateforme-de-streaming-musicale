import logo from "../images/logo.png"
import "../styles/leftSection.css"
import {Link} from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import {RiPlayListFill} from 'react-icons/ri'
import {BsHeartFill, BsSearch} from 'react-icons/bs'
import { useContext } from "react"
import {applicationContext} from '../App'

function LeftSection () {
    const { activeLink, updateActiveLink } = useContext(applicationContext)

    if (activeLink=='accueil') {
        return (
            <div className="left-section">
                    <div className="page__logo-group">
                            <img className="page__logo-img" src={logo} alt="logo de Musiker" />
                            <span className="page__logo-text">Musiker</span>
                    </div>
                    <nav className="page__navigation">
                        <Link className="page__link page__link--active" to="/accueil"><span className="icon"><FiHome /></span>Accueil</Link>
                        <Link className="page__link" to="/playlists"><span className="icon"><RiPlayListFill /></span>Playlists</Link>
                        <Link className="page__link" to="/chansons-aimées"><span className="icon"><BsHeartFill /></span>Chansons aimées</Link>
                    </nav>
            </div>
        )
    } else if (activeLink=='playlists') {
        return (
            <div className="left-section">
                    <div className="page__logo-group">
                            <img className="page__logo-img" src={logo} alt="logo de Musiker" />
                            <span className="page__logo-text">Musiker</span>
                    </div>
                    <nav className="page__navigation">
                        <Link className="page__link" to="/accueil"><span className="icon"><FiHome /></span>Accueil</Link>
                        <Link className="page__link page__link--active" to="/playlists"><span className="icon"><RiPlayListFill /></span>Playlists</Link>
                        <Link className="page__link" to="/chansons-aimées"><span className="icon"><BsHeartFill /></span>Chansons aimées</Link>
                    </nav>
            </div>
        ) 
    }

    
}

export default LeftSection