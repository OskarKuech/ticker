import React from "react";
import { Link } from "react-router-dom";
import '../styles/game.css';
import Matchup from "./item/Matchup";
import Competition from "./item/Competition";

interface GameProps {
    homeTeam: string;
    awayTeam: string;
    competition: string;
    matchday: string;
    date: string;
    time: string;
    score: string;
}

const formatURL = (str: string) => str.replace(/\s+/g, '_');

const Game: React.FC<GameProps> = ({ homeTeam, awayTeam, competition, matchday, date, time, score }) => {
    const url = `/${formatURL(homeTeam)}_${formatURL(awayTeam)}_${formatURL(date)}`;

    return (
        <Link to={url} className="game">
            <Competition competition={competition} matchday={matchday} date={date} time={time} />
            <Matchup homeTeam={homeTeam} awayTeam={awayTeam} score={score}/>
            <div className="to-ticker">
                <div className="icon-frame">
                    <img src="/icon/Arrow-right-black.svg" alt="To Ticker" />
                </div>
            </div>
        </Link>
    );
}

export default Game;