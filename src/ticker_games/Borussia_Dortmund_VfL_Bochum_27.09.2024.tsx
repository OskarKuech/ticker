import React, { useState, useEffect } from "react";
import EventGameHeader from "../components/EventGameHeader";
import Navigation from "../components/Navigation";
import Referee from "../components_lineup/Referee";
import Coaches from "../components_lineup/Coaches";
import Substitutes from "../components_lineup/Substitutes";
import Starting from "../components_lineup/Starting";
import Comment from "../components_ticker/Comment";
import Event from "../components_ticker/Event";
import EventGoal from "../components_ticker/EventGoal";
import EventCard from "../components_ticker/EventCard";

import teamColors from '../utils/teamColors.json';
import { TeamColorProvider } from '../utils/TeamColorContext';
import EventSubstitution from "../components_ticker/EventSubstitution";

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

    useEffect(() => { document.title = `Ticker ${homeTeam} - ${awayTeam}`; });

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
                      <Comment minute={90} extra_time={3} icon="whistle" headline='Abpfiff' text="Die Borussia aus Dortmund hat den Rückstand aus der ersten Hälfte aufgeholt und am Ende verdient mit 4:2 gegen die Nachbarn aus Bochum gewonnen. Dies lag besonders daran, dass sie deutlich konzentrierter aus der Pause kamen und die Abwehr des VfL nicht mehr so kompakt war wie noch in der ersten Halbzeit." />
                      <Comment minute={90} extra_time={3} text="Wittek setzt nochmal einen Schuss von der linken Strafraumecke über das Dortmunder Tor, in einem Spiel, das in den letzten Minuten nur noch vor sich hindümpelt." />
                      <Comment minute={90} extra_time={1} text="Es gibt 3 Minuten Nachspielzeit." />
                      <Comment minute={90} text="Balde versucht es mit dem Ball an der Mittellinie an drei Dortmundern vorbeizu dribbeln, scheitert letztendlich aber an Beier der gut mit nach hinten gearbeitet hat." />
                      <Event minute={89} headline="Chance für Dortmund" text="Auch Süles Schuss aus 16 Metern geht nur knapp am Tor vorbei - diesmal auf der rechten Seite." team="Home" />
                      <Event minute={87} headline="Chance für Dortmund" text="Die Bochumer Abwehr steht bei weitem nicht mehr so gut wie noch in der ersten Hälfte, so kommt Can frei zu einem zentralen Schuss aus 16 Metern der vom linken Pfosten ins Toraus geht." team="Home" />
                      <Event minute={83} headline="Chance für Dortmund" text="Duranville mit viel Platz links am Strafraumrand. Sein Schuss läuft nur knapp am Tor vorbei ins Aus." team="Home" />
                      <EventSubstitution minute={82} team="Home" player_in_vorname="Niklas" player_in_nachname="Süle" player_out_vorname="Yan" player_out_nachname="Couto" />
                      <EventSubstitution minute={82} team="Away" player_in_vorname="Aliou" player_in_nachname="Balde" player_out_vorname="Matus" player_out_nachname="Bero" />
                      <EventSubstitution minute={82} team="Away" player_in_vorname="Moritz-Broni" player_in_nachname="Kwarteng" player_out_vorname="Ibrahima" player_out_nachname="Sissoko" />
                      <EventGoal minute={81} text="Adeyemi läuft die rechte Außenbahn alleine entlang und legt dann auf den zentral stehenden Nmecha ab. Mit einem Haken nimmt dieser Medic aus dem Spiel und schießt aus 17 Metern durch die Arme von Drewes ins Tor." team="Home" vorname="Felix" nachname="Nmecha" score="4:2" />
                      <EventGoal minute={75} text="Der BVB hat das Spiel gedreht. Adeyemi spielt von rechts zwischen zwei Bochumern perfekt in den Lauf von Guirassy, dessen Schuss im Sechzehner von links durch Drewes Beine ins Tor geht." team="Home" vorname="Serhou" nachname="Guirassy" score="3:2" />
                      <EventSubstitution minute={74} team="Home" player_in_vorname="Ramy" player_in_nachname="Bensebaini" player_out_vorname="Julian" player_out_nachname="Ryerson" />
                      <EventSubstitution minute={74} team="Home" player_in_vorname="Maximilian" player_in_nachname="Beier" player_out_vorname="Julian" player_out_nachname="Brandt" />
                      <EventSubstitution minute={74} team="Home" player_in_vorname="Felix" player_in_nachname="Nmecha" player_out_vorname="Pascal" player_out_nachname="Groß" />
                      <EventSubstitution minute={72} team="Away" player_in_vorname="Koji" player_in_nachname="Miyoshi" player_out_vorname="Philipp" player_out_nachname="Hofmann" />
                      <Comment minute={71} text="Der BVB verliert den Ball im Aufbau in der eigenen Hälfte, Hofmanns Schuss aus 20 Metern wird aber noch am Sechzehner geblockt." />
                      <EventCard minute={70} text="Felix Passlack wird dreißig Meter von Groß am Arm gehalten, der letztendlich für taktisches Foul gelb sieht." vorname="Pascal" nachname="Groß" team="Home" card_type="Gelb" />
                      <Comment minute={69} text="Passlack bekommt den Ball nach einem Flipper-Moment an der rechten Auslinie von Sissoko zur Grundlinie und spielt flach in die Mitte. Dort geht der Ball allerdings an allen vorbei wieder aus dem Sechzehner raus. Dann geht auch die Fahne hoch." />
                      <EventSubstitution minute={66} text="Gittens muss humpelnd den Platz verlassen und wird durch Duranville ersetzt." player_in_vorname="Julien" player_in_nachname="Duranville" player_out_vorname="Jamie" player_out_nachname="Gittens" team="Home" />
                      <Event minute={66} headline="Chance für Dortmund" text="Sissokos Flanke kommt von der rechten Seite und wird länger und länger. Broschinksi muss den Ball halblinks vor dem Tor zur Volleyabnahme. Den nicht perfekt getroffenen Ball kann Kobel zur Seite klären." team="Home" />
                      <EventSubstitution minute={64} player_in_vorname="Moritz" player_in_nachname="Broschinski" player_out_vorname="Myron" player_out_nachname="Boadu" team="Away" />
                      <EventGoal minute={62} text="Kapitän Emre Can übernimmt die Aufgabe und gleicht mit einem Schuss ins obere linke Eck aus. Drewes war ebenfalls in diese Ecke unterwegs, kann seine Arme aber nicht lang genug machen, um den platziert geschossenen Elfmeter zu halten." team="Home" vorname="Emre" nachname="Can" score="2:2" />
                      <Event minute={60} headline="Elfmeter für Dortmund" text="Guirassy kommt nach einem Kontakt am Fuß mit Passlack zu Fall, nachdem er sich den Ball halblinks im Sechzehner ein Stück zu weit nach vorne legt" team="Home" />
                      <Comment minute={59} text="Dortmund verfällt plötzlich ins Tiki-Taka im eigenen Sechzehner und Kobel muss an Boadu vorbei dribbeln um zu klären" />
                      <EventCard minute={58} text="Couto mit einem taktischen Foul an Passlack." vorname="Yan" nachname="Couto"  team="Home" card_type="Gelb"/>
                      <Comment minute={57} text="Die Dortmunder fordern nach einem Schuss von Groß einen Elfmeter, Brych zeigt aber direkt an, dass beide Arme an den Körper angelegt waren und lässt weiterlaufen." />
                      <Comment minute={55} text="Bochum bekommt es in den ersten zehn Minuten nicht mehr so gut wie in der ersten Hälfte, die Dortmunder am Spielaufbau zu stören. Doch auch den Dortmundern fehlt es auf den letzten Metern an Konsequenz." />
                      <Comment minute={51} text="Die darauffolgende Ecke endet bloß in einer weiteren Ecke, die wiederum in einem Offensivfoul von Adeyemi mündet. " />
                      <Event minute={50} headline="Chance für Dortmund" text="Die erste Chance der zweiten Hälfte gehört Pascal Groß, der den Ball zentral auf Höhe des Sechzehners von Ryerson aufgelegt bekommt. Drewes streckt sich und lenkt den Ball zur Ecke über das Tor." team="Home" />
                      <Comment minute={46} text="Drewes fängt eine Flanke von Couto ab und lässt Guirassy damit ins leere laufen." />
                      <Comment minute={46} text="Beide Teams kommen unverändert zurück in den Dortmunder Regen." />

                      <Event headline='Halbzeit' text='Die Gäste führen etwas überraschend, aber mit viel Kampfgeist zur Pause des kleinen Revierderbys mit 1:2. Dortmund ist die klar spielbestimmende Mannschaft, aber bei weitem nicht konsequent genug, wenn es darum geht, zum Abschluss zu kommen. Durch sehr starke Defensivleistungen, die immer wieder in Kontern münden, geht die Bochumer Führung aber durchaus in Ordnung.' />

                      <Comment minute={45} extra_time={2} text="Es wird nochmal etwas hitzig im Dortmunder Regen. Erst möchte Adeyemi einen Freistoß fürs Schubsen bekommen, einige Sekunden später bleibt Hofmann liegen. Brych stand bei beiden Situationen gut und lässt weiterlaufen." />
                      <EventGoal minute={43} text="Jetzt sind sie doch mal durchgekommen. Brandts Flanke von der rechten Sechzehner Linie kommt perfekt auf Guirassy, der den Ball mit Wucht aus kurzer Distanz in das Netz köpft." score="1:2" team="Home" vorname="Serhou" nachname="Guirassy" />
                      <Comment minute={43} text="Guirassy bekommt den Ball auf den Elfmeterpunkt gespielt und kommt frei zum Schuss - bis doch wieder ein blauer zwischen rutscht." />
                      <Event minute={39} headline="Chance für Dortmund" text="Hier wird jede verhinderte Torchance wie ein Tor gefeiert. Ryerson's Flanke kommt gut auf Guirassy, vor dem Losilla den Ball aber noch zur Ecke klärt." team="Home" />
                      <Comment minute={38} text="Hier wird jede verhinderte Torchance wie ein Tor gefeiert. Ryerson's Flanke kommt gut auf Guirassy, vor dem Losilla den Ball aber noch zur Ecke klärt." />
                      <Comment minute={37} text="Das Spiel folgt mittlerweile einem sehr ähnlichen Muster: Dortmund versucht sich immer wieder Richtung Strafraum zu kombinieren, findet aber keinen Weg durch die Bochumer Mauer, die zum Kontern ansetzt, sobald sie in Ballbesitz kommen." />
                      <Comment minute={35} text="Das Spiel folgt mittlerweile einem sehr ähnlichen Muster: Dortmund versucht sich immer wieder Richtung Strafraum zu kombinieren, findet aber keinen Weg durch die Bochumer Mauer, die zum Kontern ansetzt, sobald sie in Ballbesitz kommen." />
                      <Event minute={33} headline="Chance für Bochum" text="Hofmann steckt den Ball mit einem Doppelpass zu Boadu durch, der ab der Mittellinie vor drei Dortmunder Verteidigern davonrennt. Sein Abschluss geht knapp links am Tor vorbei." team="Away" />
                      <Comment minute={30} text="Dortmund scheint von den unerwarteten Gegentoren geschockt und Bochum wird immer gefährlicher: Wieder kommt der Ball in den Strafraum des letztjährigen Champions League Finalisten. De Witt bekommt mit seinem Kopf im Fünfmeterraum aber nicht genug Druck hinter den Ball, so dass es für Kobel keine Aufgabe ist." />
                      <Comment minute={26} text="Dortmund wirkt von den unerwarteten Gegentoren geschockt und Bochum wird immer gefährlicher: Wieder kommt der Ball in den Strafraum des letztjährigen Champions League Finalisten. De Witt bekommt mit seinem Kopf im Fünfmeterraum aber nicht genug Druck hinter den Ball, so dass es für Kobel keine Aufgabe ist." />
                      <Comment minute={23} text="Mit diesem Doppelschlag hat keiner gerechnet, unverdient ist die Bochumer Führung aber auch nicht. Sie verteidigen kompakt und pressen sehr aktiv und konsequent mit zwei Spielern auf den Ballführenden." />
                      <EventGoal minute={21} text="Was ist denn in Dortmund los? Gregor Kobel kann den Rückpass von Schlotterbeck an die linke Grundlinie nicht rechtzeitig klären und Boadu bekommt ihn mit langem Bein ins Zentrum gesteckt. Dort steht de Witt und schiebt ins leere Tor ein. Kobel reklamiert noch auf ein Foul, Schiri Brych zeigt aber sofort an, dass die kleine Berührung von Boadu nicht ausreicht."  team="Away" score="0:2" vorname="Dani" nachname="de Wit" />
                      <Comment minute={19} text="Bochum scheint jetzt Spaß am Spiel gefunden zu haben. Nach Balleroberungen geht es jetzt blitzschnell nach vorne, meist über die linke Seite mit Wittek und Bero." />
                      <EventGoal minute={16} text="Der erste gefährliche Torschuss des VfL sitzt direkt! Mit einem perfekten Doppelpass zwischen Hofmann und Bero kombinieren sich die Bochumer über die linke Seite in den Dortmunder Strafraum, wo dann Bero mit strammen Schuss ins kurze Eck vollendet." team="Away" vorname="Matus"nachname="Bero"score="0:1"/>
                      <Event minute={14} headline="Chance für Dortmund" text="Ganz tolle Ballbeherrschung von Julian Brandt, der in der Drehung zwei Bochumer verlädt und aus 18 Metern zentral aufs Tor schießt. Drewes muss sich strecken und lenkt zur Ecke ab, die aber zu nichts führt." />
                      <Event minute={11} headline="Chance für Dortmund" text="Adeyemi läuft frei durch den Bochumer Strafraum und bringt Youtos Flanke aus sieben Metern in leichter Rücklage mit dem Kopf gefährlich aufs Tor. Drewes bekommt den Ball im Sprung hinausgefaustet. Die folgende Flanke von Gittens findet keinen Abnehmer mehr." team="Home"/>
                      <Comment minute={7} text="Obwohl Dortmund den Ball hat, aber nicht in die Nähe des Strafraums kommt, gehört die erste Tour Annäherung den Bochumern. Die Flanke von Passlack wird zu einem halben Torschuss und Kobel muss erstmals die Arme hochheben." />
                      <Comment minute={3} text="Die Bochumer beginnen pressen mit zwei bis drei Spielern auf den Ballführenden der Dortmunder, die bereits in den ersten Minuten versuchen, sich mit hohen Bällen vor zu kombinieren." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Mit dem “kleinen Revierderby” beginnt sowohl der 5. Spieltag dieser Saison, als auch das letzte verbleibende Derby in der Bundesliga."/>
                  </>
              )}
          </div>
      </TeamColorProvider>
  );
}

export default BorussiaDortmundVfLBochum271004;