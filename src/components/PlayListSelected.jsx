import LeftSection from "./LeftSection"
import Header from "./Header"
import Banner from "./Banner"
import ironMan from "../images/iron-man.jpg"
import ListHead from "./ListHead"
import ListChildren from "./ListChildren"

function PlaylistSelected () {
    return (
        <div className="page">
            <LeftSection />
            <div className="right-section">
                <Header />
                <section>
                    <h1 className="page__first-title">Ecoutées récemment</h1>
                    <Banner image={ironMan} bigTitle='Ocean' name='Précieux Mudibu' />
                    <ListHead />
                    <ListChildren songNumber='1' songName="Je veux n'être qu'à toi" songAlbum='Exo' songDuration='04:00'/>

                    
                </section>
            </div>
        </div>

    )
}

export default PlaylistSelected
