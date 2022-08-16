import React from "react"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import AudioBar from "./AudioBar"

import "../styles/search.css"
import "../styles/page.css"

function Search () {
    return (
        <>
            <div className="page">
                <LeftSection />
                <RightSection />
            </div>
            <AudioBar />       
        </>
    )
}
export default Search