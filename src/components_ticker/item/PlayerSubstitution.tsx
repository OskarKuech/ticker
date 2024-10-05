import React from "react";
import '../../styles/style.css'

import { useTeamColors } from "../../utils/TeamColorContext";

interface PlayerSubstitutionProps {
    vorname: string;
    nachname: string;
    substitution?: "in" | "out";
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

const PlayerSubstitution: React.FC <PlayerSubstitutionProps> = ({vorname, nachname, substitution, team}) => {
    const imageVorname = replaceUmlauts(vorname);
    const imageNachname = replaceUmlauts(nachname);
    const { homeTeamName, awayTeamName } = useTeamColors();
    const teamName = team === "Home" ? homeTeamName : awayTeamName;
    const underscoredTeamName = teamName.replace(/\s+/g, '_');
    const imagePath = `/image/${underscoredTeamName}/${imageVorname}_${imageNachname}.png`;
    const placeholderPath = '/image/placeholder.png';


    const substitutionEvent = substitution === "in"
        ? "Arrow-right"
        : substitution === "out"
        ? "Arrow-left"
        : "";

    return (
        <div style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "32px",
            alignSelf: "stretch",
        }}>
            <div className="player-image-sub">
                <img src={imagePath} alt={`${vorname} ${nachname}`} />
            </div>
            <div style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "16px"
            }}>
                <div className="icon">    
                    <img 
                    src={`/icon/${substitutionEvent}.svg`} alt=""
                    onError={(e) => (e.currentTarget.src = placeholderPath)} 
                    />
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <p>{vorname}</p>
                    <p>{nachname}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerSubstitution;