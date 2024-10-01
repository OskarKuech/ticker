import React from "react";
import '../../styles/style.css'

interface PlayerSubstitutionProps {
    vorname: string;
    nachname: string;
    substitution?: "in" | "out";
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

const PlayerSubstitution: React.FC <PlayerSubstitutionProps> = ({vorname, nachname, substitution}) => {
    const imageVorname = replaceUmlauts(vorname);
    const imageNachname = replaceUmlauts(nachname);
    const imagePath = `/image/${imageVorname}_${imageNachname}.png`;

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
                    <img src={`/icon/${substitutionEvent}.svg`} alt=""/>
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