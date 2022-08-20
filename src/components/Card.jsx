import "../styles/card.css"
import {applicationContext} from '../App'
import {useContext} from 'react'


function Card({ identifiant, image, bigTitle, name, uri }) {
    const {uriToPlay, setUriToPlay} = useContext(applicationContext)
    const uriSong=uri
    // console.log(uriSong)
    // function handleClick () {
    //     setUriToPlay(uriSong)
    // }
    return (
        <div key={identifiant} className="card" onClick={()=> setUriToPlay(uriSong)
        } >
            <img className="card__image" src={image} alt="" />
            <h2 className="card__title">{bigTitle}</h2>
            <p className="card__text">{name}</p>
            {console.log("URI to play", uriToPlay)}
        </div>
    )
}

export default Card
