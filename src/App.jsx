import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Search from "./components/Search"
import LikedSongs from "./components/LikedSongs"
import Playlists from "./components/Playlists"
import React, { createContext } from "react"
import { useState } from "react"
import PlaylistSelected from "./components/PlayListSelected"
import LeftSection from "./components/LeftSection"

const applicationContext = createContext()

function App() {
    const [inputValue, updateInputValue] = useState("")
    const [token, setToken] = useState("")
    const [userId, setUserId]  = useState("")
    const [name, setName] = useState("")


    return (
        <>
            <applicationContext.Provider
                value={{ inputValue, updateInputValue, token, setToken, userId, setUserId, name, setName}}
            >
                
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/accueil" element={<Home />} />
                    <Route path="/rechercher" element={<Search />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/ecouter-une-playlist/:playlistId" element={<PlaylistSelected />} identifiant={"111"}/>

                    <Route path="/chansons-aimées" element={<LikedSongs />} />
                </Routes>
            </applicationContext.Provider>
        </>
    )
}

export default App
export { applicationContext }
