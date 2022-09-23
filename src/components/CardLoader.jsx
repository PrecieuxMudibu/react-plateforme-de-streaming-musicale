import "../styles/card.css";
import { applicationContext } from "../App";
import { useContext } from "react";
import { TbPlayerPlay } from "react-icons/tb";

function CardLoader() {
    return (
        <>
            <div className="card">
                <div className="container-loader">
                    <div className="is-loading"></div>
                </div>
            </div>
        </>
    );
}

export default CardLoader;
