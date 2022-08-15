import './App.css';
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
import Search from './components/Search'
import LikedSongs from './components/LikedSongs'
import Playlists from './components/Playlists'
function App() {

    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rechercher" element={<Search />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/chansons-aimées" element={<LikedSongs />} />
        </Routes>
        </>
        
    )
}

export default App;