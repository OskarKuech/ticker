import React from "react";
import FrameCard from "./item/FrameCard";

interface EventCardProps {
    vorname: string;
    nachname: string;
    minute: number;
    extra_time?: number;
    text?: string;
    card_type: string;
}

const replaceCard = (text: string) => {
    return text
        .replace(/Gelb-Rote/g, 'Yellow-RedCard')
        .replace(/Gelb-Rot/g, 'Yellow-RedCard')
        .replace(/Rote/g, 'RedCard')
        .replace(/Rot/g, 'RedCard')
        .replace(/Gelbe/g, 'YellowCard')
        .replace(/Gelb/g, 'YellowCard')
};

const EventCard: React.FC <EventCardProps> = ({vorname, nachname, minute, extra_time, text, card_type}) => {

    const replacedCardType = replaceCard(card_type);

    return (
        <div>
            <FrameCard minute={minute} extra_time={extra_time} text={text} vorname={vorname} nachname={nachname} card_type={replacedCardType} />
        </div>
    )
}

export default EventCard;