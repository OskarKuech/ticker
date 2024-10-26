import React from "react";
import './styles/style.css'
import Game from "./components_game/Game";

const GameOverview = () => {
    return (
        <div className="container-web">
            <Game homeTeam="England" awayTeam="Deutschland" score="3:4"
            competition="International" matchday="5. Spieltag" date="25.10.2024" time="20:30" />
            <Game homeTeam="VfL Wolfsburg" awayTeam="FC Bayern" score="2:0"
            competition="Frauen Bundesliga" matchday="7. Spieltag" date="12.10.2024" time="17:45" />
            <Game homeTeam="FC Bayern" awayTeam="Arsenal" score="5:2"
            competition="Frauen Champions League" matchday="1. Spieltag" date="09.10.2024" time="18:30" />
            <Game homeTeam="SC Sand" awayTeam="Union Berlin" score="1:2"
            competition="2. Frauen Bundesliga" matchday="6. Spieltag" date="06.10.2024" time="14:00" />
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
// International


export default GameOverview;