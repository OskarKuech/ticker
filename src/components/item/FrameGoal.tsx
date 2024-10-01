import React from "react";
import Time from "./Time";
import ContainerGoal from "./ContainerGoal";
import { useTeamColors } from '../../utils/TeamColorContext';

interface FrameGoalProps {
  minute: number;
  team: "Home" | "Away";
  score: string;
  vorname: string;
  nachname: string;
  text: string;
  extra_time?: number;
}

const FrameGoal: React.FC<FrameGoalProps> = ({
  minute, team, score, vorname, nachname, text, extra_time
}) => {
  const { homeTeamColor, awayTeamColor, homeTeamName, awayTeamName } = useTeamColors();
  const backgroundColor = team === "Home" ? homeTeamColor : awayTeamColor;
  const teamName = team === "Home" ? homeTeamName : awayTeamName;
  const headline = `Tor für ${teamName}`;

  return (
    <div style={{
      display: "flex",
      width: "1080px",
      padding: "16px 16px 0px 16px",
      alignItems: "flex-start",
      gap: "32px",
      boxSizing: 'border-box',
      borderRadius: '4px',
      borderLeft: `8px solid transparent`,
      backgroundColor: backgroundColor,
    }}>
      <Time minute={minute} extra_time={extra_time} icon="BallWhite" team="White"/>
      <ContainerGoal headline={headline} score={score} vorname={vorname} nachname={nachname} text={text} team={team}/>
    </div>
  )
}

export default FrameGoal;