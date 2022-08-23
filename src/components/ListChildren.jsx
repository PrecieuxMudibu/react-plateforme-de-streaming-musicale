import { applicationContext } from "../App"
import { useContext } from "react"
import "../styles/list.css"
import ironMan from "../images/iron-man.jpg"

function ListChildren({
    songId,
    songNumber,
    songName,
    songAlbum,
    songImage,
    songDuration,
    songUri,
}) {
    const { uriToPlay, setUriToPlay } = useContext(applicationContext)
    const uri = songUri

    return (
        <div
            key={songId}
            className="page__list-children font-size-19"
            onClick={() => setUriToPlay(uri)}
        >
            <div className="page__list-first-column">{songNumber}</div>
            <div className="page__list-second-column flex">
                <div className="page__imageMusic">
                    <img src={songImage} alt="" width="50" height="50" />
                </div>
                <div>{songName}</div>
            </div>
            <div className="page__list-third-column">{songAlbum}</div>
            <div className="page__list-last-column">{songDuration}</div>
        </div>
    )
}

export default ListChildren
