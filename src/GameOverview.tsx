import React from "react";
import './styles/style.css'
import Game from "./components_game/Game";

const GameOverview = () => {
    return (
        <div className="container-web">
            <Game homeTeam="Eintracht Frankfurt" awayTeam="VfL Wolfsburg" score="3:0"
            competition="Frauen Bundesliga" matchday="4. Spieltag" date="29.09.2024" time="17:00"/>
            <Game homeTeam="Borussia Dortmund" awayTeam="VfL Bochum" score="4:2"
            competition="Bundesliga" matchday="5. Spieltag" date="27.09.2024" time="20:30" />
        </div>
    )
}

// COMPETITIONS:
// Bundesliga
// 2. Bundesliga
// DFB_Pokal
// Conference League
// Europa League
// Champions League
// Frauen Bundesliga
// Frauen 2. Bundesliga
// Frauen DFB-Pokal
// Frauen Champions League


export default GameOverview;