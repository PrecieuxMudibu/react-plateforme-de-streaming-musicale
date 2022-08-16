import {BsSearch} from 'react-icons/bs'
import ironMan from "../images/iron-man.jpg"
import "../styles/header.css"

function Header () {
    return (
        <header>
            <label className="page__search">
                <span className="page__search-icon"><BsSearch/></span>
                <input className="page__input" type="text" placeholder="Que voulez-vous écouter"/>
            </label>
            <div className="page__profile">
                <p className="page__profile-text"><img className="page__profile-picture" src={ironMan} alt="photo de profil"/>Précieux Mudibu</p>
            </div>
        </header>
    )
}

export default Header