import React from "react";
import '../../styles/style.css'

interface ContainerCardProps {
    vorname: string;
    nachname: string;
    text?: string;
    card_type: string;
}

const replaceUmlauts = (name: string) => {
    return name
        .replace(/Ä/g, 'Ae')
        .replace(/Ö/g, 'Oe')
        .replace(/Ü/g, 'Ue')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss');
};

const replaceCard = (text: string) => {
    return text
        .replace(/Yellow-RedCard/g, 'Gelb-Rote')
        .replace(/RedCard/g, 'Rote')
        .replace(/YellowCard/g, 'Gelbe ')
};

const ContainerCard: React.FC <ContainerCardProps> = ({vorname, nachname, text, card_type}) => {
    const imageVorname = replaceUmlauts(vorname);
    const imageNachname = replaceUmlauts(nachname);
    const imagePath = `/image/${imageVorname}_${imageNachname}.png`;

    const replacedCardType = replaceCard(card_type);

    return(
        <div className="container-card">
            <p className="text-event"> {replacedCardType} Karte für {vorname} {nachname}</p>
            <div style={{
                display: "flex",
                maxWidth: "890px",
                alignItems: "flex-start",
                gap: "16px",
                alignSelf: "stretch",
            }}>
                <div className="player-image-sub">
                    <img src={imagePath} alt={`${vorname} ${nachname}`} />
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ContainerCard;