import React from "react";
import '../styles/lineup.css'
import ContainerCoaches from "./item/ContainerCoaches";

interface CoachesProps {
    nameCoachHome: string;
    nameCoachAway: string;
}

const Coaches: React.FC <CoachesProps> = ({nameCoachHome, nameCoachAway}) => {
    return (
        <div className="coaches">
            <p style={{
                fontWeight: "700",
                textTransform: "uppercase"
            }}>Trainer</p>
            <ContainerCoaches nameCoachHome={nameCoachHome} nameCoachAway={nameCoachAway}/>
        </div>
    )
}

export default Coaches;