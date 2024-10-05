import React from "react";
import Text from "./Text";
import TimeEvent from "./TimeEvent";
import { useTeamColors } from "../../utils/TeamColorContext";

interface FrameEventProps {
    minute?: number;
    icon?: string;
    headline?: string;
    text?: string;
    team?: "Home" | "Away" | "";
    extra_time?: number;
}

const FrameEvent: React.FC <FrameEventProps> = ({minute, icon, headline, text, team, extra_time}) => {
    const { homeTeamColor, awayTeamColor } = useTeamColors();
    const borderColor = team === "Home" 
        ? homeTeamColor 
        : team === "Away" 
        ? awayTeamColor 
        : "transparent";

    return (
        <div style={{
            display: 'flex',
            width: '1080px',
            padding: '16px',
            alignItems: 'flex-start',
            gap: '32px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            borderLeft: `8px solid ${borderColor}`,
        }}>
            <TimeEvent minute={minute} extra_time={extra_time} icon={icon} team={team}/>
            <Text headline={headline} text={text}/>
        </div>
    )
}

export default FrameEvent;