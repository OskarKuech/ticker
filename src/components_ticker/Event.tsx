import React from "react";
import FrameEvent from "./item/FrameEvent";

interface EventProps {
    minute?: number;
    headline: string;
    text: string;
    team?: "Home" | "Away" | "";
    extra_time?: number;
}

const Event: React.FC<EventProps> = ({minute, headline, text, team, extra_time}) => {
    return (
        <div style={{background: "#F8F8F8"}}>
            <FrameEvent minute={minute} extra_time={extra_time} headline={headline} text={text} team={team} />
        </div>
    )
}

export default Event;