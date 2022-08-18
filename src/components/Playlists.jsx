import React, { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import Header from "./Header"
import LeftSection from "./LeftSection"
import Card from "./Card"
import { applicationContext } from "../App"

function Playlists() {
    const onTheSpotifyCount = new SpotifyWebApi()
    const { token, userId, name } = useContext(applicationContext)
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        onTheSpotifyCount.setAccessToken(token)
        // console.log(onTheSpotifyCount.getAccessToken())
        onTheSpotifyCount.getUserPlaylists(userId, function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                console.log("Playlists", data)
                console.log("Playlists tableau", data.items[0])
                console.log("Playlists id", data.items[0].id)
                console.log("Playlists nom", data.items[0].name)
                console.log("Playlists images", data.items[0].images[0].url)

                // console.log(data.images[0].url)
                setPlaylists(data.items)
            }
        })
    }, [token])

    // console.log("id", userId)
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
                            <Card
                                identifiant={item.id}
                                image={item.images[0].url}
                                bigTitle={item.name}
                                name={`By ${name}`}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Playlists
