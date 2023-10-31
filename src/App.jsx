import "./App.css";
import { Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
import LikedSongs from "./components/LikedSongs";
import Playlists from "./components/Playlists";
import { useState } from "react";
import PlaylistSelected from "./components/PlaylistSelected";
import { applicationContext } from "./context.js";
// const applicationContext = createContext()

function App() {
    const [inputValue, updateInputValue] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [uriToPlay, setUriToPlay] = useState([]);
    const [activeLink, updateActiveLink] = useState("");
    const [dataLoad, setDataLoad] = useState(false);

    return (
        <>
            <applicationContext.Provider
                value={{
                    inputValue,
                    updateInputValue,
                    token,
                    setToken,
                    userId,
                    setUserId,
                    name,
                    setName,
                    uriToPlay,
                    setUriToPlay,
                    activeLink,
                    updateActiveLink,
                    dataLoad,
                    setDataLoad,
                }}
            >
                <Routes>
                    {/* <Route path="/" element={ token ? (<Login />) : (<Navigate to="/accueil" />) } /> */}
                    <Route path="/" element={<Login />} />
                    <Route path="/accueil" element={<Home />} />

                    <Route path="/rechercher" element={<Search />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route
                        path="/ecouter-une-playlist/:playlistName/:playlistId"
                        element={<PlaylistSelected />}
                    />
                    <Route path="/chansons-aimees" element={<LikedSongs />} />
                </Routes>
            </applicationContext.Provider>
        </>
    );
}

export default App;
export { applicationContext };
