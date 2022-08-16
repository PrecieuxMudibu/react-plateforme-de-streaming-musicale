import List from "./List"
import "../styles/page.css"

function ListOfSongs ({text}) {
    return (
        <section>
                    <h1 className="page__first-title">{text}</h1>
                    <List />
                </section>
    )
}
export default ListOfSongs