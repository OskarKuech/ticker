import React from "react";
import '../../styles/style.css'

import { useTeamColors } from "../../utils/TeamColorContext";

interface ContainerGoalProps {
    headline: string;
    score: string;
    vorname: string;
    nachname: string;
    text: string;
    team: "Home" | "Away" | "";
}

const replaceUmlauts = (name: string) => {
    return name
        .replace(/Ä/g, 'Ae')
        .replace(/Ö/g, 'Oe')
        .replace(/Ü/g, 'Ue')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss');
};

const ContainerGoal: React.FC <ContainerGoalProps> = ({headline, score, vorname, nachname, text, team}) => {
    const imageVorname = replaceUmlauts(vorname);
    const imageNachname = replaceUmlauts(nachname);
    const { homeTeamName, awayTeamName } = useTeamColors();
    const teamName = team === "Home" ? homeTeamName : awayTeamName;
    const underscoredTeamName = teamName.replace(/\s+/g, '_');
    const imagePath = `/image/${underscoredTeamName}/${imageVorname}_${imageNachname}.png`;
    const placeholderPath = '/image/placeholder.png';
    
    return (
        <div className="container-goal">
            <div className="headline-row-goal">
                <div className="event-goal">
                    <p className="text-event">{headline}</p>
                </div>
                <div className="score-goal">
                    <p className="text-event">{score}</p>
                </div>
            </div>

            <div style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "16px"
            }}>
                <div className="text-goal">
                    <div className="player-name-goal">
                        <p>{vorname}</p>
                        <p className="player-nachname">{nachname}</p>
                    </div>
                    <p>{text}</p>
                </div>
                <div className="player-image">
                    <img 
                    src={imagePath} alt={`${vorname} ${nachname}`} 
                    onError={(e) => (e.currentTarget.src = placeholderPath)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContainerGoal