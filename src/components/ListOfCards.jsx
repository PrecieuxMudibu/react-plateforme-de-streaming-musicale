import "../styles/page.css"
import Card from "./Card"
function ListOfCards ({text}) {
    return (

    <section>
                    <h1 className="page__first-title">{text}</h1>
                    <Card />
                    <Card />
                    <Card />
                    <Card />                   
    </section>
    )
}
export default ListOfCards