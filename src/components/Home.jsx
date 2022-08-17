import {useEffect, useState} from 'react';
import Header from "./Header"
import LeftSection from "./LeftSection"
import ListOfCards from "./ListOfCards"
function Home () {
    const [token, setToken] = useState("")
    
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    
    }, [])
    return (

        <div className="page">
                <LeftSection />
                <div className="right-section">
                    <Header />
                    <ListOfCards text="Ecoutées récemment"/>
                    <ListOfCards text="Pour commencer" />
                    {console.log(token)}
                </div>
        </div>
    )
}

export default Home