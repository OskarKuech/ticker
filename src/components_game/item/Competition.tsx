import React from "react";
import '../../styles/game.css'

const Competition = () => {
    return (
        <div className="competition">
            <div className="logo-frame">
                <img src="/image/competition_logo/Bundesliga.svg" alt="" />
            </div>
            <div className="game-date">
                <p>1. Spieltag</p>
                <p>Sa., 03.05.2025, 15:30</p>
            </div>
        </div>
    )
}

export default Competition