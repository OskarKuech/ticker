import React from "react";
import '../../styles/game.css'

interface MatchupProps {
    homeTeam: string;
    awayTeam: string;
    score: string;
}

const Matchup: React.FC <MatchupProps> = ({homeTeam, awayTeam, score}) => {
    const underscoredTeamHome = homeTeam.replace(/\s+/g, '_');
    const imagePathHome = `/image/club_logo/${underscoredTeamHome}.svg`;
    const underscoredTeamAway = awayTeam.replace(/\s+/g, '_');
    const imagePathAway = `/image/club_logo/${underscoredTeamAway}.svg`;
    const placeholderPath = '/image/placeholder_club.png';

    return (
        <div className="game-matchup">
            <div className="game-club" style={{justifyContent: "flex-end"}}>
                <p>{homeTeam}</p>
                <div className="club-logo-frame">
                <img src={imagePathHome} alt={`${homeTeam}`} 
                onError={(e) => (e.currentTarget.src = placeholderPath)} />
                </div>
            </div>

            <p style={{fontWeight: "700"}}>{score}</p>

            <div className="game-club">
                <div className="club-logo-frame">
                <img src={imagePathAway} alt={`${awayTeam}`} 
                onError={(e) => (e.currentTarget.src = placeholderPath)} />
                </div>
                <p>{awayTeam}</p>
            </div>
        </div>
    )
}

export default Matchup;