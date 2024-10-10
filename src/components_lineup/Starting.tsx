import React from "react";
import '../styles/lineup.css';
import ContainerSquad from "./item/ContainerSquad";

interface Player {
    nummer: number;
    vorname: string;
    nachname: string;
}

interface StartingProps {
    homeTeam: Player[];
    awayTeam: Player[];
}

const Starting: React.FC<StartingProps> = ({ homeTeam, awayTeam }) => {
  return (
    <div className="squad">
      <p style={{ fontWeight: "700", textTransform: "uppercase" }}>Startelf</p>
      <ContainerSquad homeTeam={homeTeam} awayTeam={awayTeam} />
    </div>
  );
}

export default Starting; 