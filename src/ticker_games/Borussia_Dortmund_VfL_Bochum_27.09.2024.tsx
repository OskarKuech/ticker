import React, { useState } from "react";
import EventGameHeader from "../components/EventGameHeader";
import Navigation from "../components/Navigation";
import Referee from "../components_lineup/Referee";
import Coaches from "../components_lineup/Coaches";
import Substitutes from "../components_lineup/Substitutes";
import Starting from "../components_lineup/Starting";
import Comment from "../components_ticker/Comment";
import EventGoal from "../components_ticker/EventGoal";
import Event from "../components_ticker/Event";

import teamColors from '../utils/teamColors.json';
import { TeamColorProvider } from '../utils/TeamColorContext';

const BorussiaDortmundVfLBochum271004 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Borussia Dortmund';
    const awayTeam = 'VfL Bochum';
    const stadium = 'Signal Iduna Park';
    const league = 'Bundesliga';
    const matchday = '5. Spieltag';
    const result = '4:2'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "", nachname: "Kobel"},
      { nummer: 2, vorname: "Yan", nachname: "Couto"},
      { nummer: 3, vorname: "Waldemar", nachname: "Anton"},
      { nummer: 4, vorname: "Nico", nachname: "Schlotterbeck"},
      { nummer: 9, vorname: "Serhou", nachname: "Guirassy"},
      { nummer: 10, vorname: "Julian", nachname: "Brandt"},
      { nummer: 13, vorname: "Pascal", nachname: "Groß"},
      { nummer: 23, vorname: "Emre", nachname: "Can"},
      { nummer: 26, vorname: "Julian", nachname: "Ryerson"},
      { nummer: 27, vorname: "Karim", nachname: "Adeyemi"},
      { nummer: 43, vorname: "Jamie", nachname: "Gittens"},
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 33, vorname: "Alexander", nachname: "Meyer"},
      { nummer: 5, vorname: "Ramy", nachname: "Bensebaini"},
      { nummer: 8, vorname: "Felix", nachname: "Bensebaini"},
      { nummer: 14, vorname: "Maximilian", nachname: "Beyer"},
      { nummer: 16, vorname: "Julien", nachname: "Duranville"},
      { nummer: 21, vorname: "Donyell", nachname: "Malen"},
      { nummer: 25, vorname: "Niklas", nachname: "Süle"},
      { nummer: 38, vorname: "Kjell", nachname: "Watjen"},
    ];
  

    const awayTeamPlayers = [
      { nummer: 27, vorname: "Patrick", nachname: "Drewes"},
      { nummer: 6, vorname: "Ibrahima", nachname: "Sissoko"},
      { nummer: 8, vorname: "Anthony", nachname: "Losilla"},
      { nummer: 9, vorname: "Myron", nachname: "Boadu"},
      { nummer: 10, vorname: "Dani", nachname: "de Wut"},
      { nummer: 13, vorname: "Jakov", nachname: "Medic"},
      { nummer: 14, vorname: "Tim", nachname: "Oermann"},
      { nummer: 15, vorname: "Felix", nachname: "Passlack"},
      { nummer: 19, vorname: "Matus", nachname: "Bero"},
      { nummer: 32, vorname: "Maximilian", nachname: "Wittek"},
      { nummer: 33, vorname: "Philipp", nachname: "Hofmann"},
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 1, vorname: "Timo", nachname: "Horn"},
      { nummer: 2, vorname: "Christian", nachname: "Gamboa"},
      { nummer: 11, vorname: "Moritz", nachname: "Kwarteng"},
      { nummer: 18, vorname: "Samuel", nachname: "Bamba"},
      { nummer: 22, vorname: "Aliou", nachname: "Balde"},
      { nummer: 23, vorname: "Koji", nachname: "Miyoshi"},
      { nummer: 24, vorname: "Mats", nachname: "Pannewig"},
      { nummer: 29, vorname: "Moritz", nachname: "Broschinski"},
      { nummer: 41, vorname: "Noah", nachname: "Loosli"},
    ];

    return (
      <TeamColorProvider homeTeamColor={homeTeamColor} awayTeamColor={awayTeamColor} homeTeamName={homeTeam} awayTeamName={awayTeam} stadium={stadium} matchday={matchday} league={league} result={result}>
          <div className='container-web'> 
              <EventGameHeader />
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

              {activeTab === "Aufstellung" && (
                  <>
                      <Starting homeTeam={homeTeamPlayers} awayTeam={awayTeamPlayers}/>
                      <Substitutes homeTeam={homeTeamSubstitutionPlayers} awayTeam={awayTeamSubstitutionPlayers}/>
                      <Coaches nameCoachHome="Nuri Sahin" nameCoachAway="Peter Zeidler"/>
                      <Referee nameReferee="Felix Brych"/>
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Comment minute={1} icon="whistle" headline='Anpfiff'/>
                  </>
              )}
          </div>
      </TeamColorProvider>
  );
}

export default BorussiaDortmundVfLBochum271004;