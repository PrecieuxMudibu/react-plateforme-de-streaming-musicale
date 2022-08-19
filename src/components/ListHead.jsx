import "../styles/list.css"


function ListHead() {
    return (
        <div className="page__list-head font-size-19">
            <div className="page__list-first-column">#</div>
            <div className="page__list-three-last-columns">Titre</div>
            <div className="page__list-three-last-columns">Album</div>
            <div className="page__list-three-last-columns">Durée</div>
        </div>
    )
}

export default ListHead
