import React from "react";
import '../../styles/style.css'
import ContainerClub from "./ContainerClub";
import ContainerGameDetails from "./ContainerGameDetails";

import { useTeamColors } from '../../utils/TeamColorContext';

const FrameGameHeader = () => {
    const { homeTeamName, awayTeamName, stadium, league, matchday, result } = useTeamColors();

    return (
        <div className="game-header" style={{background: "#F8F8F8"}}>
            <ContainerClub teamName={homeTeamName}/>
            <ContainerGameDetails stadium={stadium} league={league} matchday={matchday} result={result}/>
            <ContainerClub teamName={awayTeamName}/>
        </div>
    )
}

export default FrameGameHeader;