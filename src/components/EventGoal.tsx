import React from "react";
import FrameGoal from "./item/FrameGoal";

interface EventGoalProps {
  minute: number;
  team: "Home" | "Away";
  score: string;
  vorname: string;
  nachname: string;
  text: string;
  extra_time?: number;
}

const EventGoal: React.FC<EventGoalProps> = ({
  minute, team, score, vorname, nachname, text, extra_time}) => {
  return (
    <div className="eventgoal-container">
      <FrameGoal 
        minute={minute} 
        extra_time={extra_time} 
        team={team} 
        score={score} 
        vorname={vorname} 
        nachname={nachname} 
        text={text}
      />
    </div>
  );
}

export default EventGoal;