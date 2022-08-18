import SpotifyWebApi from "spotify-web-api-js"
import "../styles/page.css"
import Card from "./Card"
import { useContext, useEffect, useState } from "react"
import { applicationContext } from "../App"
function ListOfCards({ text }) {
    const { token, setToken } = useContext(applicationContext)

    const onTheSpotifyCount = new SpotifyWebApi()
    onTheSpotifyCount.setAccessToken(token)

    const [imageSong, setImageSong] = useState()
    const [titleSong, setTitleSong] = useState("")
    const [nameArtist, setNameArtist] = useState("")
    const [identifiant, setIdentifiant] = useState("")
    const [recentlyPlayed, setRecentlyPlayed] = useState([])

    useEffect(() => {
        onTheSpotifyCount.getMyRecentlyPlayedTracks(function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                console.log("Récemment Jouées", data)
                console.log("Nombre", data.items)

                // setImageSong(data.items[0].track.album.images[0].url)
                // setNameArtist(data.items[0].track.artists[0].name)
                // setTitleSong(data.items[0].track.name)
                // setIdentifiant(data.items[0].track.id)

                // console.log(data.items.map((item) => item.track))
                setRecentlyPlayed(data.items)
            }
        })
    }, [token])

    return (
        <section>
            <h1 className="page__first-title">{text}</h1>
            {console.log(recentlyPlayed)}
            {recentlyPlayed.map((item) =>(
            <div id={item.track.id} className="card">
                <img className="card__image" src={item.track.album.images[0].url} alt="" />
                <h2 className="card__title">{item.track.name}</h2>
                <p className="card__text">{item.track.artists[0].name}</p>
            </div>
            ))}
            {/* <Card
                identifiant={identifiant}
                image={imageSong}
                name={nameArtist}
                title={titleSong}
            /> */}
        </section>
    )
}
export default ListOfCards
