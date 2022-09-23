import { RiLogoutBoxRFill } from "react-icons/ri";
import { useState, useEffect, useContext } from "react";
import { applicationContext } from "../App";
import SpotifyWebApi from "spotify-web-api-js";

function Profile() {
    const { token, setToken, userId, setUserId, name, setName,dataLoad, setDataLoad } =
        useContext(applicationContext);

    const logout = () => {
        setToken("");
        setDataLoad(false);
        window.localStorage.removeItem("token");
    };
    // const [name, setName] = useState("")
    const [profileImage, setProfileImage] = useState();

    const onTheSpotifyCount = new SpotifyWebApi();
    onTheSpotifyCount.setAccessToken(token);

    useEffect(() => {
        onTheSpotifyCount.getMe(function (err, data) {
            if (err) console.error("Erreur", err);
            else {
                setName(data.display_name);
                setProfileImage(data.images[0].url);
                setUserId(data.id);
            }
        });
    }, [token]);

    return (
        <div className="page__profile">
            <p>
                <img
                    className="page__profile-picture"
                    src={profileImage}
                    alt="photo de profil"
                />
                <span className="page__profile-text">{name}</span>
                <span className="page__profile-icon" onClick={logout}>
                    <RiLogoutBoxRFill />
                </span>
            </p>
        </div>
    );
}

export default Profile;
