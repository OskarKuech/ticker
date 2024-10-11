import React, { useState, useEffect } from "react";
import EventGameHeader from "../components/EventGameHeader";
import Navigation from "../components/Navigation";
import Referee from "../components_lineup/Referee";
import Coaches from "../components_lineup/Coaches";
import Substitutes from "../components_lineup/Substitutes";
import Starting from "../components_lineup/Starting";
import Comment from "../components_ticker/Comment";

import teamColors from '../utils/teamColors.json';
import { TeamColorProvider } from '../utils/TeamColorContext';

const SCSandUnionBerlin061024 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'SC Sand';
    const awayTeam = 'Union Berlin';
    const stadium = 'Adams Arena';
    const league = '2. Frauen Bundesliga';
    const matchday = '06. Spieltag';
    const result = '1:2'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Jule", nachname: "Baum" },
      { nummer: 2, vorname: "", nachname: "" },
      { nummer: 3, vorname: "", nachname: "" },
      { nummer: 4, vorname: "", nachname: "" },
      { nummer: 6, vorname: "", nachname: "" },
      { nummer: 9, vorname: "", nachname: "" },
      { nummer: 14, vorname: "", nachname: "" },
      { nummer: 16, vorname: "", nachname: "" },
      { nummer: 17, vorname: "", nachname: "" },
      { nummer: 19, vorname: "", nachname: "" },
      { nummer: 20, vorname: "", nachname: "" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 33, vorname: "", nachname: "" },
      { nummer: 5, vorname: "", nachname: "" },
      { nummer: 7, vorname: "", nachname: "" },
      { nummer: 8, vorname: "", nachname: "" },
      { nummer: 10, vorname: "", nachname: "" },
      { nummer: 11, vorname: "", nachname: "" },
      { nummer: 13, vorname: "", nachname: "" },
      { nummer: 18, vorname: "", nachname: "" },
      { nummer: 22, vorname: "", nachname: "" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Cara", nachname: "Bösl" },
      { nummer: 4, vorname: "Marie", nachname: "Becker" },
      { nummer: 7, vorname: "Lisa", nachname: "Heiseler" },
      { nummer: 10, vorname: "Sarah", nachname: "Abu Sabah" },
      { nummer: 11, vorname: "Dina", nachname: "Orschmann" },
      { nummer: 17, vorname: "Judith", nachname: "Steinert" },
      { nummer: 21, vorname: "Anna", nachname: "Weiss" },
      { nummer: 22, vorname: "Eleni", nachname: "Markou" },
      { nummer: 24, vorname: "Fatma", nachname: "Sakar" },
      { nummer: 29, vorname: "Antonia", nachname: "Halverkamps" },
      { nummer: 77, vorname: "", nachname: "Moraitou" }
    ];

    const awayTeamSubstitutionPlayers = [
        { nummer: 12, vorname: "Melanie", nachname: "Wagner" },
        { nummer: 3, vorname: "Latoya", nachname: "Bach" },
        { nummer: 6, vorname: "Celine", nachname: "Frank" },
        { nummer: 8, vorname: "Anouk", nachname: "Blaschka" },
      { nummer: 18, vorname: "Charleen", nachname: "Niesler" },
      { nummer: 19, vorname: "Sophie", nachname: "Trojahn" },
      { nummer: 23, vorname: "Pia", nachname: "Metzker" },
      { nummer: 27, vorname: "Korina", nachname: "Janez" },
      { nummer: 42, vorname: "Naika", nachname: "Reissner" }
    ];

    useEffect(() => { 
      document.title = `Ticker ${homeTeam} - ${awayTeam}`; 
    }, [homeTeam, awayTeam]);

    return (
      <TeamColorProvider homeTeamColor={homeTeamColor} awayTeamColor={awayTeamColor} homeTeamName={homeTeam} awayTeamName={awayTeam} stadium={stadium} matchday={matchday} league={league} result={result}>
          <div className='container-web'> 
              <EventGameHeader />
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

              {activeTab === "Aufstellung" && (
                  <>
                      <Starting homeTeam={homeTeamPlayers} awayTeam={awayTeamPlayers} />
                      <Substitutes homeTeam={homeTeamSubstitutionPlayers} awayTeam={awayTeamSubstitutionPlayers} />
                      <Coaches nameCoachHome="Alexander Fischinger" nameCoachAway="Ailien Poese" />
                      <Referee nameReferee="Alessia Jochum" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Comment minute={1} icon="whistle" headline='Anpfiff' />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}

export default SCSandUnionBerlin061024;