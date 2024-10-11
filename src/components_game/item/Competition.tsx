import React from "react";
import '../../styles/game.css'

interface CompetitionProps {
    competition: string;
    matchday: string;
    date: string;
    time: string;
}

const Competition: React.FC <CompetitionProps> = ({competition, matchday, date, time}) => {
    const underscoredCompetition = competition.replace(/\s+/g, '_');
    const imagePath = `/image/competition_logo/${underscoredCompetition}.svg`;

    return (
        <div className="competition">
            <div className="logo-frame">
                <img src={imagePath} alt="" />
            </div>
            <div className="game-date">
                <p>{matchday}</p>
                <p>{date}, {time}</p>
            </div>
        </div>
    )
}

export default Competition