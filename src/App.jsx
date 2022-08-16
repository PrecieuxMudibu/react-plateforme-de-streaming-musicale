import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import Login from './components/Login';
import Search from './components/Search'
import LikedSongs from './components/LikedSongs'
import Playlists from './components/Playlists'
function App() {

    return (
        <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/rechercher" element={<Search />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/chansons-aimées" element={<LikedSongs />} />
        </Routes>
        </>
        
    )
}

export default App;