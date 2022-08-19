import "../styles/banner.css"

function Banner({ identifiant, image, bigTitle, name }) {
    return (
        <div key={identifiant} className="banner">
            <div >
                <img className="banner__image" src={image} alt="" />
            </div>
            <div>
                <h2 className="banner__title">{bigTitle}</h2>
                <p className="banner__text">{name}</p>
            </div>
        </div>
    )
}

export default Banner
