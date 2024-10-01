import React from "react";
import '../../styles/style.css'
import PlayerSubstitution from "./PlayerSubstitution";

interface ContainerSubstitutionProps {
    player_in_vorname: string;
    player_in_nachname: string; 
    player_out_vorname: string; 
    player_out_nachname: string;
    headline: string;
    text?: string;
}

const ContainerSubstitution: React.FC <ContainerSubstitutionProps> = ({player_in_vorname, player_in_nachname, player_out_vorname, player_out_nachname, headline, text}) => {
    return(
        <div className="container-substitution">
            <p className="text-event">{headline}</p>
            <p>{text}</p>
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "32px",
                alignSelf: "stretch"
            }}>
                <PlayerSubstitution vorname={player_in_vorname} nachname={player_in_nachname} substitution="in"/>
                <PlayerSubstitution vorname={player_out_vorname} nachname={player_out_nachname} substitution="out"/>
            </div>
        </div>
    )
}

export default ContainerSubstitution;