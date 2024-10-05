import React from "react";
import ContainerSubstitution from "./ContainerSubstitution";
import Time from "./Time";
import { useTeamColors } from "../../utils/TeamColorContext";

interface FrameSubstitutionProps {
    player_in_vorname: string;
    player_in_nachname: string;
    player_out_vorname: string;
    player_out_nachname: string;
    minute: number;
    team: "Home" | "Away" | "";
    extra_time?: number;
    text?: string;
}

const FrameSubstitution: React.FC<FrameSubstitutionProps> = ({
    player_in_vorname, player_in_nachname, player_out_vorname, player_out_nachname, minute, team, extra_time, text
}) => {
    const { homeTeamName, awayTeamName } = useTeamColors();
    const teamName = team === "Home" ? homeTeamName : awayTeamName;
    const headline = `Auswechslung (${teamName})`;

    return (
        <div style={{
            display: "flex",
            width: "1080px",
            padding: "16px 16px 0px 16px",
            alignItems: "flex-start",
            gap: "32px",
            boxSizing: 'border-box',
            borderRadius: '4px',
            borderLeft: '8px solid transparent',
        }}>
            <Time minute={minute} extra_time={extra_time} icon="ArrowSubstitution"/>
            <ContainerSubstitution
                headline={headline}
                text={text}
                player_in_vorname={player_in_vorname}
                player_in_nachname={player_in_nachname}
                player_out_vorname={player_out_vorname}
                player_out_nachname={player_out_nachname}
                team={team}
            />
        </div>
    )
}

export default FrameSubstitution;