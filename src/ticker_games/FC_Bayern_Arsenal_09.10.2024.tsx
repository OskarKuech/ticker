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
import EventSubstitution from "../components_ticker/EventSubstitution";

import teamColors from '../utils/teamColors.json';
import { TeamColorProvider } from '../utils/TeamColorContext';
import EventCard from "../components_ticker/EventCard";

const FCBayernArsenal091024 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'FC Bayern';
    const awayTeam = 'Arsenal';
    const stadium = 'Bayern Campus';
    const league = 'Frauen Champions League';
    const matchday = '1. Spieltag';
    const result = '5:2'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Maria Luisa", nachname: "Grohs" },
      { nummer: 4, vorname: "Glodis Perla", nachname: "Viggosdottir" },
      { nummer: 6, vorname: "Tuva", nachname: "Hansen" },
      { nummer: 7, vorname: "Giulia", nachname: "Gwinn" },
      { nummer: 9, vorname: "Jovana", nachname: "Damnhanovic" },
      { nummer: 12, vorname: "Sydney", nachname: "Lohmann" },
      { nummer: 17, vorname: "Klara", nachname: "Bühl" },
      { nummer: 21, vorname: "Pernille", nachname: "Harder" },
      { nummer: 25, vorname: "Sarah", nachname: "Zadrazil" },
      { nummer: 30, vorname: "Carolin", nachname: "Simon" },
      { nummer: 31, vorname: "Georgia", nachname: "Stanway" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 32, vorname: "Ena", nachname: "Magmutovic" },
      { nummer: 2, vorname: "Linda", nachname: "Sembrant" },
      { nummer: 10, vorname: "Linda", nachname: "Dallmann" },
      { nummer: 11, vorname: "Lea", nachname: "Schüller" },
      { nummer: 14, vorname: "Alara", nachname: "Sehitler" },
      { nummer: 16, vorname: "Julia", nachname: "Zigiotte" },
      { nummer: 22, vorname: "Dagou", nachname: "Doucoure" },
      { nummer: 24, vorname: "Weronika", nachname: "Zawistowska" },
      { nummer: 26, vorname: "Samantha", nachname: "Kerr" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Manuela", nachname: "Zinsberger" },
      { nummer: 2, vorname: "Emily", nachname: "Fox" },
      { nummer: 5, vorname: "Laia", nachname: "Codina" },
      { nummer: 6, vorname: "Leah", nachname: "Williamson" },
      { nummer: 8, vorname: "Mariona", nachname: "Caldentey" },
      { nummer: 10, vorname: "Kim", nachname: "Little" },
      { nummer: 11, vorname: "Katie", nachname: "McCabe" },
      { nummer: 12, vorname: "Frida", nachname: "Maanum" },
      { nummer: 13, vorname: "Lia", nachname: "Wälti" },
      { nummer: 19, vorname: "Caitlin", nachname: "Foord" },
      { nummer: 25, vorname: "Stina", nachname: "Blackstenius" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 14, vorname: "Daphne", nachname: "van Domselaar" },
      { nummer: 40, vorname: "Naomi", nachname: "Williams" },
      { nummer: 3, vorname: "Lotte", nachname: "Wubben-Moy" },
      { nummer: 7, vorname: "Steph", nachname: "Catley" },
      { nummer: 9, vorname: "Beth", nachname: "Mead" },
      { nummer: 16, vorname: "Rosa", nachname: "Kafaji" },
      { nummer: 22, vorname: "Kathrine", nachname: "Kühl" },
      { nummer: 23, vorname: "Alessia", nachname: "Russo" },
      { nummer: 32, vorname: "Kyra", nachname: "Cooney-Cross" },
      { nummer: 53, vorname: "Vivienne", nachname: "Lia" },
      { nummer: 56, vorname: "Freya", nachname: "Godfrey" },
      { nummer: 62, vorname: "Katie", nachname: "Reid" }

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
                      <Coaches nameCoachHome="Alexander Straus" nameCoachAway="Jonas Eidevall" />
                      <Referee nameReferee="Lina Lehtovaara" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Comment minute={90} extra_time={3} icon="whistle" headline="Abpfiff" text="Dank Hattrick von Harder feiern die Bayern einen Einstand nach Maß in die Todesgruppe C der Champions League. Nach weitgehend schwacher erster Hälfte zeigen sie in den zweiten 45 Minuten dann ihre gesamte Offensivstärke und lassen Arsenal kaum mehr am Spiel teilnehmen." />
                      <EventSubstitution minute={90} extra_time={2} team="Home" player_in_vorname="Julia" player_in_nachname="Zigiotti" player_out_vorname="Georgia" player_out_nachname="Stanway" />
                      <Comment minute={90} extra_time={1} text="Gwinn bleibt nach Zweikampf mit Kafaji auf dem Boden sitzen und muss an der Hand behandelt werden." />
                      <Comment minute={90} extra_time={1} text="Es werden zwei Minuten nachgespielt." />
                      <Comment minute={89} text="Arsenal bekommt nochmal eine Ecke, die Grohs wegfaustet. Den Nachschuss aus der zweiten Reihe trifft Caldentey nicht richtig und er geht weit über das Tor." />
                      <EventSubstitution minute={87} team="Home" player_in_vorname="Linda" player_in_nachname="Sembrant" player_out_vorname="Pernille" player_out_nachname="Harder" />
                      <EventGoal minute={86} team="Home" vorname="Pernille" nachname="Harder" score="5:2" text="Aus zwei mach drei - Hattrick von Harder. Gwinn bekommt den Ball perfekt von Dallmann rechts am Strafraum zugespielt und flankt flach in die Mitte. Dort scheitert Harder erst mit ihrem Schuss an Zinsberger, die den Ball aber nur vor sich abtropfen lässt. Im zweiten Versuch macht Harder es dann besser und der Ball zappelt wieder im Netz." />
                      <Comment minute={84} text="Bühl hat auf der linken Außenbahn sehr viel Platz und legt nach überlegen zentral auf Stanway. Diese denkt ebenfalls nach - einen Augenblick zu lange, und der Ball ist weg." />
                      <Comment minute={82} text="Es wird kurz brenzlig im Strafraum der Bayern. Kafaji kommt im Fünfer vor dem leeren Tor an den Ball, kann diesen aber nicht vor dem Pfiff der Schiedsrichterin kontrollieren. Er soll vorher wohl knapp im Seitenaus gewesen sein." />
                      <Comment minute={81} text="Die Gunners wirken nach den beiden schnellen Gegentoren etwas irritiert und schockiert. Die bisher sehr präzisen Pässe aus dem Mittelfeld werden ungenauer." />
                      <EventSubstitution minute={79} team="Away" player_in_vorname="Kyra" player_in_nachname="Coonie-Cross" player_out_vorname="Lia" player_out_nachname="Wälti" />
                      <EventSubstitution minute={79} team="Away" player_in_vorname="Rosa" player_in_nachname="Kafaji" player_out_vorname="Caitlin" player_out_nachname="Foord" />
                      <EventGoal minute={78} team="Home" vorname="Pernille" nachname="Harder" score="4:2" text="Die doppelte Harder! Wieder kommt der Ball hoch und zentral in den Strafraum, diesmal aus dem Spiel heraus von Bühl. Die Flanke landet auf der erneut goldrichtig stehenden Harder, die, wie erst 5 Minuten zuvor, frei zum Kopfball kommt." />
                      <Comment minute={77} text="Arsenal versucht nach dem erneuten Rückstand wieder höher aufzubauen, macht damit aber auch Räume für die frische Offensive der Bayern auf." />
                      <EventGoal minute={73} team="Home" vorname="Pernille" nachname="Harder" score="3:2" text="Und daraus folgt das nächste Tor nach einem Eckball. Simon bringt die Ecke von rechts weg vom Tor auf den Elfmeterpunkt. Von hinten kommt Harder unbedrängt und trifft platziert ins linke Eck." />
                      <Comment minute={72} text="Harder und Schüller erkämpfen sich kurz vor der Grundlinie im 2-gegen-1 den Ball und können eine Ecke herausholen." />
                      <EventSubstitution minute={70} team="Home" player_in_vorname="Samantha" player_in_nachname="Kerr" player_out_vorname="Sarah" player_out_nachname="Zadrazil" />
                      <EventSubstitution minute={70} team="Home" player_in_vorname="Linda" player_in_nachname="Dallmann" player_out_vorname="Sydney" player_out_nachname="Lohmann" />
                      <EventSubstitution minute={70} team="Home" player_in_vorname="Lea" player_in_nachname="Schüller" player_out_vorname="Jovana" player_out_nachname="Damnjanovic" />
                      <Comment minute={67} text="Grohs muss nach einem hohen Rückpass von Gwinn aus ihrem Tor kommen und mit dem Kopf mitspielen, um vor Russo zu retten." />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Alessia" player_in_nachname="Russo" player_out_vorname="Stina" player_out_nachname="Blackstenius" />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Steph" player_in_nachname="Catley" player_out_vorname="Katie" player_out_nachname="McCabe" />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Beth" player_in_nachname="Mead" player_out_vorname="Frida" player_out_nachname="Maanum"/>
                      <EventGoal minute={65} team="Away" vorname="Laia" nachname="Codina" score="2:2" text="Die Führung hält nicht lange an. Nach einer Ecke von rechts steht Codina zwischen mehreren Müncherinnen, die alle nicht hoch genug springen. Aus fünf Metern köpft die Spanierin maßgenau links ins Tor." />
                      <Comment minute={62} text="Bei den Bayern geht viel über Pernille Harder. Ihr Schuss von der linken Strafraumgrenze landet abgefälscht im Außennetz." />
                      <Comment minute={59} text="Arsenal steht nach dem Rückstand wieder höher an der Mittellinie." />
                      <EventGoal minute={56} team="Home" vorname="Sydney" nachname="Lohmann" score="2:1" text="Und nun belohnen sich die Bayern für den guten Start in den zweiten Spielabschnitt. Aus der eigenen Hälfte geht es schnell nach vorne, wo Bühl zentral auf die rechts mitlaufende Lohmann vorlegt. Aus gut 11 Metern schließt diese aus halbrechter Position ins rechte untere Eck ab." />
                      <Comment minute={55} text="Wieder kommt Simon nach gutem Diagonalball von Stanway aus halblinker Position zum Abschluss. " />
                      <Comment minute={52} text="Die Bayern starten mit sehr viel mehr Ballbesitz und Pressing in die zweite Halbzeit. Arsenal schaut bisher nur in der eigenen Hälfte zu." />
                      <Event minute={49} headline="Chance für Bayern" team="Home" text="Die nächste gute Chance für die Bayern. Gwinn spielt den Ball zu Lohmann, die von rechts in aller Ruhe zur Flanke ansetzen kann. In der Mitte setzt sich Harder im Kopfballduell durch und macht den Ball mit einem Aufsetzer zwar gefährlich, aber etwas zu ungenau am rechten Pfosten vorbei." />
                      <Comment minute={48} text="Bei einem langen Schlag an den Strafraum kommt Zinsberger raus und klärt knapp vor Harder." />
                      <Event minute={46} headline="Chance für Bayern" team="Home" text="Die Bayern machen es direkt schnell. Harder läuft tief in den Sechzehner und spielt zurück auf Caroline Simon. Von der linken Strafraumgrenze schießt sie zwischen zwei Verteidigerinnen durch und zwingt Zinsberger, sich lang zu machen, um den Ball am rechten Pfosten vorbei zu lenken." />
                      <Comment minute={46} text="Ohne Wechsel eintragen zu müssen, gibt Lehtovaara die zweite Hälfte frei." />

                      <Event headline="Halbzeit" text="Die Londonerinnen haben das Spiel nach umkämpften 10 Minuten an sich gerissen und sind nach einer halben Stunde verdient in Führung gegangen. Erst danach haben sich die Bayern offensiv herangetastet und konnten mit ihrer zweiten guten Torchance zum ‘perfekten Zeitpunkt’ kurz vor der Pause zum 1:1 ausgleichen." />

                      <Comment minute={45} extra_time={1} text="Die erste Halbzeit wird um 3 Minuten verlängert." />
                      <EventGoal minute={43} team="Home" vorname="Glodis Perla" nachname="Viggosdottir" score="1:1" text="Mit der zweiten richtigen Chance gleichen die Bayern aus! Stanway schlägt den Ball von halbrechts in den, durch die vorherige Ecke, noch gut besetzten Strafraum. Auf Höhe des zweiten Pfostens steht Viggosdottir, die sich im Luftduell gegen Blockstenius durchsetzt und den Ball, mit Hilfe des Querbalkens, neben den rechten Pfosten ins Tor setzt." />
                      <Event minute={42} headline="Chance für Bayern" team="Home" text="Die erste richtig gute Chanc für die Bayern: Gwinn wird rechts im Strafraum angespielt und zieht aus etwas spitzem Winkel direkt ab. Zinsberger muss die Fäuste hochreißen, um den Ball abzuwehren." />
                      <Comment minute={42} text="Den folgenden Freistoß bringt Bühl zentral in den Strafraum, wo keine der eigenen Spielerinnen steht." />
                      <EventCard minute={41} vorname="Laia" nachname="Codina" team="Away" card_type="Gelb" text="Harder wird hoch angespielt und möchte hinter die Abwehr laufen. Codina hält sie kurz, wodurch Harder ihr Gleichgewicht verliert und so Fall kommt." />
                      <Comment minute={39} text="Es ist nach dem Tor der Gunners deutlich mehr Ruhe ins Spiel eingekehrt. Die Gäste stehen nicht mehr so hoch und geben den Bayern mehr Platz, den diese aber weiterhin nicht feährlich nutzen können. " />
                      <Comment minute={34} text="Die Hausherrinnen stehen nun wieder deutlich höher als noch vor dem Tor, bekommen den Ball bisher aber nicht genau genug nach vorne." />
                      <Comment minute={32} text="Die Bayern versuchen es nach dem Rückstand direkt mit Lohmann und Zadrazil über rechts, kommen aber nicht an der  englische Defensive vorbei." />
                      <EventGoal minute={30} team="Away" vorname="Mariona" nachname="Caldentey" score="0:1" text="Nach einer halben Stunde ist es geschehen. Wieder kommen die Gunners in der gegnerischen Hälfte ohne Gegnerdruck zum Aufbauen und McCabe auf der linken Außenbahn frei zum Flanken. In der Mitte hebt Caldentey den linken Fuß und setzt den Ball in die rechte Torecke." />
                      <Comment minute={28} text="Nach längerer Behandlung geht das Spiel für Gwinn weiter." />
                      <Comment minute={26} text="Gwinn geht nach Zweikampf mit Foord am Boden liegen und muss behandelt werden." />
                      <Comment minute={25} text="Blackstenius wird der Ball mit der Fußsspitze von Caldentey in den Strafraum durchgesteckt. Die Fahne geht schnell hoch, nachdem Grohs den Schuss mit dem Bein pariert hat." />
                      <Comment minute={22} text="Bühl erkämpft sich mit starkem Anlaufen den Ball von Caldentey. Den Pass ins Zentrum kann Damnjanovic dann nicht kontrolliert annehmen." />
                      <Event minute={20} headline="Chance für Arsenal" team="Away" text="Fast die Führung für die Gäste. McCabe schlägt einen Eckball von rechts an den ersten Pfosten. Der Ball dreht sich gefährlich vor das Tor, wo die Bayern sich das Leben selbst schwer machen und nur mit Mühe vor der Linie retten können." />
                      <Comment minute={19} text="Simon spielt den Ball im Aufbau direkt in den Fuß von Caldentey. Arsenal braucht dann zu lange, um zum Abschluss zu kommen." />
                      <Comment minute={18} text="Foord setzt sich auf der linken Seite durch, lässt Gwinn ins Leere laufen und kommt mit einem Haken aus linker Position zum Abschluss. Der Schuss geht aber links am Tor vorbei." />
                      <Comment minute={16} text="Arsenal drängt die Bayern immer weiter in die eigene Hälfte und baut mit der Abwehrkette auf Höhe der Mittellinie das Spiel unbedrängt auf." />
                      <Event minute={14} headline="Chance für Arsenal" text="McCabe bringt einen Freistoß aus rechter Position in den Strafraum, wo sich Codina lösen kann und den Ball mit gestrecktem Bein ohne genügend Druck aufs Tor bringt." />
                      <Comment minute={12} text="Das Spiel hat sich von der intensiven Anfangsphase erholt. Arsenal versucht mit vielen Pässen das Spiel aufzubauen, kommt aber nicht weit in die bayerische Hälfte." />
                      <Event headline="Chance für Arsenal" team="Away" minute={10} text="Auf der Gegenseite versucht Maanum es aus ähnlicher Position, mit dem selben Ergebnis und keiner Gefahr für Grohs." />
                      <Event headline="Chance für Bayern" team="Home" minute={9} text="Georgia Stanway versucht es mit einem zentralen Distanzschuss aus 19 Meter. Der erste, nicht platzierte, Torschuss des Spiels ist leichte Beute für Zinsberger" />
                      <Comment minute={8} text="Das Spiel ist in der Anfangsphase sehr umkämpft. Beide Mannschaften möchten den Ball haben und laufen sich gegenseitig hoch an. Zu einer Torchance ist aber noch keine der Teams gekommen." />
                      <Comment minute={5} text="Harder dribbelt sich an drei Verteidigerinnen in den Sechzehner durch, verpasst dort aber die Chance zum Abschluss.. Bühl versucht es im zweiten Versuch nochmal, legt sich den Ball aber ein Stück zu weit vor." />
                      <Comment minute={4} text="Damnjanovic mit einem ungenauem Pass im Mittelfeld, den die Gunners abfangen. Simon erobert ihn schnell zurück und verhindert Schlimmeres." />
                      <Comment minute={2} text="Bayern macht es nach Ballgewinn direkt über die rechte Seite schnell. Giulia Gwinn’s Flanke landet im Nichts." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Das erste Spiel in Gruppe C beginnt mit Anstoß Arsenal von links nach rechts."/>
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}

export default FCBayernArsenal091024;