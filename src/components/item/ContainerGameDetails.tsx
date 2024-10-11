import React from "react";
import '../../styles/style.css'

interface ContainerGameDetailsProps {
    stadium: string;
    league: string;
    matchday: string;
    result: string;
}

const ContainerGameDetails: React.FC <ContainerGameDetailsProps> = ({stadium, league, matchday, result}) => {
    return (
        <div className="container-game-details">
            <p style={{
                fontSize: "16px"
            }}>{league}, {matchday}</p> {/* League */}

            <p style={{
                fontSize: "48px",
                fontWeight: "600"
            }}>{result}</p> {/* Result */}

            <p style={{
                fontSize: "16px"
            }}>{stadium}</p> {/* Stadium */}
        </div>
    )
}

export default ContainerGameDetails;