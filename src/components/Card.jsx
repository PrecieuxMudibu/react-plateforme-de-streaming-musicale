import ironMan from "../images/iron-man.jpg"
import "../styles/card.css"

function Card () {
    return (
        <div className="card">
            <img className="card__image" src={ironMan} alt="" />
            <h2 className="card__title">Weekly Motivation</h2>
            <p className="card__text">Ben Ina Scott</p>
        </div>
    )
}

export default Card