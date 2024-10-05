import React from "react";
import Text from "./Text";
import Time from "./Time";

interface FrameProps {
    minute?: number;
    icon?: string;
    headline?: string;
    text?: string;
    team?: "Home" | "Away" | "";
    extra_time?: number;
}

const Frame: React.FC <FrameProps> = ({minute, icon, headline, text, team, extra_time}) => {
    const borderColor = team === "Home" 
        ? "#C40812" 
        : team === "Away" 
        ? "#41A639" 
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
            <Time minute={minute} extra_time={extra_time} icon={icon} team={team}/>
            <Text headline={headline} text={text}/>
        </div>
    )
}

export default Frame;