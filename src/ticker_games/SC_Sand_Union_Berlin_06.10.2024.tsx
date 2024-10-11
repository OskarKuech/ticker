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
import EventSubstitution from "../components_ticker/EventSubstitution";

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
      { nummer: 2, vorname: "Sarah", nachname: "Klotz" },
      { nummer: 3, vorname: "Jenna", nachname: "Zuniga" },
      { nummer: 4, vorname: "Denise", nachname: "Landmann" },
      { nummer: 6, vorname: "Alina", nachname: "Bantle" },
      { nummer: 9, vorname: "Leonie", nachname: "Kreil" },
      { nummer: 14, vorname: "Paige", nachname: "Bailey-Gayle" },
      { nummer: 16, vorname: "Giulina", nachname: "Kimmig" },
      { nummer: 17, vorname: "Rio", nachname: "Takizawa" },
      { nummer: 19, vorname: "Sanja", nachname: "Homann" },
      { nummer: 20, vorname: "Tabea", nachname: "Griß" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 33, vorname: "Stella", nachname: "Busse" },
      { nummer: 5, vorname: "Athanasia", nachname: "Tsaroucha" },
      { nummer: 7, vorname: "Sarah", nachname: "Wiesner" },
      { nummer: 8, vorname: "Cecilia", nachname: "Way" },
      { nummer: 10, vorname: "Julia", nachname: "Matuschewski" },
      { nummer: 11, vorname: "Leni", nachname: "Fischer" },
      { nummer: 13, vorname: "Ronja", nachname: "Shaer" },
      { nummer: 18, vorname: "Gina", nachname: "Ebels" },
      { nummer: 22, vorname: "Jenny", nachname: "Gaugigl" }
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
      { nummer: 77, vorname: "Athanasia", nachname: "Moraitou" }
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
                        <Comment minute={90} extra_time={5} headline="Abpfiff" text="Die Gäste aus der Hauptstadt gewinnen verdient mit 1:2 in der Adams Arena. Nach der frühen Führung durch einen Torwartfehler und der Erhöhung zum 2:0 kurz nach der Pause wirkte das Spiel nie gefährdet. Homann’s Tor zum 2:1  in der Nachspielzeit kam für Sand zu spät, die offensiv nicht genug darzubieten hatten." icon="whistle" />
                        <Comment minute={90} extra_time={5} text="Sand bekommt nochmal mit einer Ecke die Chance zum Ausgleich. Die eingewechselte Matuschewski schlägt diese aber viel zu weit ins Seitenaus." />
                        <Comment minute={90} extra_time={4} text="Janez läuft halbrechts frei auf das Tor zu, legt quer zu Blaschka die an der bereits am Boden liegenden Baum vorbei schiebt. Die Fahne geht aber direkt hoch." /> 
                        <Comment minute={90} extra_time={3} text="Union hat jetzt ganz viel Zeit beim Ausführen ihrer Freistöße." />
                        <EventGoal minute={90} extra_time={2} text="Und aus dem Nichts kommt der Anschlusstreffer. Sanja Homann lässt Celine Frank und Fatma Sakar ins leere laufen, macht einen Haken nach links und haut den Ball zentral aus 12 Metern in den rechten Winkel" vorname="Sanja" nachname="Homann" team="Home" score="1:2" />
                        <Event minute={90} extra_time={1} headline="Chance für Union" text="Trojahn kommt frei an der Strafraumgrenze zum Schuss, den Baum zur Seite abblocken kann. Anschließend Pia Metzker mit unfassbar viel Pech, deren Schuss an das Lattenkreuz geht." team="Away" />
                        <Comment minute={90} text="Es gibt vier Minuten Nachspielzeit." />
                        <Comment minute={89} text="Union macht die letzten Minuten nochmal etwas mehr Druck. Erst muss Baum aus ihrem Tor kommen um vor Metzker zu retten, dann steht Trojahn, frei durch, knapp im Abseits" />
                        <EventSubstitution minute={87} player_in_vorname="Korina" player_in_nachname="Janez" player_out_vorname="Dina" player_out_nachname="Orschmann" team="Away" />
                        <EventSubstitution minute={87} player_in_vorname="Anouk" player_in_nachname="Blaschka" player_out_vorname="Lisa" player_out_nachname="Heiseler" team="Away" />
                        <Event minute={86} headline="Chance für Sand" text="Die beste Chance des Spiels für die Hausherrinnen. Kreils Flanke von rechts kann Homann mit einem Volley aus fünf Metern aufs Tor bringen, allerdings genau auf Cara Bösl." />
                        <EventSubstitution minute={85} player_in_vorname="Cecilia" player_in_nachname="Way" player_out_vorname="Rio" player_out_nachname="Takizawa" team="Away" />
                        <Comment minute={84} text="Kreil ist in dieser Phase die auffälligste Spielerin des SC Sand. Im Dribbling zieht sie an Metzker und Weiß vorbei und schlägt eine flache Flanke in den Strafraum, wo allerdings niemand mitgekommen ist." />
                        <Comment minute={83} text="Die Ecke verläuft in nichts." />
                        <Comment minute={82} text="Union probiert es jetzt nochmal mit mehreren langen Bällen nach vorne. Immerhin eine Ecke ist dabei herausgekommen." />
                        <Comment minute={79} text="Das Spiel hat einiges an Fahrt verloren. Es gibt jetzt immer wieder kleinere Unterbrechungen durch Wechsel und kleineren Fouls, wodurch kein fließendes Spiel mehr entsteht." />
                        <EventSubstitution minute={76} team="Away" player_in_vorname="Celine" player_in_nachname="Frank" player_out_vorname="Athanasia" player_out_nachname="Moraitou" />
                        <Comment minute={76} text="Metzker rennt mit dem Ball bis zur Grundlinie, wo sie ihn flach hineinbringt. Erst prallt der Schuss von Heiseler ab und landet bei Orschmann, deren Schuss ebenfalls in der Abwehr landet." />
                        <Comment minute={75} text="Im Adams Stadion verfolgen 436 Zuschauer das Spiel vor Ort." />
                        <EventCard minute={74} text="Moraitou mit einem taktischen Foul auf Höhe der Mittellinie. Anschließend schlägt sie auch noch den Ball weg." card_type="Gelb" vorname="Athanasia" nachname="Moraitou" team="Away" />
                        <Event minute={70} headline="Chance für Union" text="Sand möchte im Mittelfeld ein Foul, die Schiedsrichterin lässt aber weiterlaufen. Metzker setzt zum Konter an und nimmt Orschmann mit. Über Markou kommt der Ball dann wieder zurück zu Metzker die alleine links im Sechzehner steht. Ihr Schuss landet an der Latte." team="Away" />
                        <Comment minute={69} text="Klotz und Homann spielen sich auf der rechten Außenbahn an Weiß vorbei. Der Ball scheint etwas zu lang zu sein und um aus zu enden, stünde da nicht die Eckfahne im Weg. Moraitou ist die erste, die das realisiert und klärt." />
                        <Event minute={66} headline="Chance für Sand" text="Kreil dribbelt auf der linken Außenbahn an zwei Unionierinnen vorbei, zieht nach innen und probiert es aus dem linken Halbraum aus 20 Metern direkt. Der Schuss geht knapp rechts vorbei." team="Home" />
                        <EventSubstitution minute={64} team="Home" player_in_vorname="Julia" player_in_nachname="Matuschewski" player_out_vorname="Paige" player_out_nachname="Bailey-Gayle"/>
                        <EventSubstitution minute={63} team="Away"player_in_vorname="Pia" player_in_nachname="Metzker" player_out_vorname="Sarah" player_out_nachname="Abu Sabbah" />
                        <EventSubstitution minute={63} team="Away" player_in_vorname="Sophie" player_in_nachname="Trojahn" player_out_vorname="Antonia" player_out_nachname="Halverkamps"/>
                        <Event minute={61} headline="Chance für Union" text="Abu Sabbah fast mit dem Doppelpack. Einen langen Ball aus der eigenen Hälfte pflückt sie im Drehen hinunter und läuft auf die ihr ebenfalls entgegenkommenden Baum zu. Abu Abu Sabbah versucht es mit einem Lupfer über die Torhüterin, die sich aber ganz lang macht und mit den Fingerspitzen noch dran kommt. " team="Away" />
                        <Event minute={60} headline="Chance für Union" text="Sehr guter Tiefenlauf in den Strafraum von Orschmann, die von Abu Sabbah bedient wird. Der Abschluss aus 14 Metern geht knapp links vorbei." team="Away" />
                        <Comment minute={58} text="Beide verletzten Spielerinnen können weitermachen, das Tor bleibt bestehen und es geht mit Anstoß für Sand weiter." />
                        <Comment minute={55} text="Es herrscht etwas Ungewissheit bei den Spielerinnen, ob das Tor nun zählt. Die verletzten Spielerinnen werden vorerst im Strafraum behandelt." />
                        <EventGoal minute={54} text="Abu Sabbah steht frei im Sechzehner und wird von rechts per Flanke von Sakar perfekt bedient. Ihr Kopfball trifft zwar ins Tor, jedoch raschelt sie auch mit Baum zusammen." vorname="Sarah" nachname="Abu Sabbah" team="Away" score="0:2" />
                        <Comment minute={50} text="Sand startet mit viel Druck in die zweite Halbzeit und baut deutlich kontrollierter und mit mehr Freiheiten auf als noch in der ersten Hälfte." />
                        <Event minute={47} headline="Chance für Sand" text="Takizawa bleibt im Strafraum an zwei Verteidigerinnen hängen, kann den Ball aber behaupten. Homanns folgende Flanke von rechts findet keine Abnehmerin und wird geklärt. Aus dem Rückraum kommt dann Kreil herangerauscht und schießt aus 23 Metern knapp rechts vorbei." team="Home" />
                        <Comment minute={46} text="Abu Sabbah steht frei vor Baum, wird aber zurückgepfiffen. Abseits." />
                        <EventSubstitution minute={46} player_in_vorname="Leni" player_in_nachname="Fischer" player_out_vorname="Alina" player_out_nachname="Bantle" team="Home" />

                        <Event headline="Halbzeit" text="Die Gäste aus Berlin führen verdient zur Pause. Besonders in den ersten 25 Minuten haben sie das Spiel ganz klar unter Kontrolle gehabt und Sand mit ihrem sehr hohen Anlaufen unter Druck gesetzt, mit dem diese nicht klar gekommen sind. Die letzten zwanzig Minuten haben sie das Tempo dann etwas herausgenommen, wodurch auch Sand zum Spielen gekommen ist. Gefährlich wurde es für die Gäste aber nur durch einen Kopfball von Landmann nach Ecke." />

                        <Comment minute={42} text="Orschmann versucht es nach Ballgewinn im Mittelfeld schnell zu machen, wird aber mit ausgestrecktem Bein nieder gefällt." />
                        <Event minute={40} headline="Chance für Sand" text="Bei der folgenden Ecke kommt Landmann am zweiten Pfosten frei zum Kopfball, der knapp über das Tor geht." team="Home" />
                        <Comment minute={39} text="Jetzt geht es mal schnell bei Sand. Kimmig hat die gesamte rechte Außenbahn frei und sucht mit ihrer Flanke Bailey-Gayle im Strafraum. Steinert kommt ihr zuvor und klärt zur Ecke." />
                        <Comment minute={36} text="Union hat sich in den letzten Minuten etwas zurückgezogen und läuft nicht mehr so hoch an wie noch die ersten 25 Minuten. Sand hat nun zwar etwas mehr vom Spiel und kommt auch in die gegnerische Hälfte, konnte sich dem Tor aber noch nicht gefährlich nähern." />
                        <Comment minute={33} text="Jetzt mal Union mit einer Konterchance. Abu Sabbah hat an der Mittellinie keine Anspielstation, dreht ab und schickt noch im drehen die vorbeistürmende Orschmann. Der Ball ist allerdings einen ticken zu lang und Baum nimmt ihn an der Strafraumgrenze auf." />
                        <Event minute={31} headline="Chance für Sand" text="Der folgende Freistoß ist in einer guten halb linken Position, landet aber ohne Druck in Bösl’s Armen." team="Home" />
                        <EventCard minute={30} text="Anna Weiß mit einem taktischen Foul." team="Away" card_type="Gelb" vorname="Anna" nachname="Weiss" />
                        <Event minute={29} headline="Chance für Union" text="Bantles Pass nach vorne wird von Markou an der Mittellinie abgefangen. Sie schickt Orschmann, die mit Abu Sabbah im 2 gegen 2 auf das gegnerische Tor zuläuft. Abu Sabbah denkt etwas zu lange nach und ihr Schuss geht nach zwei Haken links am Tor vorbei." team="Away" />
                        <Comment minute={26} text="Bei Union läuft es besonders über die rechte Seite mit Abu Sabbah und Sakar. Auch Markou zieht es von der Mitte immer wieder auf die rechte Außenbahn." />
                        <Comment minute={24} text="Auch Sand wieder mit einer guten Aktion. Baum schlägt den Ball lang nach vorne zu Kreil. Die Kapitänin kommt nach Doppelpass mit Takizawa in den Strafraum, der Ball verspringt ihr allerdings und bleibt bei Steinert zurück." />
                        <Comment minute={21} text="Sand tut sich sehr schwer mit dem extrem hohen Anlaufen der Gäste. Sie kommen bisher nicht dazu, längere Ballbesitz Phasen zu haben." />
                        <Comment minute={19} text="Markou gewinnt den Ball im Aufbau der Hausherrinnen. Ein Querpass zu Heiseler geriet etwas zu kurz, was Sand die Chance zum Kontern gibt. Kreil geht über die linke Seite, hat schließlich aber keine Anspielpartnerin, wodurch sich der Konter ins Leere verläuft." />
                        <Event minute={15} headline="Chance für Union" text="Heiseler schlägt eine Ecke nach der es schnell hektisch wird: Orschmann fällt im Sechzehner, Baum fliegt unterm Ball hindurch und keiner kann wirklich klären. Nach ein paar geblockten Schüssen in beide Richtungen bekommt Sand es aber doch geklärt." team="Away" />
                        <Comment minute={12} text="Wieder kommt ein Abschlag von Baum wie eine Frisbee zum Gegenangriff zurück. Orschmann ist alleine im Sechzehner durch, wird jedoch wegen Abseits zurückgepfiffen." />
                        <Comment minute={9} text="Sand versucht es zur Antwort mal über die rechte Seite, wo Kreil’s Flanke halb zu einem Torschuss wird und kein Problem für Bösl ist." />
                        <EventGoal minute={6} team="Away" text="Baum wird von Dina Orschmann beim Aufbau angelaufen und überlegt einen Augenblick zu lange. Sie versucht den Ball etwas hektisch zu klären, trifft Orschmann aber  am Rücken und der Ball purzelt ins Tor." vorname="Dina" nachname="Orschmann" score="0:1" />
                        <Comment minute={5} text="Union presst in der Anfangsphase sehr hoch und steht mit allen Feldspielerinnen in der gegnerischen Hälfte." />
                        <Event minute={3} headline="Chance für Sand" text="Die Ecke für Union wird zu einem Konter für Sand. Es geht schnell über die linke Seite und Homann kommt nach einem Haken zentral zum Schuss, der direkt auf Bösl im Tor der Unioner geht." team="Home"/>
                        <Comment minute={2} text="Union macht früh Druck und erspielt sich eine Ecke." />
                        <Comment minute={1} icon="whistle" headline='Anpfiff' />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}

export default SCSandUnionBerlin061024;