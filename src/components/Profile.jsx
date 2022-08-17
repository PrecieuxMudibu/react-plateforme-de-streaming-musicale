import ironMan from "../images/iron-man.jpg"
import {MdArrowDropDown} from "react-icons/md"

function Profile () {
    return (
        <div className="page__profile">
                <p><img className="page__profile-picture" src={ironMan} alt="photo de profil"/><span className="page__profile-text">Précieux Mudibu</span><span className="page__profile-icon"><MdArrowDropDown /></span></p>
                <p className="page__progile-logout">Déconnexion</p>
            </div>
    )
}

export default Profile