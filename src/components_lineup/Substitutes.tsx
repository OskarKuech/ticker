import React from "react";
import '../styles/lineup.css';
import ContainerSquad from "./item/ContainerSquad";

interface Player {
    nummer: number;
    vorname: string;
    nachname: string;
}

interface SubstituesProps {
    homeTeam: Player[];
    awayTeam: Player[];
}

const Substitutes: React.FC<SubstituesProps> = ({ homeTeam, awayTeam }) => {
  return (
    <div className="squad">
      <p style={{ fontWeight: "700", textTransform: "uppercase" }}>Startelf</p>
      <ContainerSquad homeTeam={homeTeam} awayTeam={awayTeam} />
    </div>
  );
}

export default Substitutes; 