import React, { useState, useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import SpotifyPlayer from "react-spotify-web-playback"
import LeftSection from "./LeftSection"
import ListHead from "./ListHead"
import ListChildren from "./ListChildren"
import Header from "./Header"
import AudioBar from "./AudioBar"
import { useContext } from "react"
import { applicationContext } from "../App"
import {findDuration} from '../functions/function'


import "../styles/search.css"
import "../styles/page.css"

function Search() {
    // Constr.prototype.searchTracks = function (query, options, callback) {
    //     return this.search(query, ['track'], options, callback);
    //   };
    const onTheSpotifyCount = new SpotifyWebApi()
    const { token, inputValue, updateInputValue, uriToPlay, setUriToPlay } =
        useContext(applicationContext)

    const [resultList, updateResultList] = useState([])
    console.log(inputValue)
    useEffect(() => {
        // let search = `${inputValue}`;
        onTheSpotifyCount.setAccessToken(token)
        // const test = onTheSpotifyCount.searchTracks({ inputValue })
        // test.then((data) => console.log(data))
        onTheSpotifyCount.searchTracks(inputValue, function (err, data) {
            if (err) console.error(err)
            else {
                console.log("Mes chansons", data.tracks)
                // console.log("Titre de la chanson :", data.tracks.items[0].name)
                // console.log("Id de la chanson :", data.tracks.items[0].id)
                // console.log("URI de la chanson :", data.tracks.items[0].uri)
                // console.log("Album de la chanson :", data.tracks.items[0].album.name)
                // console.log("Durée de la chanson :", data.tracks.items[0].duration_ms)
                // console.log('Ce que je cherche', typeof(inputValue))
                // console.log('Search', search)
                updateResultList(data.tracks.items)
            }
        })
    }, [inputValue])
    return (
        <>
            <div className="page">
                <LeftSection />
                <div className="right-section">
                    <Header />
                    <ListHead />
                    {resultList.map((item, index) => (
                        <ListChildren
                            songId={item.id}
                            songNumber={index}
                            songName={item.name}
                            songAlbum={item.album.name}
                            songDuration={findDuration(item.duration_ms)}
                            songUri={item.uri}
                        />
                    ))}
                    {/* <ListChildren /> */}
                </div>
                {console.log(resultList)}
            </div>
            <AudioBar />
            <h1>{inputValue}</h1>
            <SpotifyPlayer token={token} uris={uriToPlay} play={true} />
            {/* {console.log(uriToPlay)} */}
        </>
    )
}
export default Search
