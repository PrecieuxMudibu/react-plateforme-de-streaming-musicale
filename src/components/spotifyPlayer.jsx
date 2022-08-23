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
                    styles={{
                        activeColor: '#fff',
                        bgColor: '#0e4A67',
                        color: '#fff',
                        loaderColor: 'white',
                        sliderColor: 'white',
                        sliderHandleColor: '#023853',
                        trackArtistColor: '#DBDBDB',
                        trackNameColor: 'white',
                      }}
                />
                </div>
    )
}
export default Spotifyplayer