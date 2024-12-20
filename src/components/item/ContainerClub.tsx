import React from "react";
import '../../styles/style.css'

interface ContainerClubProps {
    teamName: string;
}

const ContainerClub: React.FC <ContainerClubProps> = ({teamName}) => {
    const underscoredTeamName = teamName.replace(/\s+/g, '_');
    const imagePath = `/image/club_logo/${underscoredTeamName}.svg`;
    const placeholderPath = '/image/placeholder_club.png';

    return (
        <div className="container-club">
            <div className="logo-frame">
                <img 
                src={imagePath} alt=""
                onError={(e) => (e.currentTarget.src = placeholderPath)} />
            </div>
            <p style={{
               maxWidth: "320px",
               fontSize: "24px",
               textAlign: "center"
            }}>{teamName}</p>
        </div>
    )
}

export default ContainerClub;