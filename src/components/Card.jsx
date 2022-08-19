import "../styles/card.css"

function Card({ identifiant, image, bigTitle, name }) {
    return (
        <div key={identifiant} className="card">
            <img className="card__image" src={image} alt="" />
            <h2 className="card__title">{bigTitle}</h2>
            <p className="card__text">{name}</p>
        </div>
    )
}

export default Card
