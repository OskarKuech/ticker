import React from "react";
import '../../styles/lineup.css'

interface ContainerRefereeProps {
    nameReferee: string;
}

const ContainerReferee: React.FC <ContainerRefereeProps> = ({nameReferee}) => {
    return (
        <div className="container-coach">
            <p style={{fontSize: "20px"}}>
            {nameReferee}</p>
        </div>
    )
}

export default ContainerReferee;