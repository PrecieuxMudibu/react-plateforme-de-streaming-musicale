import "../styles/list.css"

function List () {
    return (
        <table className="page__list">
                        <tr className="page__list-head">
                            <td>#</td>
                            <td>Titre</td>
                            <td>Album</td>
                            <td>Durée</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Morijah - Mon défenseur</td>
                            <td>Morijah - Mon défenseur</td>
                            <td>04:00</td>
                        </tr>
                    </table>
    )
}

export default List