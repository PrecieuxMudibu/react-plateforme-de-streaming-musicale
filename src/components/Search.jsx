import React from "react"
import logo from "../images/logo.png"
import ironMan from "../images/iron-man.jpg"
import "../styles/search.css"
import "../styles/page.css"
import {Link} from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import {RiPlayListFill} from 'react-icons/ri'
import {BsHeartFill, BsSearch} from 'react-icons/bs'
function Search () {
    return (
        <div className="page">
            {/* <h1>Search page</h1> */}
            <div className="left-section">
                <div className="page__logo-group">
                        <img className="page__logo-img" src={logo} alt="logo de Musiker" />
                        <span className="page__logo-text">Musiker</span>
                </div>
                <nav className="page__navigation">
                    <Link className="page__link" to="/"><span className="icon"><FiHome /></span>Accueil</Link>
                    <Link className="page__link" to="/playlists"><span className="icon"><RiPlayListFill /></span>Playlists</Link>
                    <Link className="page__link" to="/chansons-aimées"><span className="icon"><BsHeartFill /></span>Chansons aimées</Link>
                </nav>
            </div>



            <div className="right-section">
                <label className="page__search">
                    <span className="page__search-icon"><BsSearch/></span>
                    <input className="page__input" type="text" placeholder="Que voulez-vous écouter"/>
                </label>
                <section>
                    <h1 className="page__first-title">Populaire</h1>
                    <div className="card">
                        <img className="card__image" src={ironMan} alt="" />
                        <h2 className="card__title">Weekly Motivation</h2>
                        <p className="card__text">Ben Ina Scott</p>
                    </div>
                    <div className="card">
                        <img className="card__image" src={ironMan} alt="" />
                        <h2 className="card__title">Weekly Motivation</h2>
                        <p className="card__text">Ben Ina Scott</p>
                    </div>
                    <div className="card">
                        <img className="card__image" src={ironMan} alt="" />
                        <h2 className="card__title">Weekly Motivation</h2>
                        <p className="card__text">Ben Ina Scott</p>
                    </div>
                    <div className="card">
                        <img className="card__image" src={ironMan} alt="" />
                        <h2 className="card__title">Weekly Motivation</h2>
                        <p className="card__text">Ben Ina Scott</p>
                    </div>
                </section>

                <section>
                    <h1 className="page__first-title">Chansons</h1>
                    <table className="page__list">
                        <tr className="page__list-head">
                            <td>#</td>
                            <td>Titre</td>
                            <td>Album</td>
                            <td>Durée</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Morijah - Mon défenseur</td>
                            <td>Morijah - Mon défenseur</td>
                            <td>04:00</td>
                        </tr>
                    </table>
                </section>
            </div>

            <div>
                <audio controls>
                    <source src="myAudio.ogg" type="audio/ogg">
                    <source src="myAudio.mp3" type="audio/mpeg">
                </audio>
            </div> 
        </div>
    )
}
export default Search