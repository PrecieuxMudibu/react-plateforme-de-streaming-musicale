import React, { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import Header from "./Header"
import LeftSection from "./LeftSection"
import Card from "./Card"
import { applicationContext } from "../App"

function Home() {
    const { token, setToken } = useContext(applicationContext)

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

    // useEffect( ()=> {
    //     s.getArtistAlbums( '43ZHCT0cAZBISjO8DG9PnE' ,  function  (err, data)  {
    //         if  ( err )  console.error ( err ) ;
    //         else  console.log ( 'Artist albums' ,  data ) ;
    //       } ) ;
    //     // console.log(token)
    // }

    // onTheSpotifyCount.searchTracks ( 'Amour' ).then (
    //     function  ( data )  {
    //       console.log ( 'Search by "Love"', data ) ;
    //     } ,
    //     function  ( err )  {
    //       console.error( err ) ;
    //     }
    //   ) ;

    // const onTheSpotifyCount = new SpotifyWebApi()
    // onTheSpotifyCount.setAccessToken(token)

    // onTheSpotifyCount.getMyRecentlyPlayedTracks (
    //     function  (err, data)  {
    //             if  ( err )  console.error ( err ) ;
    //             else  console.log ( 'Moi' ,  data ) ;
    //     }
    // )
    // useEffect(()=> {

    //     onTheSpotifyCount.getMyRecentlyPlayedTracks (
    //         function (err, data) {
    //                 if  (err)  console.error ("Erreur", err ) ;
    //                 else  console.log ( 'Ecoutées récemment' ,  data ) ;
    //             }
    //     )
    // }, [])

    // let rechercher = "aaa"
    //     if (rechercher=="") {
    //         return (<h1>Rehcercher</h1>)
    //     } else {
    //         return (<h1>Accueil</h1>)

    //     }

    // useEffect(()=>{
    //     onTheSpotifyCount
    // })

    const onTheSpotifyCount = new SpotifyWebApi()
    onTheSpotifyCount.setAccessToken(token)

    const [recentlyPlayed, setRecentlyPlayed] = useState([])
    // const [followedArtists, setFollowedArtists] = useState([])

    useEffect(() => {
        onTheSpotifyCount.getMyRecentlyPlayedTracks(function (err, data) {
            if (err) console.error("Erreur", err)
            else {
                // console.log("Récemment Jouées", data)
                // console.log("Nombre", data.items)
                setRecentlyPlayed(data.items)
            }
        })
    }, [token])

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
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Home
