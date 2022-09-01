import React, { useState, useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import SpotifyPlayer from "react-spotify-web-playback"
import LeftSection from "./LeftSection"
import ListHead from "./ListHead"
import Login from "./Login"
import ListChildren from "./ListChildren"
import Header from "./Header"
import { useContext } from "react"
import { applicationContext } from "../App"
import { findDuration } from "../functions/function"
import Spotifyplayer from "./spotifyPlayer"
import "../styles/page.css"

function Search() {
    const onTheSpotifyCount = new SpotifyWebApi()
    const { token, inputValue, updateInputValue, uriToPlay, setUriToPlay } =
        useContext(applicationContext)

    const [resultList, updateResultList] = useState([])

    useEffect(() => {
        onTheSpotifyCount.setAccessToken(localStorage.getItem("token"))
        onTheSpotifyCount
            .searchTracks(inputValue)
            .then((data) => {
                updateResultList(data.tracks.items)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [inputValue])

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
                            <h1 className="page__first-title">
                                    Résultat pour "{`${inputValue}`}"
                                </h1>
                            <ListHead />
                            <div className="page__result-list">
                                {resultList !== []
                                    ? resultList.map((item, index) => (
                                          <ListChildren
                                              songId={item.id}
                                              songNumber={index}
                                              songImage={
                                                  item.album.images[1].url
                                              }
                                              songName={item.name}
                                              songAlbum={item.album.name}
                                              songDuration={findDuration(
                                                  item.duration_ms
                                              )}
                                              songUri={item.uri}
                                          />
                                      ))
                                    : null}
                            </div>
                        </div>
                    </div>
                    <Spotifyplayer />
                </div>
            </>
        )
    }
}
export default Search
