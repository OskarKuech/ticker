import React from "react";
import '../../styles/style.css';
import { useTeamColors } from "../../utils/TeamColorContext";

interface TimeEventProps {
    minute?: number;
    icon?: string;
    team?: "Home" | "Away" | "White" | "";
    extra_time?: number;
}

const TimeEvent: React.FC<TimeEventProps> = ({ minute, icon, team, extra_time = 0 }) => {
    const { homeTeamColor, awayTeamColor } = useTeamColors();
    const minuteColor = team === "Home" 
        ? homeTeamColor 
        : team === "Away" 
        ? awayTeamColor 
        : "transparent";

    return (
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <div className="icon">
                <img src={`/icon/${icon}.svg`} alt="" />
            </div>
            <div style={{ display: "flex", width: "80px", justifyContent: "flex-end" }}>
                {minute !== undefined && (
                    <>
                        <p style={{ color: minuteColor }} className="text-event">{minute}</p>
                        <p style={{ color: minuteColor }} className="text-event">'</p>
                    </>
                )}
                {extra_time > 0 && (
                    <>
                        <p style={{ color: minuteColor }} className="text-mini">+</p>
                        <p style={{ color: minuteColor }} className="text-mini">{extra_time}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default TimeEvent;