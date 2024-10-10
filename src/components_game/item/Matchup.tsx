import React from "react";
import '../../styles/game.css'

interface MatchupProps {
    homeTeam: string;
    awayTeam: string;
}

const Matchup: React.FC <MatchupProps> = ({homeTeam, awayTeam}) => {
    const underscoredTeamHome = homeTeam.replace(/\s+/g, '_');
    const imagePathHome = `/image/club_logo/${underscoredTeamHome}.svg`;
    const underscoredTeamAway = awayTeam.replace(/\s+/g, '_');
    const imagePathAway = `/image/club_logo/${underscoredTeamAway}.svg`;

    return (
        <div className="game-matchup">
            <div className="game-club" style={{justifyContent: "flex-end"}}>
                <p>{homeTeam}</p>
                <div className="logo-frame">
                <img src={imagePathHome} alt={`${homeTeam}`} />
                </div>
            </div>

            <p>-:-</p>

            <div className="game-club">
                <div className="logo-frame">
                <img src={imagePathAway} alt={`${awayTeam}`} />
                </div>
                <p>{awayTeam}</p>
            </div>
        </div>
    )
}

export default Matchup;