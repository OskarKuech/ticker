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

const TestSpielUnionWerder = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Union Berlin';
    const awayTeam = 'Werder Bremen';
    const stadium = 'Stadion an der Alten Försterei';
    const league = 'Testspieltag';
    const result = '2:2'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Frederik", nachname: "Rönnow" },
      { nummer: 2, vorname: "Kevin", nachname: "Vogt" },
      { nummer: 4, vorname: "Diogo", nachname: "Leite" },
      { nummer: 5, vorname: "Danilho", nachname: "Doekhi" },
      { nummer: 8, vorname: "Rani", nachname: "Khedira"},
      { nummer: 11, vorname: "Wooyeong", nachname: "Jeong"},
      { nummer: 13, vorname: "András", nachname: "Schäfer"},
      { nummer: 15, vorname: "Tom", nachname: "Rothe"},
      { nummer: 16, vorname: "Benedict", nachname: "Hollerbach"},
      { nummer: 17, vorname: "Jordan", nachname: "Siebatcheu"},
      { nummer: 19, vorname: "Janik", nachname: "Haberer"},
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 37, vorname: "Alexander", nachname: "Schwolow"},
      { nummer: 7, vorname: "Yorbe", nachname: "Vertessen"},
      { nummer: 14, vorname: "Leopold", nachname: "Querfeld"},
      { nummer: 20, vorname: "Laszlo", nachname: "Benez"},
      { nummer: 21, vorname: "Tim", nachname: "Skarke"},
      { nummer: 24, vorname: "Robert", nachname: "Skov"},
      { nummer: 28, vorname: "Christopher", nachname: "Trimmel"},
      { nummer: 29, vorname: "Lucas", nachname: "Tousart"},
      { nummer: 36, vorname: "Aljocha", nachname: "Kemlein"},
    ];
  

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Michael", nachname: "Zetterer" },
      { nummer: 3, vorname: "Anthony", nachname: "Jung"},
      { nummer: 4, vorname: "Niklas", nachname: "Stark"},
      { nummer: 6, vorname: "Jens", nachname: "Stage"},
      { nummer: 7, vorname: "Marvin", nachname: "Duksch"},
      { nummer: 8, vorname: "Mitchell", nachname: "Weiser"},
      { nummer: 14, vorname: "Senne", nachname: "Lynen"},
      { nummer: 19, vorname: "Derrick", nachname: "Kohn"},
      { nummer: 20, vorname: "Romano", nachname: "Schmid"},
      { nummer: 22, vorname: "Julian", nachname: "Malatini"},
      { nummer: 27, vorname: "Felix", nachname: "Agu"},
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 30, vorname: "Mio", nachname: "Backhaus"},
      { nummer: 2, vorname: "Olivier", nachname: "Deman"},
      { nummer: 5, vorname: "Amos", nachname: "Pieper"},
      { nummer: 10, vorname: "Leonardo", nachname: "Bittencourt"},
    ];

    return (
      <TeamColorProvider homeTeamColor={homeTeamColor} awayTeamColor={awayTeamColor} homeTeamName={homeTeam} awayTeamName={awayTeam} stadium={stadium} league={league} result={result}>
          <div className='container-web'> 
              <EventGameHeader />
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

              {activeTab === "Aufstellung" && (
                  <>
                      <Starting homeTeam={homeTeamPlayers} awayTeam={awayTeamPlayers}/>
                      <Substitutes homeTeam={homeTeamSubstitutionPlayers} awayTeam={awayTeamSubstitutionPlayers}/>
                      <Coaches nameCoachHome="Bo Svensson" nameCoachAway="Ole Werner"/>
                      <Referee nameReferee="Sven Jablonski"/>
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Comment minute={90} extra_time={1} text='Ganz viel Bla Bla Lorem Ipsum und so weiter' />
                      <Event minute={78} headline='Chance für Bremen' text='Ganz viel Bla Bla text' team='Away'/>
                      <EventGoal minute={59} text='Ganz viel Bla Bla und ein Tor war auch dabei.' vorname='Andras' nachname='Schäfer' score='1:0' team='Home' />
                  </>
              )}
          </div>
      </TeamColorProvider>
  );
}

export default TestSpielUnionWerder;