import Header from "./Header"
import Card from "./Card"

import "../styles/rightSection.css"

function RightSection () {
    return (
        <div className="right-section">
                <Header />
                <section>
                    <h1 className="page__first-title">Populaire</h1>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                </section>

                <section>
                    <h1 className="page__first-title">Chansons</h1>
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
                </section>
            </div>        
    )
}

export default RightSection