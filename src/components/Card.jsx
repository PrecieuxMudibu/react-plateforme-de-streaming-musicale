import "../styles/card.css"

function Card({ identifiant, image, title, name }) {
    return (
        <div id={identifiant} className="card">
            <img className="card__image" src={image} alt="" />
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{name}</p>
        </div>
    )
}

export default Card
