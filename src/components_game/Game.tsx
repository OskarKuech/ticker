import React from "react";
import '../styles/game.css'
import Matchup from "./item/Matchup";
import Competition from "./item/Competition";

interface GameProps {
    homeTeam: string;
    awayTeam: string;
}

const Game: React.FC <GameProps> = ({homeTeam, awayTeam}) => {
    return (
        <div className="game">
            <Competition />

            <Matchup homeTeam={homeTeam} awayTeam={awayTeam}/>

            <div className="to-ticker">
                <div className="logo-frame">
                    <img src="/icon/Arrow-right-black.svg" alt="To Ticker" />
                </div>
            </div>
        </div>
    )
}

export default Game;