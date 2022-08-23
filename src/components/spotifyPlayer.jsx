import SpotifyPlayer from "react-spotify-web-playback"
import {useContext} from 'react'
import {applicationContext} from '../App'
import '../styles/page.css'
function Spotifyplayer () {
    const { token, setToken, uriToPlay, activeLink, updateActiveLink } = useContext(applicationContext)

    return(
        <div className='page__spotify-player'>

                <SpotifyPlayer
                    token={token}
                    uris={uriToPlay}
                    play={true}
                />
                </div>
    )
}
export default Spotifyplayer