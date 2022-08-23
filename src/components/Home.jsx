import React, { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import Header from "./Header"
import LeftSection from "./LeftSection"
import Card from "./Card"
import { applicationContext } from "../App"
import Spotifyplayer from "./spotifyPlayer"
import Login from "./Login"

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

    const onTheSpotifyCount = new SpotifyWebApi()

    const [recentlyPlayed, setRecentlyPlayed] = useState([])

    useEffect(() => {
        onTheSpotifyCount.setAccessToken(token)
        onTheSpotifyCount.getMyRecentlyPlayedTracks(function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                console.log("URI", data.items[0].track.uri)
                setRecentlyPlayed(data.items)
            }
        })
    }, [token])

    if (token=='') {
        return (<Login />)
    } else {

    return (
        <>
        <div className="page">
            <LeftSection />
            <div className="right-section">
                <Header />
                <section>
                    <h1 className="page__first-title">Ecoutées récemment</h1>
        <div className='card__container'>
                    {recentlyPlayed.map((item) => (
                        <Card
                            identifiant={item.track.id}
                            image={item.track.album.images[0].url}
                            bigTitle={item.track.name}
                            name={item.track.artists[0].name}
                            uri={item.track.uri}
                        />
                    ))}
                    </div>
                </section>
                {console.log(token)}
                
            </div>
        </div>
                <Spotifyplayer/>
                </>
    )}
}

export default Home
