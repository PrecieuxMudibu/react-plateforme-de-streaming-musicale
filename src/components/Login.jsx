import React from "react"
import "../styles/login.css"
import logo2 from "../images/logo2.png"
function Login() {
    let redirectUri = import.meta.env["VITE_REDIRECT_URI_DEV"]

    if (import.meta.env.MODE === "production") {
        redirectUri = import.meta.env["VITE_REDIRECT_URI_PROD"]
    }

    return (
        <div className="login">
            <div className="login__left-section">
                <h1 className="login__first-title">Bienvenue sur Musiker</h1>
            </div>
            <div className="login__right-section">
                <img
                    className="login__logo"
                    src={logo2}
                    alt="logo de Musiker"
                />
                <h2 className="login__second-title">Connectez-vous !</h2>
                <a
                    className="login__button"
                    href={`${import.meta.env["VITE_AUTH_ENDPOINT"]}?client_id=${
                        import.meta.env["VITE_CLIENT_ID"]
                    }&redirect_uri=${redirectUri}&response_type=${
                        import.meta.env["VITE_RESPONSE_TYPE"]
                    }&scope=user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read`}
                >
                    CONTINUEZ AVEC SPOTIFY
                </a>
                <p className="login__text">
                    Le problème avec l'appréciation de la musique en général est
                    qu'on apprend aux gens à avoir trop de respect pour la
                    musique ; on devrait plutôt leur apprendre à l'aimer.
                </p>
            </div>
        </div>
    )
}

export default Login
