import React from "react";
import FrameSubstitution from "./item/FrameSubstitution";

interface EventSubstitutionProps {
    player_in_vorname: string;
    player_in_nachname: string;
    player_out_vorname: string;
    player_out_nachname: string;
    minute: number;
    team: "Home" | "Away" | "";
    extra_time?: number;
    text?: string;
}

const EventSubstitution: React.FC <EventSubstitutionProps> = ({player_in_vorname, player_in_nachname, player_out_vorname, player_out_nachname, minute, team, extra_time, text}) => {
    return (
        <div>
            <FrameSubstitution minute={minute} extra_time= {extra_time}team={team} text={text}
            player_in_vorname={player_in_vorname} player_in_nachname={player_in_nachname} 
            player_out_vorname={player_out_vorname} player_out_nachname={player_out_nachname}/>
        </div>
    )
}

export default EventSubstitution;