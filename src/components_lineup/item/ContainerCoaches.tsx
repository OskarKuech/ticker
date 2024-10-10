import React from "react";
import '../../styles/lineup.css'

interface ContainerCoachesProps {
    nameCoachHome?: string;
    nameCoachAway?: string;
}

const ContainerCoaches: React.FC <ContainerCoachesProps> = ({nameCoachHome, nameCoachAway}) => {
    return (
        <div className="container-coach">
            <div className="name-coach">
                <p style={{alignSelf: "stretch", 
                textAlign: "right"}}>
                {nameCoachHome}</p>
            </div>

            <div className="divider-coach" />

            <div className="name-coach">
                <p style={{alignSelf: "stretch"}}>
                {nameCoachAway}</p>
            </div>
        </div>
    )
}

export default ContainerCoaches;