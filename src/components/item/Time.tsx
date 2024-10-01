import React from "react";
import '../../styles/style.css';

interface TimeProps {
    minute?: number;
    icon?: string;
    team?: "Home" | "Away" | "White" | "";
    extra_time?: number;
}

const Time: React.FC<TimeProps> = ({ minute, icon, team, extra_time = 0 }) => {
    const minuteColor = team === 
        "Home" ? "#C40812"
        : team === 
        "Away" ? "#41A639" 
        : team ===
        "White" ? "#FFFFFF"
        : "#000000";

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

export default Time;