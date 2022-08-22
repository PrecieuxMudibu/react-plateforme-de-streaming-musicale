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
import { useParams } from 'react-router-dom'
import {findDuration} from '../functions/function'

function PlaylistSelected() {
 
    const { playlistName,playlistId } = useParams()

    const { token, name, uriToPlay, setUriToPlay } = useContext(applicationContext)
    const onTheSpotifyCount = new SpotifyWebApi()
    const [playlistTracks, setPlaylistTracks] = useState([])
    const [imagePlaylist, setImagePlaylist]=useState('')
    useEffect(()=>{
        onTheSpotifyCount.setAccessToken(token)
        onTheSpotifyCount.getPlaylistTracks(playlistId, function (err, data) {
            if (err) console.error(err)
            else {
                // console.log (data)
                // console.log ("Tableau",data.items)
                // console.log ("Titre de la chanson de la playlists :",data.items[0].track.name)
                // console.log ("Album de la chanson de la playlists :",data.items[0].track.album.name)
                // console.log ("Durée d'une chanson de la playlists :",data.items[0].track.duration_ms)
                // console.log ("Id d'une chanson de la playlists :",data.items[0].track.id)
                // console.log ("URI d'une chanson de la playlists :",data.items[0].track.uri)
                console.log ("Image",data.items[0].track.album.images[0].url)
                setPlaylistTracks(data.items)
                setImagePlaylist(data.items[0].track.album.images[0].url)
            }
        })
    }, [token])



    return (
        <div className="page">
            <LeftSection />
            <div className="right-section">
                {console.log("Image",playlistTracks)}
                <Header />
                <section>
                    <h1 className="page__first-title">Playlists</h1>
                    <Banner
                        image={imagePlaylist}
                        bigTitle={playlistName}
                        name={name}
                    />
                    <ListHead />
                   

                    {playlistTracks.map((item, index)=>(<ListChildren songNumber={index} songName={item.track.name} songAlbum={item.track.album.name} songDuration={findDuration(item.track.duration_ms)} songUri={item.track.uri} />))}

                </section>
                <SpotifyPlayer
                    token={token}
                    uris={uriToPlay}
                    play={true}
                />
                {/* {console.log(uriToPlay)} */}
            </div>
        </div>
    )
}

export default PlaylistSelected
