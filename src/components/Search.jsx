import React from "react"
import LeftSection from "./LeftSection"
import ListOfSongs from "./ListOfSongs"
import Header from "./Header"
import AudioBar from "./AudioBar"

import "../styles/search.css"
import "../styles/page.css"

function Search () {
    return (
        <>
            <div className="page">
                <LeftSection />
                <div className="right-section">
                    <Header />
                </div>     
            </div>
            <AudioBar />       
        </>
    )
}
export default Search