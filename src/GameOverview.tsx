import React from "react";
import './styles/style.css'
import Game from "./components_game/Game";

const GameOverview = () => {
    return (
        <div className="container-web">
            <Game homeTeam="Union Berlin" awayTeam="Werder Bremen"/>
            <Game homeTeam="Eintracht Frankfurt" awayTeam="VfL Wolfsburg"/>
        </div>
    )
}

export default GameOverview;