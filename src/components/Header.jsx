import Profile from './Profile'
import {BsSearch} from 'react-icons/bs'
import "../styles/header.css"
import { useContext } from 'react'
import { applicationContext } from '../App'
import SpotifyWebApi from "spotify-web-api-js";


function Header () {
    const {inputValue, updateInputValue} = useContext(applicationContext)    

    return (
        <header>
            <label className="page__search">
                <span className="page__search-icon"><BsSearch/></span>
                <input onChange={(e)=>updateInputValue(e.target.value)} className="page__input" type="text" placeholder="Que voulez-vous écouter"/>
            </label>
                {console.log(inputValue)}
            <Profile />
            
        </header>
    )
}

export default Header