import React from "react"
import "../styles/home.css"
import logo2 from "../images/logo2.png"
function Home () {
    const CLIENT_ID = "a62979cc04114573be6f1b1a78787db7"
    const REDIRECT_URI = "http://localhost:5173"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    return (
        <div className="home">
            <div className="home__left-section">
                <h1 className="home__first-title">Bienvenue sur Musiker</h1>
            </div>
            <div className="home__right-section">
                <img className="home__logo" src={logo2} alt='logo de Musiker' />
                <h2 className="home__second-title">Connectez-vous !</h2>
                <a className="home__button" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>CONTINUEZ AVEC SPOTIFY</a>
                <p className="home__text">Si vous n’avez pas de compte, veuillez vous inscrire ici</p>
            </div>
        </div>


    )
}

export default Home