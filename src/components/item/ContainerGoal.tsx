import React from "react";
import '../../styles/style.css'

interface ContainerGoalProps {
    headline: string;
    score: string;
    vorname: string;
    nachname: string;
    text: string;
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

const ContainerGoal: React.FC <ContainerGoalProps> = ({headline, score, vorname, nachname, text}) => {
    const imageVorname = replaceUmlauts(vorname);
    const imageNachname = replaceUmlauts(nachname);
    const imagePath = `/image/${imageVorname}_${imageNachname}.png`;
    
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
                    <img src={imagePath} alt={`${vorname} ${nachname}`} />
                </div>
            </div>
        </div>
    )
}

export default ContainerGoal