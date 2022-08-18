import React from "react"
import "../styles/login.css"
import logo2 from "../images/logo2.png"
function Login () {
    const CLIENT_ID = "a62979cc04114573be6f1b1a78787db7"
    // const REDIRECT_URI = "http://localhost:5173"
    const REDIRECT_URI = "http://localhost:5173/accueil"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    return (
        <div className="login">
            <div className="login__left-section">
                <h1 className="login__first-title">Bienvenue sur Musiker</h1>
            </div>
            <div className="login__right-section">
                <img className="login__logo" src={logo2} alt='logo de Musiker' />
                <h2 className="login__second-title">Connectez-vous !</h2>
                <a className="login__button" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read`}>CONTINUEZ AVEC SPOTIFY</a>
                <p className="login__text">Si vous n’avez pas de compte, veuillez vous inscrire ici</p>
            </div>
        </div>
    )
}

export default Login