import LeftSection from "./LeftSection"
import Header from "./Header"
import Banner from "./Banner"
import ironMan from "../images/iron-man.jpg"
import ListHead from "./ListHead"
import ListChildren from "./ListChildren"
import { useContext, useEffect, useState } from "react"
import { applicationContext } from "../App"
import SpotifyPlayer from "react-spotify-web-playback"

import SpotifyWebApi from "spotify-web-api-js"
// import { useLocation } from "react-router-dom"
import { useParams } from 'react-router-dom'

function PlaylistSelected() {
    // const location = useLocation(),
    //     id = location.state.id

    // console.log(id)
    const { playlistName,playlistId } = useParams()
    console.log("Id",playlistId)
    console.log("Name",playlistName)

    const { token, name, uriToPlay, setUriToPlay } = useContext(applicationContext)
    const onTheSpotifyCount = new SpotifyWebApi()
    const [playlistTracks, setPlaylistTracks] = useState([])
    
    useEffect(()=>{
        onTheSpotifyCount.setAccessToken(token)
        onTheSpotifyCount.getPlaylistTracks(playlistId, function (err, data) {
            if (err) console.error(err)
            else {
                // console.log (data)
                // console.log ("Tableau",data.items)
                // console.log ("Image",data.items[0].track.album.images[0].url)
                // console.log ("Titre de la chanson de la playlists :",data.items[0].track.name)
                // console.log ("Album de la chanson de la playlists :",data.items[0].track.album.name)
                // console.log ("Durée d'une chanson de la playlists :",data.items[0].track.duration_ms)
                // console.log ("Id d'une chanson de la playlists :",data.items[0].track.id)
                // console.log ("URI d'une chanson de la playlists :",data.items[0].track.uri)
                setPlaylistTracks(data.items)
            }
        })
    }, [token])



    return (
        <div className="page">
            <LeftSection />
            <div className="right-section">
                {console.log(playlistTracks)}
                <Header />
                <section>
                    <h1 className="page__first-title">Playlists</h1>
                    <Banner
                        image={ironMan}
                        bigTitle={playlistName}
                        name={name}
                    />
                    <ListHead />
                   

                    {playlistTracks.map((item, index)=>(<ListChildren songNumber={index} songName={item.track.name} songAlbum={item.track.album.name} songDuration={`Minute : ${item.track.duration_ms/1000/60} /// Secondes :`} songUri={item.track.uri} />))}

                </section>
                <SpotifyPlayer
                    token={token}
                    uris={uriToPlay}
                    play={true}
                />
                {console.log(uriToPlay)}
            </div>
        </div>
    )
}

export default PlaylistSelected
