import React from "react";
import '../../styles/lineup.css'

interface SquadPlayerProps {
    nummer: number;
    vorname: string;
    nachname: string;
}

const SquadPlayer: React.FC <SquadPlayerProps> = ({nummer, vorname, nachname}) => {
    return (
        <div className="player">
            <p style={{
                width: "32px",
                flexShrink: "0"
            }}>{nummer}</p>
            <div className="player-name">
                <p>{vorname}</p>
                <p>{nachname}</p>
            </div>
        </div>
    )
}

export default SquadPlayer;