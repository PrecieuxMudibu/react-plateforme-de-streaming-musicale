import "../styles/card.css"
import { applicationContext } from "../App"
import { useContext } from "react"
import {TbPlayerPlay} from 'react-icons/tb'

function Card({ identifiant, image, bigTitle, name, uri }) {
    const { uriToPlay, setUriToPlay } = useContext(applicationContext)
    const uriSong = uri
    // console.log(uriSong)
    // function handleClick () {
    //     setUriToPlay(uriSong)
    // }
    return (
        <div
            key={identifiant}
            className="card"
            onClick={() => setUriToPlay(uriSong)}
        >
            <img className="card__image" src={image} alt="" />
            <div className="card__group-text"><h2 className="card__title">{bigTitle}</h2>
            <p className="card__text">{name}</p>
            </div>
            <div className='card__icone-group'><span className='card__icone-player'><TbPlayerPlay /></span></div>
        </div>
    )
}

export default Card
