import React from "react";
import '../styles/lineup.css'
import ContainerReferee from "./item/ContainerReferee";

interface RefereeProps {
    nameReferee: string;
}

const Referee: React.FC <RefereeProps> = ({nameReferee}) => {
    return (
        <div className="referee">
            <p style={{
                fontSize: "20px",
                fontWeight: "700",
                textTransform: "uppercase"
            }}>Schiedsrichter</p>
            <ContainerReferee nameReferee={nameReferee} />
        </div>
    )
}

export default Referee;