import { useContext, useEffect } from "react";
import { applicationContext } from "../App";

import Header from "./Header";
import LeftSection from "./LeftSection";
import Banner from "./Banner";
import ironMan from "../images/iron-man.jpg";
import ListHead from "./ListHead";
import ListChildren from "./ListChildren";
import Spotifyplayer from "./spotifyPlayer";
import SpotifyWebApi from "spotify-web-api-js";

function LikedSongs() {
    const { token, name, uriToPlay, setUriToPlay } =
        useContext(applicationContext);
    const onTheSpotifyCount = new SpotifyWebApi();
    useEffect(() => {
        onTheSpotifyCount.setAccessToken(token);
        onTheSpotifyCount.getMySavedTracks(function (err, data) {
            if (err) console.error("Erreur", err);
            else {
                console.log(data);
            }
        });
    }, [token]);
    return (
        <>
            <div className="page">
                <div className="page__top">
                    <LeftSection />
                    <div className="right-section">
                        <Header />
                        <section>
                            <h1 className="page__first-title">
                                Chansons aimées
                            </h1>
                            <div className="page__playlist-selected-list">
                                <Banner image={ironMan} />
                                <ListHead />
                                <ListChildren />
                            </div>
                        </section>
                    </div>
                </div>
                <Spotifyplayer />
            </div>
        </>
    );
}

export default LikedSongs;
