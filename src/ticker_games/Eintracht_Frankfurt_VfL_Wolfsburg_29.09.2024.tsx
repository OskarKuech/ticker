import React, { useState, useEffect} from 'react';
import '../styles/style.css'
import Navigation from '../components/Navigation';
import Event from '../components_ticker/Event';
import Comment from '../components_ticker/Comment';
import EventGoal from '../components_ticker/EventGoal';
import EventSubstitution from '../components_ticker/EventSubstitution';
import EventCard from '../components_ticker/EventCard';
import EventGameHeader from '../components/EventGameHeader';
import Starting from '../components_lineup/Starting';
import Substitutes from '../components_lineup/Substitutes';
import Coaches from '../components_lineup/Coaches';
import Referee from '../components_lineup/Referee';

import teamColors from '../utils/teamColors.json';
import { TeamColorProvider } from '../utils/TeamColorContext';

const EintrachtFrankfurtVfLWolfsburg290924 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Eintracht Frankfurt';
    const awayTeam = 'VfL Wolfsburg';
    const stadium = 'Stadion am Brentanobad';
    const league = 'Frauen Bundesliga'; 
    // Frauen Bundesliga, 4. Spieltag
    const matchday = '4. Spieltag';
    const result = '3:0';
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Stina", nachname: "Johannes"},
      { nummer: 4, vorname: "Sophia", nachname: "Kleinherne"},
      { nummer: 6, vorname: "Elisa", nachname: "Senß"},
      { nummer: 8, vorname: "Lisanne", nachname: "Gräwe"},
      { nummer: 10, vorname: "Laura", nachname: "Freigang"},
      { nummer: 14, vorname: "Geraldine", nachname: "Reuteler"},
      { nummer: 17, vorname: "Pia-Sophie", nachname: "Wolter"},
      { nummer: 19, vorname: "Nicole", nachname: "Aynomi"},
      { nummer: 22, vorname: "Nadine", nachname: "Riesen"},
      { nummer: 23, vorname: "Sara", nachname: "Doorsoun"},
      { nummer: 28, vorname: "Barbara", nachname: "Dunst"},
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 21, vorname: "Lea", nachname: "Paulick"},
      { nummer: 5, vorname: "Pernille", nachname: "Sanvig"},
      { nummer: 7, vorname: "Lara", nachname: "Prasnikar"},
      { nummer: 11, vorname: "Nina", nachname: "Lührßen"},
      { nummer: 15, vorname: "Remina", nachname: "Chiba"},
      { nummer: 24, vorname: "Anna", nachname: "Aehling"},
      { nummer: 25, vorname: "Jella", nachname: "Veit"},
      { nummer: 27, vorname: "Sophie", nachname: "Nachtigall"},
      { nummer: 30, vorname: "Carlotta", nachname: "Wamser"},
    ];
  

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Merle", nachname: "Frohms"},
      { nummer: 2, vorname: "Lynn", nachname: "Wilms"},
      { nummer: 4, vorname: "Kathrin", nachname: "Hendrich"},
      { nummer: 6, vorname: "Janina", nachname: "Minge"},
      { nummer: 8, vorname: "Lena", nachname: "Lattwein"},
      { nummer: 9, vorname: "Lineth", nachname: "Beerensteyn"},
      { nummer: 10, vorname: "Svenja", nachname: "Huth"},
      { nummer: 11, vorname: "Alexandra", nachname: "Popp"},
      { nummer: 29, vorname: "Jule", nachname: "Brand"},
      { nummer: 31, vorname: "Marina", nachname: "Hegering"},
      { nummer: 39, vorname: "Sarai", nachname: "Linder"},
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 22, vorname: "Lisa", nachname: "Schmitz"},
      { nummer: 7, vorname: "Chantal", nachname: "Hagel"},
      { nummer: 14, vorname: "Nuria", nachname: "Rabano"},
      { nummer: 18, vorname: "Justine", nachname: "Kielland"},
      { nummer: 19, vorname: "Fenna", nachname: "Kalma"},
      { nummer: 21, vorname: "Rebecka", nachname: "Blomqvist"},
      { nummer: 23, vorname: "Sveindis", nachname: "Jonsdottir"},
      { nummer: 24, vorname: "Joelle", nachname: "Wedemeyer"},
      { nummer: 25, vorname: "Vivien", nachname: "Endemann"},
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
                      <Coaches nameCoachHome="Niko Arnautis" nameCoachAway="Tommy Stroot"/>
                      <Referee nameReferee="Riem Hussein"/>
                  </>
              )}
            {activeTab === "Ticker" && (
                  <>
                      <Comment minute={90} extra_time={5} icon="whistle" headline='Abpfiff' text='Frankfurt sichert sich mit einem verdienten Sieg im Topspiel den zweiten Tabellenplatz. Nach Anyomis Tor 17 Sekunden nach Wiederanpfiff und ihrem Doppelpack in der 59. Minute war das Spiel für Frankfurt nie in Bedrängnis. Die Wolfsburgerinnen haben nach den Einwechslungen von Jonsdottir und Endemann zwar immer mehr ins Spiel gefunden, aber zu richtig guten Torchancen kamen sie nicht.' />
                      <Event minute={90} extra_time={3} headline='Chance für Eintracht Frankfurt' text='Wamser hat die gesamte linke Seite vor sich Platz und läuft auf den Strafraum zu. Nach einem schlenzer nach rechts schießt sie und zwingt Frohms zur Parade über das Tor.' team='Home' />
                      <EventCard minute={90} extra_time={1} vorname='Stina' nachname='Johannes' text='Gelbe Karte für Stina Johannes wegen Zeitspiels.' card_type='Gelb' team='Home'/>
                      <Comment minute={90} extra_time={1} text='Es gibt fünf Minuten Nachspielzeit.' />
                      <Comment minute={90} text='Lührßen versucht es mit einem Freistoß aus 22 Metern von rechts mal direkt, verfehlt das Tor aber.' />
                      <EventCard minute={89} vorname='Marina' nachname='Hegering' text='Gelbe Karte für Hegering nach einem Zweikampf mit Chiba.' card_type='Gelbe' team='Away' />
                      <Comment minute={87} text='Das Topspiel des 4. Spieltags wird übrigens von 4850 Fans im Stadion verfolgt.' />
                      <EventSubstitution minute={86} player_in_vorname='Nina' player_in_nachname='Lührßen' player_out_vorname='Pia-Sophie' player_out_nachname='Wolter' team='Home'/>
                      <EventSubstitution minute={86} player_in_vorname='Lara' player_in_nachname='Prasnikar' player_out_vorname='Nicole' player_out_nachname='Anyomi' team='Home'/>
                      <EventSubstitution minute={86} player_in_vorname='Carlotta' player_in_nachname='Wamser' player_out_vorname='Laura' player_out_nachname='Freigang' team='Home'/>
                      <Comment minute={85} text='Wenn Frankfurt mal in die gegnerische Hälfte kommt, wird es wieder gefährlicher. Chiba versucht den Ball von halbrechts quer zu legen, dieser bleibt aber an Hendrich hängen.' />
                      <Comment minute={85} text='So auch Popp, die mittig frei zum Schuss kommt, aber kaum Druck dahinter kriegt und somit kein Problem für Johannes ist.' />
                      <Comment minute={84} text='Die Gäste haben sich jetzt ganz in der Frankfurter Hälfte festgespielt, kommen aber trotz vieler Flanken und Ballstafetten nicht zu gefährlichen Abschlüssen.' />
                      <Comment minute={81} text='Endemanns Flanke von der rechten Strafraumgrenze rauscht an allen vorbei und endet im Seitenaus.' />
                      <Event minute={78} headline='Chance für Frankfurt' text='Freigang bekommt den Ball ins Zentrum gespielt. Dort lässt sie Hendrich ins leere laufen, scheitert dann aber an der heraus stürmenden Frohms.' team='Home'/>
                      <EventSubstitution minute={76} player_in_vorname='Nuria' player_in_nachname='Rabano' player_out_vorname='Sarai' player_out_nachname='Linder' team='Away'/>
                      <EventSubstitution minute={76} player_in_vorname='Chantal' player_in_nachname='Hagel' player_out_vorname='Lynn' player_out_nachname='Wilms' team='Away'/>
                      <EventSubstitution minute={76} player_in_vorname='Rebecka' player_in_nachname='Blomqvist' player_out_vorname='Jule' player_out_nachname='Brand' team='Away'/>
                      <Comment minute={74} text='Wieder versucht es Frankfurt mit einem schnellen Konter über rechts. Freigang schlägt den Ball von der rechten auf die linke Seite in den Lauf von Riesen, doch Frohms kommt aus ihrem Tor und klärt an ihrer Strafraumgrenze.' />
                      <EventSubstitution minute={73} text='Chiba muss für Senß kommen, die nach einem Zweikampf direkt signalisierte, dass sie nicht mehr weitermachen kann.' player_in_vorname='Remina' player_in_nachname='Chiba' player_out_vorname='Elisa' player_out_nachname='Senß' team='Home'/>
                      <Comment minute={73} text='Wolfsburg hat mittlerweile etwas mehr vom Ball und verbringt erstmals auch mehr Zeit in der gegnerischen Hälfte. Die Frankfurterinnen haben sich mehr zurückgezogen und lauern jetzt auf Konter.' />
                      <Comment minute={70} text='Wolfsburg bekommt auf der linken Seite einen Freistoß nach Foul an Jonsdottir. Aber wie es zum Spielverlauf passt, prallt auch dieser nur ab und landet wieder im Mittelfeld.' />
                      <EventSubstitution minute={63} player_in_vorname='Sveindis' player_in_nachname='Jonsdottir' player_out_vorname='Lineth' player_out_nachname='Beerensteyn' team='Away' />
                      <EventSubstitution minute={63} player_in_vorname='Vivien' player_in_nachname='Endemann' player_out_vorname='Lena' player_out_nachname='Lattwein' team='Away' />
                      <EventCard minute={61} vorname='Barbara' nachname='Dunst' card_type='Gelb' team='Home' />
                      <Comment minute={61} text='Und direkt die nächste Riesenchance für Frankfurt. Frohms rennt zur Seitenlinie, um den Ball zu klären. Dieser landet bei Frankfurt und nur Hendrichs Kopfball-Einsatz verhindert das 4:0.' />
                      <EventGoal minute={59} text='Frankfurt erhöht mit einem Konter wie aus dem Lehrbuch. Anyomi bekommt den Ball an der Mittellinie, spielt mit Reuteler einen Doppelpass und trifft aus zentraler Position zu ihrem zweiten Treffer.' vorname='Nicole' nachname='Anyomi' score='3:0' team='Home' />
                      <EventSubstitution minute={58} text='Die schon früh vorbelastete und zweikampfstarke Kleinherne verlässt den Platz für Aehling.' player_in_vorname='Anna' player_in_nachname='Aehling' player_out_vorname='Sophia' player_out_nachname='Kleinherne' team='Home' /> 
                      <Comment minute={57} text='Jule Brand rennt mit dem Ball erst an Dunst und dann zwischen Dorsun und Gräwe vorbei, bis sie im Sechzehner stolpert und zu Fall kommt.' />
                      <EventCard minute={55} vorname='Lena' nachname='Lattwein' text='Gelbe Karte für Lattwein nach Foul an Reuteler' card_type='Gelb' team='Away' />
                      <Comment minute={54} text='Huth hat auf der rechten Seite ganz viel Platz und zieht in den Sechzehner. Ihre flache Flanke blockt Wolter, wodurch der nicht folgende, nicht perfekt getroffene Schuss von Brand kein Problem für Johannes ist.' />
                      <Comment minute={53} text='Nach den ersten sehr wilden und temporeichen Minuten in der zweiten Hälfte beruhigt sich das Spiel ein wenig.' />
                      <Event minute={51} headline='Chance für Wolfsburg' text='Beerensteyn gewinnt den Zweikampf gegen Riesen und läuft frei auf Johannes zu. Mit einer ganz starken Bein Verteidigung klärt sie zur Ecke.' team='Away' />
                      <Comment minute={48} text='Auf der Gegenseite landet auch Reuters Flanke von der rechten Grundlinie in Frohms Armen' />
                      <Comment minute={47} text='Nach dem Blitzstart versucht es Wolfsburg direkt mit dem Gegenstoß. Huth flankt von rechts auf Lattwein, die den Ball in Johannes Arme schießt.' />
                      <EventGoal minute={46} text='Die zweite Halbzeit beginnt, wie die erste aufgehört hat: mit einem Frankfurt Tor. Dunst erkämpft den Ball links im Sechzehner gegen Hendrich, spielt zu Freigang, die auf die zentraler stehende Anyomi ablegt.' team='Home' vorname='Nicole' nachname='Anyomi' score='2:0'/>
                      <Comment minute={46} text='Wiederanpfiff in Frankfurt.' />

                      <Event headline='Halbzeit' text='Es ist Halbzeit in Frankfurt. Die erste Hälfte gehörte ganz klar den Hausherrinnen, die zwei gute Chancen durch Anyomi und Senß hatten, bevor Wolfsburg erst richtig ins Spiel gekommen ist. Die einzige gute Chance durch Brand hat Johannes stark pariert. Die 1:0 Führung durch den Elfmeter von Dourson in der Nachspielzeit geht damit durchaus in Ordnung.' />

                      <EventGoal minute={45} extra_time={1} team='Home' score='1:0' vorname='Sara' nachname='Doorsoun' text='Sara Doorsun übernimmt die Verantwortung und schießt sehr platziert in die linkere untere Ecke. Frohms hat zwar die Ecke, springt aber etwas zu hoch.' />
                      <Event minute={45} headline='Elfmeter für Frankfurt' text='Reuteler bringt den Ball mit einer Bogenlampe in den Wolfsburger Strafraum. Anyomis Schuss wird klar von Hegerings ausgestrecktem Arm geblockt.' team='Home' />
                      <Comment minute={41} text='Beerensteyn möchte einen Elfmeter für das halten von der bereits verwarnten Kleindienst haben. Schiri Hussein lässt weiterlaufen.' />
                      <Comment minute={40} text='Und wieder geht es in die andere Richtung. Wilms möchte den Ball ins Aus rollen lassen, Doorsun umläuft sie aber, und bringt den Ball zu Reuteler. Die Flanke links vom Strafraum findet jedoch keine Abnehmerin.' />
                      <Event minute={38} headline='Chance für Wolfsburg' text='Die erste Chance der Wölfinnen ist direkt eine gute. Jule Brand kommt links im Sechzehner frei zum Schuss. Johannes muss sich ganz lang streckt und stark pariert.' team='Away' />
                      <Comment minute={37} text='Nach sehr langer Besprechung vor einem Freistoß von halbrechts aus 25 Metern landet der Ball nur in der Frankfurt Mauer.' />
                      <Comment minute={33} text='Anyomi schickt Freigang alleine auf der linken Seite hinter die Wolfsburger Kette, der Ball ist nur etwas zu lang und landet im Seitenaus.' />
                      <Comment minute={31} text='Die bis hierher sehr temporeiche Begegnung ist durchaus ansehlich. Die Hausherrinnen sind die durchaus aktivere Mannschaft nach vorne und halten die Gäste bisher auch von ihrem Strafraum fern.' />
                      <Event minute={28} headline='Chance für Frankfurt' text='Die nächste brenzlige Situation für die Wolfsburgerinnen. Riesen flankt von der linken Seite in die Mitte, Frohms kommt aus ihrem Tor, kann den Ball aber nicht festhalten und blockt nach vorne ab. Senß` Nachschuss wird dann von Brand geblockt.' team='Home' />
                      <Comment minute={23} text='Jule Brand setzt sich beim Umschalten alleine gegen drei Frankfurterinnen durch, ihr wird der Ball auf Höhe der Mittellinie schließlich doch abgelaufen.' />
                      <Comment minute={21} text='Frankfurt drückt weiter hoch an und drängt Alexandra Popp so zu einem Fehlpass bei der Seitenverlagerung an der eigenen Strafraumlinie, die zu einer Ecke führt.'/>
                      <EventCard minute={17} vorname='Pia-Sophie' nachname='Wolter' text='Jetzt hat auch die zweite der vier Verteidigerinnen eine frühe Verwarnung bekommen. Wolter verliert den Ball in der eigenen Hälfte an Popp und steigt ihr danach in die Hacke.' card_type='Gelb' team='Home' />
                      <Comment minute={14} text='Jetzt fangen auch die Gäste an, sich in Richtung des Frankfurter Strafraums vorzuspielen und bekommen immerhin mal eine Ecke, die jedoch in keiner Chance endet.'/>
                      <Event minute={10} headline='Chance für Frankfurt' text='Wolter kommt rechts unbedrängt zum Flanken. Diese legt Reuteler auf die am Elfmeterpunkt freistehende Anyomi ab, deren Schuss an Frohms vorbei geht und von Hegering gerade noch auf der Linie geklärt werden kann.' team='Home'/>
                      <EventCard minute={7} vorname='Sophia' nachname='Kleinherne' text='Kleinherne hält Beerensteyn am Arm und verhindert somit in der eigenen Hälfte eine mögliche Konterchance.' card_type='Gelb' team='Home' />
                      <Comment minute={6} text='Die Wolfsburgerinnen bekommen es bisher nicht hin, sich aus der eigenen Hälfte zu befreien. Frankfurt läuft sehr hoch an und presst bis zum Sechzehner, wo sie aber noch an der Abwehr der Wölfinnen abblocken.' />
                      <Comment minute={4} text='Frankfurt startet besser in die Partie. Das Duo Reuteler und Dunst macht auf der rechten Seite direkt Wind, beide Flanken werden jedoch geblockt.'/>
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text='Das Topspiel der Frauen Bundesliga ist soeben freigegeben worden.'/>
                  </>
                )}
          </div>
        
    </TeamColorProvider>
  );
}

export default EintrachtFrankfurtVfLWolfsburg290924;