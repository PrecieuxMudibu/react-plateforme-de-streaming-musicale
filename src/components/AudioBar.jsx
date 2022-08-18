import "../styles/audioBar.css"
import morijah from "../song/morijah.mp3"

function AudioBar() {
    return (
        <div className="page__audio">
            <audio controls>
                <source src={morijah} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default AudioBar
