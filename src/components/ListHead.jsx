import "../styles/list.css"


function ListHead() {
    return (
        <div className="page__list-head font-size-19">
            <div className="page__list-first-column">#</div>
            <div className="page__list-second-column">Titre</div>
            <div className="page__list-third-column">Album</div>
            <div className="page__list-last-column">Durée</div>
        </div>
    )
}

export default ListHead
