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
import EventSubstitution from "../components_ticker/EventSubstitution";

const TEMPLATE = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Schweiz';
    const awayTeam = 'Deutschland';
    const stadium = 'Wembley';
    const league = 'Frauen-Nationalteam Freundschaftsspiel';
    const matchday = '7. Spieltag';
    const result = '0:6'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 21, vorname: "Elvira", nachname: "Herzog" },
      { nummer: 2, vorname: "Julia", nachname: "Stierli" },
      { nummer: 5, vorname: "Noelle", nachname: "Maritz" },
      { nummer: 7, vorname: "Sydney", nachname: "Schertenleib" },
      { nummer: 8, vorname: "Nadine", nachname: "Riesen" },
      { nummer: 9, vorname: "Ana-Maria", nachname: "Crnogorcevic" },
      { nummer: 11, vorname: "Coumba Louisa", nachname: "Sow" },
      { nummer: 14, vorname: "Smilla", nachname: "Vallotto" },
      { nummer: 18, vorname: "Viola", nachname: "Calligaris" },
      { nummer: 20, vorname: "Iman", nachname: "Beney" },
      { nummer: 23, vorname: "Alisha", nachname: "Lehmann" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 1, vorname: "Nadine", nachname: "Böhi" },
      { nummer: 12, vorname: "Livia", nachname: "Peng" },
      { nummer: 3, vorname: "Lara", nachname: "Marti" },
      { nummer: 4, vorname: "Larina", nachname: "Baumann" },
      { nummer: 6, vorname: "Riola", nachname: "Xhemaili" },
      { nummer: 13, vorname: "Stephanie", nachname: "Waeber" },
      { nummer: 15, vorname: "Noemi", nachname: "Ivelj" },
      { nummer: 16, vorname: "Sandrine", nachname: "Mauron" },
      { nummer: 17, vorname: "Seraina", nachname: "Piubel" },
      { nummer: 19, vorname: "Lydia", nachname: "Andrade" },
      { nummer: 20, vorname: "Aurélie", nachname: "Csillag" },
      { nummer: 22, vorname: "Meriam", nachname: "Terchoun" },
      { nummer: 24, vorname: "Alena", nachname: "Bienz" }
    ];

    const awayTeamPlayers = [
      { nummer: 12, vorname: "Sophia", nachname: "Winler" },
      { nummer: 2, vorname: "Sarai", nachname: "Linder" },
      { nummer: 3, vorname: "Kathrin", nachname: "Hendrich" },
      { nummer: 6, vorname: "Janina", nachname: "Minge" },
      { nummer: 7, vorname: "Giulia", nachname: "Gwinn" },
      { nummer: 9, vorname: "Sjoeke", nachname: "Nüsken" },
      { nummer: 11, vorname: "Lea", nachname: "Schüller" },
      { nummer: 16, vorname: "Linda", nachname: "Dallmanmn" },
      { nummer: 19, vorname: "Klara", nachname: "Bühl" },
      { nummer: 20, vorname: "Elisa", nachname: "Senß" },
      { nummer: 25, vorname: "Selina", nachname: "Cerci" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 1, vorname: "Stina", nachname: "Johannes" },
      { nummer: 21, vorname: "Ena", nachname: "Mahmutovic" },
      { nummer: 4, vorname: "Sophia", nachname: "Kleinherne" },
      { nummer: 5, vorname: "Pia-Sophie", nachname: "Wolter" },
      { nummer: 10, vorname: "Laura", nachname: "Freigang" },
      { nummer: 14, vorname: "Lisanne", nachname: "Gräwe" },
      { nummer: 15, vorname: "Alara", nachname: "Sehitler" },
      { nummer: 17, vorname: "Felicitas", nachname: "Rauch" },
      { nummer: 18, vorname: "Cora", nachname: "Zicai" },
      { nummer: 18, vorname: "Sara", nachname: "Doorsoun" },
      { nummer: 18, vorname: "Giovanna", nachname: "Hoffmann" },
      { nummer: 18, vorname: "Vivien", nachname: "Endemann" }
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
                      <Coaches nameCoachHome="Pia Sundhage" nameCoachAway="Christian Wück" />
                      <Referee nameReferee="Zulema Gonzalez Gonzalez" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                  <Event headline="" text="Die Schweiz wiederum wird am Dienstag in Sheffield gegen eine englische Mannschaft das Jahr beenden, die in der letzten Länderspielpause ebenfalls Deutschland unterlegen war." /> 
                  <Event headline="" text="Das Länderspieljahr wird am Montag dann in Bochum bei dem Freundschaftsspiel gegen Italien sein Ende finden. Nach der Winterpause geht es dann mit den ersten Spielen der Nations League weiter, ehe im Sommer hier in der Schweiz die Europameisterschaft steigen wird." />
                  
                  <Comment minute={90} extra_time={3} icon="whistle" headline="Abpfiff" text="Nach einer kontrollierten, aber offensiv ausbaufähigen ersten Hälfte schießt die deutsche Mannschaft in der zweiten ein Feuerwerk ab. Die Einwechslungen von Wolter, Freigang und Zicai zeigen Wirkung gegen eine doch recht überfordert wirkende Schweiz. Am Ende geht der Sieg ganz klar in Ordnung, auch wenn die Höhe am Ende vielleicht ein bis zwei Tore zu schlecht für die Hausherrinnen aussieht." />
                  <EventGoal minute={90} extra_time={1} team="Away" score="0:6" vorname="Lea" nachname="Schüller" text="Und die nutzt Deutschland um das halbe Dutzend voll zu machen. Exakt wie Gräwe läuft auch Freigang die Ballführende hoch an und legt auf die rechts mitgelaufene Endemann. Dieses Mal probiert sie es nicht selber, sondern flankt hoch vor den Fünfer, wo Schüller hoch steigt und zu ihrem zweiten Treffer einköpft." />
                  <Comment minute={90} extra_time={1} text="Es gibt noch drei Minuten extra." />
                  <Event minute={90} team="Away" headline="Chance für Deutschland" text="Gräwe spekuliert richtig auf einen linearen Pass von Herzog. Sie stürmt von hinten heran und klaut sich den Ball von Calligaris. Sie legt nach rechts auf Endemann, die unproblematisch für Herzog, ins lange Eck schießt." />
                  <Comment minute={87} text="Piubel verliert den Ball vor dem deutschen Strafraum. Mauron geht aber direkt auf Zicai zu und holt sich das Spielgerät wieder. Mit Pass auf die Außen möchte sie Terchoun mitnehmen, deren Flanke nicht bei Csillag ankommt." />
                  <EventSubstitution minute={84} team="Home" player_in_vorname="Meriame" player_in_nachname="Terchoun" player_out_vorname="Nadine" player_out_nachname="Riesen" />
                  <Comment minute={83} text="Schüller spielt den Ball zielgenau von der Mitte rechts in den Lauf von Endemann. Die Wolfsburgerin bringt den Ball zwar wieder gut in die Mitte, dort steht aber niemand der Herzog Gefahr machen könnte." />
                  <Comment minute={82} text="Wie schon in der ersten Hälfte rettet Hendrich nach einem langen Ball der Schweizerinnen. Diesmal macht sich Piubel auf die Reise, bevor die Wolfsburgerin sie einholt." />
                  <Comment minute={80} text="Nach der furiosen Viertelstunde muss auch Deutschland mal einen Gang zurückfahren. Den Ball verwalten sie aber weiterhin kontrolliert in den eigenen Reihen." />
                  <EventSubstitution minute={77} team="Away" player_in_vorname="Lisanne" player_in_nachname="Gräwe" player_out_vorname="Elisa" player_out_nachname="Senß" />
                  <Comment minute={75} text="Und auch hier spielt sich die eingewechselte Csillag direkt in den Vordergrund. Über rechts dribbelt sie sich in den Strafraum, wo Minge zur Ecke klärt. Diese kann Endemann mit dem Kopf entschärfen." />
                  <EventSubstitution minute={74} team="Home" player_in_vorname="Aurelie" player_in_nachname="Calligaris" player_out_vorname="Ana-Maria" player_out_nachname="Crnogorcevic" />
                  <EventGoal minute={73} team="Away" score="0:5" vorname="Cora" nachname="Zicai" text="Erstes Länderspiel und erstes Länderspieltor an ihrem Geburtstag: Ein perfekter Tag für Zicai! Und wieder geht es über rechts mit der Frankfurter Torfabrik Freigang, die den Ball von Wolter genau in den Lauf bekommt. Kurz vor der Grundlinie sieht sie die frei stehende Zicai im Zentrum, von wo sie nur noch einschieben muss. Dass Calligaris den Ball dann auch noch unhaltbar abfälscht passt zum Pech der Hausherrinnen." />
                  <Comment minute={71} text="Deutschland kann auf der rechten Außenbahn mit Wolter und Endemann gerade machen was sie möchten. Gegnerdruck kommt dort keiner mehr. Die Herausgaben oder Kombinationen nach innen sind aber nicht präzise genug." />
                  <Comment minute={69} text="Die Schweiz ist sichtlich von den Gegentoren getroffen worden. Das Defensivspiel wirkt jetzt nicht mehr so geordnet und souverän wie noch in der ersten Hälfte." />
                  <EventSubstitution minute={67} team="Away" player_in_vorname="Vivien" player_in_nachname="Endemann" player_out_vorname="Selina" player_out_nachname="Cerci" />
                  <EventGoal minute={64} team="Away" score="0:4" vorname="Laura" nachname="Freigang" text="Wieder macht es die Frankfurter Kombination Wolter-Freigang. Und jetzt wird es bitter für die Schweiz. Hendrich schickt Wolter über die rechte Außenbahn auf die Reise, wo sie fast schon zu frei zum Flanken kommt. Diese landet direkt bei Freigang, die mit direktem Volley gezielt ins linke Eck trifft." />
                  <EventSubstitution minute={63} team="Away" player_in_vorname="Alara" player_in_nachname="Sehitler" player_out_vorname="Sjoeke" player_out_nachname="Nüsken" />
                  <Comment minute={61} text="Eine gute Nachricht gibt es dann doch noch aus Sicht der Schweizer: Es wurde eben verkündet, dass das Spiel zwischen den Nachbarländern einen neuen Zuschauerrekord für die Schweizer Frauen Nationalmannschaft sorgt: 17.306." />
                  <Comment minute={58} text="Erstmals in der zweiten Hälfte kommt die Schweiz gefährlich in Richtung Tor. Piubel setzt sich link in Richtung Grundlinie durch. Dort kommt Hendrich hinzu, die ihr den Ball doch noch streitig macen kann." />
                  <EventSubstitution minute={57} team="Home" player_in_vorname="Larina" player_in_nachname="Baumann" player_out_vorname="Iman" player_out_nachname="Beney" />
                  <EventSubstitution minute={57} team="Home" player_in_vorname="Sandrine" player_in_nachname="Mauron" player_out_vorname="Sydney" player_out_nachname="Schertenleib" />
                  <EventSubstitution minute={57} team="Home" player_in_vorname="Alena" player_in_nachname="Bienz" player_out_vorname="Smilla" player_out_nachname="Vallotto" />
                  <EventGoal minute={56} team="Away" score="0:3" vorname="Lea" nachname="Schüller" text="Und schon sind alle drei Einwechslungen beteiligt: Zicai bekommt den Ball auf die linke Seite vor den Strafraum quer gelegt, wo sie komplett alleine steht. Ihre Mischung aus Flanke und Torschuss streift noch minimal den Kopf von Schüller, von wo er ins lange rechte Eck geht." />
                  <Comment minute={55} text="Die Wechsel zeigen direkt Wirkung sowohl Freigang als auch Zicai nehmen viel " />
                  <Event headline="Chance für Deutschland" text="Ein hoher, präziser Ball von Nüsken reicht, um die gesamte Abwehrkette auszuhebeln. Schüller zieht von links in das rechte Halbfeld und nimmt den Ball im Lauf mit. Vor Herzog bleibt die Präzision im Abschluss dann weg und der Schuss kommt genau auf die Torhüterin." />
                  <EventGoal minute={50} vorname="Laura" nachname="Freigang" team="Away" score="0:2" text="Und wieder geht es über rechts und diesmal trifft Freigang. Wolter bringt den Ball gezielt von der rechten Seite elegant in den Strafraum. Dort läuft Freigang Calligaris davon und leitet den Ball mit einer Berührung ins rechte untere Eck weiter." />
                  <Event headline="Chance für Deutschland" text="Freigang spielt sich mit einem Doppelpass mit Cerci halbrechts in die Torbox. Der Ball verspringt der Frankfurterin dann etwas und aus sehr spitzem Winkel trudelt der Ball rechts vorbei." />
                  <Comment minute={49} text="Cerci eröffnet die ersten Hälfte mit einem Dribbling gegen drei rechts in den Sechzehner. Sie möchte Schüller mitnehmen, die aber von Calligaris genau beschattet wird." />
                  <Comment minute={46} text="Mit vier Wechseln geht es in die zweite Hälfte." />
                  <EventSubstitution minute={46} team="Away" player_in_vorname="Cora" player_in_nachname="Zicai" player_out_vorname="Klara" player_out_nachname="Bühl" />
                  <EventSubstitution minute={46} team="Away" player_in_vorname="Pia-Sophie" player_in_nachname="Wolter" player_out_vorname="Giulia" player_out_nachname="Gwinn" />
                  <EventSubstitution minute={46} team="Away" player_in_vorname="Laura" player_in_nachname="Freigang" player_out_vorname="Linda" player_out_nachname="Dallmann" />
                  <EventSubstitution minute={46} team="Home" player_in_vorname="Seraina" player_in_nachname="Piubel" player_out_vorname="Alisha" player_out_nachname="Lehmann" />

                  <Event minute={45} extra_time={1} headline="Pause" text="Damit geht es in die Pause. Deutschland führt zwar verdient dank des späten Treffers, vollends zufrieden mit der Leistung wird Christian Wück aber nicht sein. Den vielen Ballbesitz und Druck in der gegnerischen Hälfte konnten sie bisher nicht genügend ausspielen. Auf der anderen Seite kam, außer einigen wenigen langen Bällen, die zwar zu zwei guten Konterchancen geführt haben, von der Schweiz nicht viel." />

                  <EventGoal minute={44} team="Home" score="0:1" vorname="Sjoeke" nachname="Nüsken" text="Aus der folgenden Ecke entsteht die Führung. Bühls Ecke kommt noch vor dem ersten Pfosten hinunter, wo Nüsken auf den Zentimeter genau richtig steht. Über ihren Kopf fliegt der Ball weiter ins linke Toreck." />
                  <Event minute={43} headline="Chance für Deutschland" team="Away" text="Wieder zeigt Herzog, weshalb Sundhage sie zur Nummer Eins im Tor gemacht hat. Dallmann leitet ein Zuspiel von Bühl mit einem Kontakt zu Schüller weiter. Die Bayerin legt sich den Ball einmal zentral an die Strafraumgrenze weiter und knallt ihn genau unter die Latte, hätte die Leipziger Torhüterin die Hände nicht hochgezogen." />
                  <Comment minute={39} text="Deutschland erhöht jetzt gehörig den Druck. Bühl setzt sich links bis zur Grundlinie durch und kann den Ball erneut in den Fünfmeterraum bringen. Dort verpasst Schüller abermals und Gwinn wird in letzter Sekunde von Schertenleib gestört, die den Ball aus der Gefahrenzone schlägt." />
                  <Event minute={37} headline="Chance für Deutschland" team="Away" text="Die erste richtig gute Torchance des Spiels geht an Cerci. Über rechts scheitert sie aus spitzem Winkel an Herzog, die ihre Fäuste rechtzeitig hochreién kann. Den nach links abgeprallten Ball bringt Bühl dann halb als Schuss, halb als Flanke in den Fünfer, wo vor Schüller geklärt wird." />
                  <Comment minute={35} text="Schertenleib dribbelt sich sehr ansehnlich aus der Mitte an drei Spielerinnen vorbei und nimmt  Crnogorcevic mit. Die Flanke der Kapitänin von links geht einmal quer durch den Fünfer, Vallottos Flanke von rechts kann Winkler dann unbedrängt fangen." />
                  <Comment minute={33} text="Schüller läuft, nach Zuspiel von Dallmann, links im Strafraum frei auf Herzog zu. Doch wieder kommt die Schweizerin aus dem Tor und kann den Ball festmachen." />
                  <Comment minute={32} text="Aber auch die Leistung der deutschen Mannschaft ist noch überschaubar. Das Spiel findet zwar weitestgehend kontrolliert in der gegnerischen Hälfte statt" />
                  <Comment minute={31} text="Nach den beiden frühen Kontern kommt von der Schweiz kaum noch was. Sie probieren sich immer wieder mit langen Bällen zu befreien, können aber nichts mehr damit aufbauen." />
                  <Comment minute={29} text="Wieder geht es über links. Bühl zieht in den Strafraum und umkurvt Maritz. Herzog bleibt aber wach und kommt heraus, um sich den etwas zu weit vorgelegten Ball zu sichern." />
                  <Comment minute={28} text="Aus ähnlicher Position bringt Bühl den Ball erneut hoch an den zweiten Pfosten. Dort wirkt Cerci etwas überrascht, dass Stierli sich verschätzt. Herzog kann den Ball aufsammeln." />
                  <Comment minute={25} text="Die Gefoulte bringt den ruhenden Ball lang über die Mauer auf den zweiten Pfosten. Dort rutscht Schüller ein Stück unter dem Ball durch." />
                  <Comment minute={24} text="Bühl wird auf der linken Außenbahn knapp 5 Meter vor dem Sechzehner mit langem Arm gestoppt. Die spanische Schiedsrichterin gibt direkt den Freistoß in versprechender Position." />
                  <Comment minute={21} text="Jetzt probiert es Senß selber. Die Frankfurterin zieht halblinks in den Sechzehner, legt sich den Ball dann einen Schritt zu weit vor und kann ihren Abschuss nicht aufs Tor bringen." />
                  <Comment minute={20} text="Linders zieht mit einem Schwenker auf der linken Seite an Beney und Maritz vorbei. Doch auch diese Flanke landet im Nichts." />
                  <Comment minute={17} text="Die Passgenauigkeit passt bei den deutschen noch nicht. Dallmann möchte zu Cerci in den Strafraum stecken, die Idee kommt aber bei der Hoffenheimerin nicht an." />
                  <Event minute={13} headline="Chance für Deutschland" team="Away" text="Dallmann kommt aus der Distanz zu dem ersten deutschen Torschuss. Calligaris leitet den Schuss mit ihrem Bein noch über das Tor. " />
                  <Comment minute={12} text="Wieder wird Lehmann der Ball durchgesteckt und wäre durch, doch die Fahne geht hoch." />
                  <Comment minute={12} text="Die deutsche Mannschaft kontrolliert in den ersten 10 Minuten zwar den Ball und steht sehr offensiv. Die Schweiz konnte daraus aber schon zwei gute Konter ziehen, ohne dass es für sie bisher hinten gefährlich wurde." />
                  <Comment minute={10} text="Die nächste Konterchance für die Eidgenossen: Crnogorcevic hat die linke Seite frei vor sich und flankt flach in die Mitte. Die Hereingabe kommt aber zu ungenau und so kann Minge alleine gegen zwei vor Lehmann klären." />
                  <Comment minute={7} text="Erste Möglichkeit für die Gastgeberinnen: Minge schätzt einen hohen Ball nicht richtig ein und springt unter dem Ball her. So kann Lehmann von der Mittellinie aus frei auf das deutsche Tor zulaufen. Hendrich setzt zum Sprint an und kann der Stürmerin in den letzten Metern vor dem Strafraum entscheidend stören." />
                  <Comment minute={5} text="Gwinn kann sich an der Eckfahne lösen und den Ball hoch in die Mitte bringen. Dort gewinnt Schüller einen Zweikampf mit Calligaris, kann den Ball aber nicht mit genug Druck aufs Tor bringen." />
                  <Comment minute={3} text="Der deutschen Mannschaft gehört der Ball in den ersten Minuten. Ein Distanzschuss von Nüsken geht  ungefährlich neben das Tor." />
                  <Comment minute={1} icon="whistle" headline="Anpfiff" />

                  <Event headline="" text="Kleine Geschichtsreise: 
                  Vor genau 42 Jahren und 19 Tagen bestritt die deutsche Mannschaft erstmals ein Länderspiel. Gegner damals wie heute die Schweiz. Unter Gero Bisanz gelang damals ein 5:1 Erfolg. Daraufhin folgten in 17  weiteren Partien 16 Siege für Deutschland und ein Unentschieden. Das letzte Aufeinandertreffen endete im Juni 2024 in Erfurt mit einem satten 7:0 für Deutschland als Generalprobe für die EM." />
                  <Event headline="" text="Wück zeigt wieder einmal, dass er viel auf die Jugend setzt. Wie schon beim letzten Lehrgang dürfen sich mit Cora Zicai (Freiburg) und Alara Sehitler (Bayern) auch diesmal wieder zwei junge Spielerinnen erstmals über ihre Nominierungen für die A-Nationalmannschaft freuen. Außerdem bekommt Winkler im Tor ihren ersten Startelf-Einsatz bei der zweiten Nominierung.
                  Nicht im Kader sind neben Ann-Katrin Berger, die abgesprochen eine Pause erhält, auch Däbritz, Magull, Lattwein und Anyomi." />
                  <Event headline="" text="Nachdem Giulia Gwinn zuletzt immer interimsweise die Mannschaft als Kapitänin angeführt hat, ist sie vor diesem Spiel offiziell von Christian Wück zur Spielführerin ernannt worden." />
                  <Event headline="" text="Das vorletzte Länderspiel dieses Kalenderjahres bekommt die deutsche Mannschaft einen ersten Vorgeschmack auf den Sommer im nächsten Jahr, wo die EM hier in der Schweiz stattfinden wird." />
                  
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}
export default TEMPLATE;

export {}