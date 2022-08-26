import SpotifyPlayer from "react-spotify-web-playback"
import { useContext, useEffect, useState } from "react"
import { applicationContext } from "../App"
import "../styles/page.css"
function Spotifyplayer() {
    const { token, setToken, uriToPlay, activeLink, updateActiveLink } =
        useContext(applicationContext)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        setPlay(true)
    }, [uriToPlay])

    return (
        <div className="page__spotify-player">
            <SpotifyPlayer
                autoPlay={true}
                token={token}
                uris={uriToPlay}
                callback={(state) =>
                    !state.isPlaying ? setPlay(false) : setPlay(true)
                }
                play={play}
                styles={{
                    activeColor: "#fff",
                    bgColor: "#0e4A67",
                    color: "#fff",
                    loaderColor: "white",
                    sliderColor: "white",
                    sliderHandleColor: "#023853",
                    trackArtistColor: "#DBDBDB",
                    trackNameColor: "white",
                }}
            />
        </div>
    )
}
export default Spotifyplayer
