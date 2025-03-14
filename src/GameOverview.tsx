import React, { useState } from "react";
import './styles/style.css'
import Game from "./components_game/Game";
import NavigationGameOverview from "./components/NavigationGameOverview";

const GameOverview = () => {
    const [activeTab, setActiveTab] = useState("Neutral");

    return (
        <div className="container-web">
            <NavigationGameOverview activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "Neutral" && (
                <>
                    <Game homeTeam="Schweiz" awayTeam="Deutschland" score="0:6"
                    competition="International" matchday="6. Spieltag" date="29.11.2024" time="20:00" />
                    <Game homeTeam="VfL Wolfsburg" awayTeam="Galatasaray Istanbul" score="5:0"
                    competition="Frauen Champions League" matchday="4. Spieltag" date="20.11.2024" time="18:45" />
                    <Game homeTeam="Galatasaray Istanbul" awayTeam="VfL Wolfsburg" score="0:5"
                    competition="Frauen Champions League" matchday="3. Spieltag" date="13.11.2024" time="18:45" />
                    {/* <Game homeTeam="Deutschland" awayTeam="Australien" score="1:2"
                    competition="International" matchday="5. Spieltag" date="28.10.2024" time="18:10" /> */}
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
                </>
            )}

            {activeTab === "Union-Style" && (
                <>
                    <Game homeTeam="Bayer 04 Leverkusen" awayTeam="Union Berlin" score="2:1"
                    competition="Testspiel" matchday="06. Spieltag" date="18.01.2025" time="14:00" />
                    <Game homeTeam="Union Berlin" awayTeam="VfL Bochum" score="1:1"
                    competition="2. Frauen Bundesliga" matchday="12. Spieltag" date="09.12.2024" time="14:00" />
                </>
            )}
        </div>
    );
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
