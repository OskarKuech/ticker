import React from "react";
import '../../styles/lineup.css';
import SquadPlayer from "./SquadPlayer";

interface Player {
    nummer: number;
    vorname: string;
    nachname: string;
}

interface ContainerSquadProps {
    homeTeam: Player[];
    awayTeam: Player[];
}

const ContainerSquad: React.FC<ContainerSquadProps> = ({ homeTeam, awayTeam }) => {
  const renderTeam = (team: Player[]) => (
    <div className="container-team">
      {team.map((player, index) => (
        <React.Fragment key={index}>
          <SquadPlayer 
            nummer={player.nummer} 
            vorname={player.vorname} 
            nachname={player.nachname} 
          />
          {index < team.length - 1 && <div className="player-divider" />}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="container-squad">
      {/* HOME TEAM */}
      {renderTeam(homeTeam)}

      <div className="divider-squad" />

      {/* AWAY TEAM */}
      {renderTeam(awayTeam)}
    </div>
  );
}

export default ContainerSquad;