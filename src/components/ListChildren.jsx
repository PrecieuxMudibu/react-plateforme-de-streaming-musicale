import { applicationContext } from "../App"
import { useContext } from "react"
import "../styles/list.css"

function ListChildren({songId, songNumber, songName, songAlbum, songDuration, songUri}) {
    const {uriToPlay, setUriToPlay} = useContext(applicationContext)
    const uri=songUri
    
    return (
        <div key={songId} className="page__list-children font-size-19" onClick={()=> setUriToPlay(uri)
        }>
            <div className="page__list-first-column">{songNumber}</div>
            <div className="page__list-three-last-columns">
                {songName}
            </div>
            <div className="page__list-three-last-columns">
                {songAlbum}
            </div>
            <div className="page__list-three-last-columns">{songDuration}</div>
        </div>
    )
}

export default ListChildren
