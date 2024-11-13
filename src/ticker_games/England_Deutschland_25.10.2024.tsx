import React, { useState, useEffect } from "react";
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
import EventCard from "../components_ticker/EventCard";
import EventSubstitution from "../components_ticker/EventSubstitution";

const EnglandDeutschland251024 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'England';
    const awayTeam = 'Deutschland';
    const stadium = 'Wembley';
    const league = 'Frauen-Nationalteam Freundschaftsspiel';
    const matchday = '5. Spieltag';
    const result = '3:4'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Hannah", nachname: "Hampton" },
      { nummer: 2, vorname: "Lucy", nachname: "Bronze" },
      { nummer: 3, vorname: "Jess", nachname: "Carter" },
      { nummer: 4, vorname: "Keira", nachname: "Walsh" },
      { nummer: 5, vorname: "Millie", nachname: "Bright" },
      { nummer: 6, vorname: "Leah", nachname: "Williamson" },
      { nummer: 7, vorname: "Beth", nachname: "Mead" },
      { nummer: 8, vorname: "Georgia", nachname: "Stanway" },
      { nummer: 9, vorname: "Alessia", nachname: "Russo" },
      { nummer: 10, vorname: "Ella", nachname: "Toone" },
      { nummer: 11, vorname: "Lauren", nachname: "Hemp" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 13, vorname: "Mary", nachname: "Earps" },
      { nummer: 21, vorname: "Anna", nachname: "Moorhouse" },
      { nummer: 12, vorname: "Maya", nachname: "Le Tissier" },
      { nummer: 14, vorname: "Jessica", nachname: "Park" },
      { nummer: 15, vorname: "Esme", nachname: "Morgan" },
      { nummer: 16, vorname: "Alex", nachname: "Greenwood" },
      { nummer: 17, vorname: "Aggie", nachname: "Beever-Jones" },
      { nummer: 18, vorname: "Grace", nachname: "Clinton" },
      { nummer: 19, vorname: "Chloe", nachname: "Kelly" },
      { nummer: 20, vorname: "Jessica", nachname: "Naz" },
      { nummer: 22, vorname: "Lucy", nachname: "Parker" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Ann-Kathrin", nachname: "Berger" },
      { nummer: 2, vorname: "Sarai", nachname: "Linder" },
      { nummer: 6, vorname: "Janina", nachname: "Minge" },
      { nummer: 9, vorname: "Sjoeke", nachname: "Nüsken" },
      { nummer: 15, vorname: "Giulia", nachname: "Gwinn" },
      { nummer: 16, vorname: "Linda", nachname: "Dallmann" },
      { nummer: 19, vorname: "Klara", nachname: "Bühl" },
      { nummer: 20, vorname: "Elisa", nachname: "Senß" },
      { nummer: 22, vorname: "Jule", nachname: "Brand" },
      { nummer: 23, vorname: "Sara", nachname: "Doorsoun" },
      { nummer: 24, vorname: "Giovanna", nachname: "Hoffmann" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 12, vorname: "Stina", nachname: "Johannes" },
      { nummer: 21, vorname: "Sophia", nachname: "Winkler" },
      { nummer: 4, vorname: "Sophia", nachname: "Kleinherne" },
      { nummer: 5, vorname: "Pia-Sophie", nachname: "Wolter" },
      { nummer: 8, vorname: "Sydney", nachname: "Lohmann" },
      { nummer: 13, vorname: "Sara", nachname: "Däbritz" },
      { nummer: 14, vorname: "Lisanne", nachname: "Gräwe" },
      { nummer: 17, vorname: "Felicitas", nachname: "Rauch" },
      { nummer: 18, vorname: "Nicole", nachname: "Anyomi" },
      { nummer: 25, vorname: "Selina", nachname: "Cerci" },
      { nummer: 26, vorname: "Vivien", nachname: "Endemann" }
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
                      <Coaches nameCoachHome="Sarina Wiegman" nameCoachAway="Christian Wück" />
                      <Referee nameReferee="Marta Huerta de Aza (ESP)" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Comment minute={90} extra_time={3} icon="whistle" headline="Abpfiff" text="Mit 3 Elfmetern,  3 Abseits- und 7 regulären Toren endet ein hoch unterhaltsames Fußballspiel in Wembley. Besonders in der fast durchweg offensiven ersten Hälfte haben beide Teams viele gute Chancen herausgespielt. Die zweite Hälfte hingegen verlief lange Zeit deutlich ruhiger und kontrollierter. Bronze verkürzte zwar nochmal, nach einem Fehler von Berger, auf ein Tor, wirklich gefährdet wurde der souveräne Sieg der Deutschen dadurch aber nicht mehr." />
                      <Comment minute={90} extra_time={4} text="Wie viel Kraft die erste Halbzeit gekostet hat, ist den Akteuren mittlerweile deutlich anzusehen." />
                      <EventCard minute={90} extra_time={1} team="Away" card_type="Gelb" vorname="Sophia" nachname="Kleinherne" text="Kleinherne hält Naz taktisch am Trikot." />
                      <Comment minute={90} extra_time={1} text="Um Sechs Minuten wird der Klassiker verlängert." />
                      <Comment minute={88} text="Von rechts versucht es Naz mit einem frechen Schlenzer, hinter dem zu wenig Druck steckt." />
                      <Event minute={86} team="Away" headline="Chance für Deutschland" text="Die gerade eingewechselte Endemann bringt von rechts eine kurze Flanke auf Cerci in den Fünfmeterraum. Hampton kommt raus und bedrängt die Stürmerin so, dass sie nicht mehr als eine Ecke bekommt." />
                      <EventSubstitution minute={82} team="Home" player_in_vorname="Maya" player_in_nachname="Le Tissier" player_out_vorname="Lucy" player_out_nachname="Bronze" />
                      <EventSubstitution minute={82} team="Home" player_in_vorname="Jessica" player_in_nachname="Naz" player_out_vorname="Beth" player_out_nachname="Mead" />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Vivien" player_in_nachname="Endemann" player_out_vorname="Klara" player_out_nachname="Bühl" />
                      <EventGoal minute={81} team="Home" score="3:4" vorname="Lucy" nachname="Bronze" text="Und wieder ist der Ball im Tor - diesmal zählt er auch. Berger rutscht eine harmlose Freistoßflanke durch die Hände, genau vor die Füße von Lucy Bronze, die aus kurzer Distanz kein Problem hat den erneuten Anschlusstreffer zu machen." />
                      <Comment minute={79} text="Das Spiel muss unterbrochen werden, weil Senß im Mittelfeld umgeknickt ist und behandelt werden muss. Sie kann aber weiterspielen." />
                      <Event minute={77} headline="Abseitstor für England" text="Aus dem Nichts ist der Ball im deutschen Tornetz. Hemp stand vor ihrem Abschluss aber zweifellos im Abseits." />
                      <Comment minute={76} text="Deutschland wiederum fährt trotz der erneuten zwei Tore Führung immer weiter hoch und läuft mit drei Spielerinnen hoch an." />
                      <Comment minute={74} text="Offensiv kommt von England in der zweiten Hälfte gar nichts. " />
                      <EventSubstitution minute={73} team="Home" player_in_vorname="Chloe" player_in_nachname="Kelly" player_out_vorname="Alessia" player_out_nachname="Russo" />
                      <EventGoal minute={72} team="Away" score="2:4" vorname="Sara" nachname="Däbritz" text="Däbritz übernimmt die Aufgabe und verwandelt gezielt und mit viel Kraft halbhoch rechts ins Eck." />
                      <Event minute={71} headline="Elfmeter für Deutschland" text="Der zweite Elfmeter für Deutschland. Bühl bringt einen Freistoß ungefährlich hinein, aber Hampton kann den Ball nicht festhalten. Im Nachhinein holt Wolter aus, wird aber im Schuss von Russo am Fuß getroffen." />
                      <EventSubstitution minute={67} team="Away" player_in_vorname="Sophia" player_in_nachname="Kleinherne" player_out_vorname="Sara" player_out_nachname="Doorsoun" />
                      <Event minute={64} team="Away" headline="Chance für Deutschland" text="Cerci fängt einen Ball ab und überlässt dann Dallmann. Rauch bekommt den Ball zentral aufgelegt und zwingt Hampton aus ca. 15 Metern zu einem ganz hohen Sprung." />
                      <EventSubstitution minute={62} team="Away" player_in_vorname="Sara" player_in_nachname="Däbritz" player_out_vorname="Sjoeke" player_out_nachname="Nüsken" />
                      <EventSubstitution minute={62} team="Away" player_in_vorname="Pia-Sophie" player_in_nachname="Wolter" player_out_vorname="Giulia" player_out_nachname="Gwinn" />
                      <EventSubstitution minute={61} team="Home" player_in_vorname="Alex" player_in_nachname="Greenwood" player_out_vorname="Leah" player_out_nachname="Williamson" />
                      <Event minute={59} team="Away" headline="Chance für Deutschland" text="Jule Brand mit einem unglaublichen Solo: Erst läuft sie zwischen Bright und Walsh durch und zieht dann nach innen an Bronze vorbei. Im Strafraum entscheidet sie sich dagegen, die links frei mitgelaufene Cerci mitzunehmen und schießt zu zentral auf Hampton." />
                      <Comment minute={55} text="Gwinn bekommt rechts mal mehr Platz und bringt den Ball hoch hinein. Dort versuchen sowohl Cerci als auch Dallmann ihr Glück - ohne Erfolg." />
                      <Comment minute={53} text="Das Spiel verläuft bisher ruhiger und kontrollierter als noch in der ersten Halbzeit." />
                      <Event minute={50} headline="Abseitstor für Deutschland" text="Dallmann steckt link auf Cerci durch, die im Abseits steht. Brand trifft nach Zuspiel von Dallmann, die den Ball von Cerci zurückbekommt zwar, die Fahne geht aber direkt hoch." />
                      <Comment minute={48} text="Hemp setzt sich gegen Gwinn durch und legt in den Rückraum auf Stanway, der der Ball verspringt." />
                      <EventSubstitution minute={46} team="Away" player_in_vorname="Selina" player_in_nachname="Cerci" player_out_vorname="Giovanna" player_out_nachname="Hoffmann" />
                      <EventSubstitution minute={46} team="Away" player_in_vorname="Felicitas" player_in_nachname="Rauch" player_out_vorname="Sarai" player_out_nachname="Linder" />
                      <EventSubstitution minute={46} team="Home" player_in_vorname="Jessica" player_in_nachname="Park" player_out_vorname="Ella" player_out_nachname="Toone" />
                      <Comment minute={46} text="Weiter geht es mit in Wembley." />

                      <Event headline="Halbzeit" text="Eine extrem unterhaltsame und sehr offensiv geprägte erste Hälfte geht zu Ende. Beide Mannschaften spieln fast ausschließlich nach vorne, wo Deutschland früh dreifach erfolgreich war. Nach dem schnellen Doppelpack von Stanway hat England nur noch auf den Ausgleich gedrängt und Deutschland, bis auf die letzten Minuten, nicht zu Chancen kommen lassen." />
                  
                      <Event minute={45} extra_time={4} team="Away" headline="Chance für Deutschland" text="Auch mal eine Option. Dallmann sieht, dass Hampton etwas weiter vor ihrem Tor steht und probiert es mal mit einem Schuss aus der dritten Reihe. Der Ball wird immer länger und die Torhüterin vom FC Chelsea kann ihn nur gerade so auf die Latte und zur Ecke klären." />
                      <Event minute={45} extra_time={2} team="Away" headline="Chance für Deutschland" text="Nüsken verliert den Ball erst zentral vor dem Strafraum, bevor sie ihn direkt zurück gewinnt. Links im Strafraum bedient sie Linder, die aus sehr spitzem Winkel Hampton trifft." />
                      <Comment minute={45} extra_time={1} text="Es gibt fünf Minuten extra in der wieder offeneren ersten Hälfte." />
                      <Comment minute={43} text="Jetzt mal wieder die erste Offensivaktion der Gäste. Bühl zieht von links nach innen, wo der Schuss von der Strafraumgrenze geblockt wird." />
                      <Comment minute={41} text="Die Deutschen sind jetzt komplett gefangen und kommen gar nicht mehr ins Spiel. England drückt immer stärker auf den Ausgleich." />
                      <Event minute={39} team="Home" headline="Chance für England" text="Toone verpasst den sicheren Ausgleich! Doorsoun verspringt der Ball und so landet der Querpass, wie heute auf beiden Seiten schon häufiger, bei der Angreiferin, die frei aufs Tor zu läuft. Von der Strafraumgrenze verfehlt die Spielerin von Man United rechts um Zentimeter." />
                      <Comment minute={37} text="Fast die nächste gute Chance. Diesmal kommt ein Rückpass von Doorsoun kürzer als gewollt zu Berger, die mit Mühe vor Mead retten kann." />
                      <EventGoal minute={36} score="2:3" team="Home" vorname="Georgia" nachname="Stanway" text="Und schon sind die Engländerinnen zurück im Spiel! Die linke Seite der Deutschen ist komplett offen. Mead hinterläuft die Abwehr mit Ball und spielt flach in die Mitte, wo Stanway zum Doppelpack einschiebt." />
                      <EventGoal minute={33} score="1:3" team="Home" vorname="Georgia" nachname="Stanway" text="Georgia Stanway übernimmt die Verantwortung und verwandelt sehr souverän in die linke untere Ecke. Auch Berger war dorthin unterwegs, allerdings etwas zu spät." />
                      <Event minute={33} headline="Elfmeter für England" text="Nach einem sehr kurzen Check gibt es den Elfmeter. Eine vertretbare Entscheidung." />
                      <Comment minute={32} text="Dass der VAR heute auch bei den Frauen ausprobiert wird, nimmt die spanische Schiedsrichterin auch direkt in Anspruch und schaut es sich nochmal draußen an." />
                      <Comment minute={32} text="Die Engländerinnen reklamieren Handspiel von Gwinn bei Flanke von Hemp." />
                      <EventGoal minute={29} score="0:3" team="Away" vorname="Klara" nachname="Bühl" text="Hoffmann mit einem langen Pass von der Mittellinie zwischen der englischen Abwehr durch. Links im Strafraum nimmt Bühl den Ball erst mit links an, legt sich ihn dann auf den rechten Fuß, vorbei an Bronze, und schließt mit Wucht ins linke Eck ab." />
                      <Comment minute={27} text="Die Engländerinnen scheinen nicht besonders gut damit klar zukommen, dass Wücks Team das Tempo aus dem Spiel genommen hat." />
                      <Comment minute={25} text="Fast die Wiederholung des 1:0. Wieder misslingt ein Querpass vor dem eigenen Sechzehner. Diesmal ist Hampton die Schnellste, die reagiert und klärt vor Dallmann." />
                      <Comment minute={23} text="Die deutsche Mannschaft versucht das Spiel jetzt etwas ruhiger zu machen und von hinten heraus aufzubauen. Die Engländerinnen pressen aber hoch dagegen und so kommt es immer wieder zu Fehlpässen im Mittelfeld." />
                      <Event minute={19} team="Home" headline="Chance für England" text="Mead gewinnt den Ball neben dem deutschen Strafraum. Russo trifft die folgende Flanke im Fall nicht kontrolliert mit dem Kopf. Doorsouns Bein macht den Ball dann nochmal gefährlich und leitet ihn knapp am Tor vorbei." />
                      <Comment minute={16} text="Das Spiel bietet kaum Verschnaufpausen. Beide Teams sind offensiv sehr engagiert, ist England im Ballbesitz, stehen sie mit 10 Spielerinnen in der deutschen Hälfte und umgekehrt dasselbe." />
                      <Event minute={13} team="Home" headline="Chance für England" text="Und jetzt wieder die Engländerinnen mit einer Riesenchance. Russo fängt einen Fehlpass vor dem deutschen Strafraum ab und trifft den linken Pfosten." />
                      <EventGoal minute={11} score="0:2" team="Away" vorname="Giulia" nachname="Gwinn" text="Auf der anderen Seite zählt der Treffer. Klara Bühl spielt von der linken Seite einmal über das gesamte Spielfeld auf Gwinn, die den gesamten Platz frei vor sich hat. Mit einem perfekt platzierten Schuss ins lange Eck erhöht sie auf 2:0." />
                      <Event minute={10} headline="Abseitstor für England" text="Walsh hebt den Ball über die deutsche Hintermannschaft in den Strafraum auf Toone. Mit einem Hackenpass bedient sie Russo, die ins linke obere Eck vollendet. Die Fahne geht direkt hoch, weil Toone leicht im Absatz stand." />
                      <Comment minute={7} text="Die Engländerinnen machen nach dem frühen Gegentor viel Druck nach vorne. Bisher kamen nur zwei ungefährliche Ecken bei heraus." />
                      <EventGoal minute={3} score="0:1" team="Away" vorname="Giulia" nachname="Gwinn" text="Hampton ist auf dem Weg in die richtige Ecke, kommt aber nicht an den sehr gut platzierten Schuss von Gwinn ins linke Eck." />
                      <EventCard minute={2} card_type="Gelb" team="Home" vorname="Millie" nachname="Bright" text="Bright sieht für das Foul zudem die gelbe Karte."/>
                      <Event minute={2} headline="Elfmeter für Deutschland" text="Hoffmann fängt einen ungenauen Querpass von Williamson ab. Sie schickt die in die Tiefe laufende Dallmann frei auf das Englische Tor zu, die im Sechzehner von Bright zu Fall gebracht wird." />
                      <Comment minute={2} text="Hemp fängt einen kurzen Anschlag von Berger in der Deutschen Hälfte ab, verpasst aber die Chance abzuspielen und verliert den Ball auf der linken Seiten wieder." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Der Klassiker England gegen Deutschland in Wembley ist angepfiffen."/>
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}
export default EnglandDeutschland251024;