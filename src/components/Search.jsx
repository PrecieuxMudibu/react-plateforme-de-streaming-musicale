import React from "react"
import logo from "../images/logo.png"
import "../styles/search.css"
import "../styles/page.css"
import {Link} from 'react-router-dom'
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
                    <Link className="page__link" to="/">Accueil</Link>
                    <Link className="page__link" to="/playlists">Playlists</Link>
                    <Link className="page__link" to="/chansons-aimées">Chansons aimées</Link>
                </nav>
            </div>



            <div className="right-section">
                <input type="text" placeholder="Que voulez-vous écouter"/>
                <section>
                    <h1>Populaire</h1>
                    <div className="card">
                        <img src="" alt="" />
                        <p>Weeekly Motivation</p>
                        <p>Ben Ina Scott</p>
                    </div>
                </section>

                <section>
                    <h1>Chansons</h1>
                    <table>
                    <tr>
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
            <footer>

            </footer>  
        </div>
    )
}
export default Search