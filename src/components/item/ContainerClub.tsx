import React from "react";
import '../../styles/style.css'

interface ContainerClubProps {
    teamName: string;
}

const ContainerClub: React.FC <ContainerClubProps> = ({teamName}) => {
    const underscoredTeamName = teamName.replace(/\s+/g, '_');
    const imagePath = `/image/club_logo/${underscoredTeamName}.svg`;

    return (
        <div className="container-club">
            <div className="logo-frame">
                <img src={imagePath} alt=""/>
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