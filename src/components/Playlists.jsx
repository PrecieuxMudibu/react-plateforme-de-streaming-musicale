import React, { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import Header from "./Header"
import LeftSection from "./LeftSection"
import Card from "./Card"
import { applicationContext } from "../App"
import { Link } from "react-router-dom"
import Login from "./Login"

function Playlists() {
    const onTheSpotifyCount = new SpotifyWebApi()
    const { token, userId, name, activeLink, updateActiveLink } =
        useContext(applicationContext)
    updateActiveLink("playlists")
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        onTheSpotifyCount.setAccessToken(token)
        onTheSpotifyCount.getUserPlaylists(userId, function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                setPlaylists(data.items)
            }
        })
    }, [token])
    if (token == "") {
        return <Login />
    } else {
        return (
            <>
                <div className="page">
                    <div className="page__top">
                        <LeftSection />
                        <div className="right-section">
                            <Header />
                            <section>
                                <h1 className="page__first-title">Playlists</h1>
                                <div className="card__container">
                                    {playlists.map((item) => (
                                        <Link
                                            to={`/ecouter-une-playlist/${item.name}/${item.id}`}
                                            className="white-color"
                                        >
                                            <Card
                                                identifiant={item.id}
                                                image={item.images[0].url}
                                                bigTitle={item.name}
                                                name={`By ${name}`}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Playlists
