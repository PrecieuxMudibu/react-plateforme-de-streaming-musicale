import React, { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import Header from "./Header"
import LeftSection from "./LeftSection"
import Card from "./Card"
import { applicationContext } from "../App"
import SpotifyPlayer from "react-spotify-web-playback"

function Home() {
    const { token, setToken, uriToPlay, activeLink, updateActiveLink } = useContext(applicationContext)
    updateActiveLink('accueil')
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const onTheSpotifyCount = new SpotifyWebApi()

    const [recentlyPlayed, setRecentlyPlayed] = useState([])

    useEffect(() => {
        onTheSpotifyCount.setAccessToken(token)
        onTheSpotifyCount.getMyRecentlyPlayedTracks(function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                // console.log("Récemment Jouées", data)
                console.log("URI", data.items[0].track.uri)
                setRecentlyPlayed(data.items)
            }
        })
    }, [token])
    //  console.log(inputValue)
    // console.log(uriChanson)

    return (
        <div className="page">
            <LeftSection />
            <div className="right-section">
                <Header />
                <section>
                    <h1 className="page__first-title">Ecoutées récemment</h1>

                    {recentlyPlayed.map((item) => (
                        <Card
                            identifiant={item.track.id}
                            image={item.track.album.images[0].url}
                            bigTitle={item.track.name}
                            name={item.track.artists[0].name}
                            uri={item.track.uri}
                        />
                    ))}
                </section>
                <SpotifyPlayer
                    token={token}
                    uris={uriToPlay}
                    play={true}
                />
            </div>
        </div>
    )
}

export default Home
