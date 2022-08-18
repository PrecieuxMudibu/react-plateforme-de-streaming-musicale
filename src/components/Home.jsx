import React, {useEffect, useState, useContext} from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import Header from "./Header"
import LeftSection from "./LeftSection"
import ListOfCards from "./ListOfCards"
import { applicationContext } from '../App'



function Home () {
    const {token, setToken} = useContext(applicationContext)

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
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


    
    const onTheSpotifyCount = new SpotifyWebApi();
    onTheSpotifyCount.setAccessToken(token);
    
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

        return (

            <div className="page">
                    <LeftSection />
                    <div className="right-section">
                        <Header />
                        <ListOfCards text="Ecoutées récemment"/>
                        {/* <ListOfCards text="Pour commencer" /> */}
                    </div>
            </div>
        )
    
}

export default Home