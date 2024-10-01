import React from "react";
import Time from "./Time";
import ContainerCard from "./ContainerCard";

interface FrameCardProps {
    vorname: string;
    nachname: string;
    minute: number;
    extra_time?: number;
    text?: string;
    card_type: string;
}

const FrameCard: React.FC <FrameCardProps> = ({vorname, nachname, minute, extra_time, text, card_type}) => {

    return (
        <div style={{
            display: "flex",
            width: "1080px",
            padding: "16px 16px 0px 16px",
            alignItems: "flex-start",
            gap: "32px",
            boxSizing: 'border-box',
            borderRadius: '4px',
        }}>
            <Time minute={minute} extra_time={extra_time} icon={card_type}/>
            <ContainerCard vorname={vorname} nachname={nachname} text={text} card_type={card_type}/>
        </div>
    )
}

export default FrameCard;