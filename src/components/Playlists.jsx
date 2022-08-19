import React, { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import Header from "./Header"
import LeftSection from "./LeftSection"
import Card from "./Card"
import { applicationContext } from "../App"
import {Link} from 'react-router-dom'

function Playlists() {
    const onTheSpotifyCount = new SpotifyWebApi()
    const { token, userId, name } = useContext(applicationContext)
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        onTheSpotifyCount.setAccessToken(token)
        onTheSpotifyCount.getUserPlaylists(userId, function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                setPlaylists(data.items)
            }
        })

        onTheSpotifyCount.getL
    }, [token])

    console.log("playlists use state", playlists)

    return (
        <>
            <div className="page">
                <LeftSection />
                <div className="right-section">
                    <Header />
                    <section>
                        <h1 className="page__first-title">Playlists</h1>
                        {playlists.map((item) => (
                        <Link to="/playlists/ecouter-une-playlist">
                            <Card
                                identifiant={item.id}
                                image={item.images[0].url}
                                bigTitle={item.name}
                                name={`By ${name}`}
                            />
                        </Link>
                        ))}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Playlists
