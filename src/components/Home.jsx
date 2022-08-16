import Header from "./Header"
import LeftSection from "./LeftSection"
import ListOfCards from "./ListOfCards"
function Home () {
    return (

        <div className="page">
                <LeftSection />
                <div className="right-section">
                    <Header />
                    <ListOfCards text="Ecoutées récemment"/>
                    <ListOfCards text="Pour commencer" />
                </div>
        </div>
    )
}

export default Home