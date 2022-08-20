import LeftSection from "./LeftSection"
import Header from "./Header"
import Banner from "./Banner"
import ironMan from "../images/iron-man.jpg"
import ListHead from "./ListHead"
import ListChildren from "./ListChildren"
import { useContext, useEffect, useState } from "react"
import { applicationContext } from "../App"
import SpotifyWebApi from "spotify-web-api-js"
// import { useLocation } from "react-router-dom"
import { useParams } from 'react-router-dom'

function PlaylistSelected() {
    // const location = useLocation(),
    //     id = location.state.id

    // console.log(id)
    const { playlistId } = useParams()
    console.log(playlistId)

    const { token } = useContext(applicationContext)
    const onTheSpotifyCount = new SpotifyWebApi()

    onTheSpotifyCount.setAccessToken(token)

    useEffect(() => {
        onTheSpotifyCount.getPlaylistTracks(identifiant, function (err, data) {
            if (err) console.error(error)
            else console.log(data)
        })
    })

    // Constr.prototype.getPlaylistTracks = function (
    //     playlistId,
    //     options,
    //     callback
    //   ) {
    //     var requestData = {
    //       url: _baseUri + '/playlists/' + playlistId + '/tracks'
    //     };
    //     return _checkParamsAndPerformRequest(requestData, options, callback);
    //   };
    return (
        <div className="page">
            <LeftSection />
            <div className="right-section">
                <Header />
                <section>
                    <h1 className="page__first-title">Ecoutées récemment</h1>
                    <Banner
                        image={ironMan}
                        bigTitle="Ocean"
                        name="Précieux Mudibu"
                    />
                    <ListHead />
                    <ListChildren
                        songNumber="1"
                        songName="Je veux n'être qu'à toi"
                        songAlbum="Exo"
                        songDuration="04:00"
                    />
                </section>
            </div>
        </div>
    )
}

export default PlaylistSelected
