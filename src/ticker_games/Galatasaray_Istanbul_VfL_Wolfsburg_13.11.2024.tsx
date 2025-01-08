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

const GalatasarayIstanbulVflWolfsburg13112024 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Galatasaray Istanbul';
    const awayTeam = 'VfL Wolfsburg';
    const stadium = 'Atatürk-Olympiastadion';
    const league = 'Frauen Champions League';
    const matchday = '3. Spieltag';
    const result = '0:5'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Gamze", nachname: "Yaman" },
      { nummer: 2, vorname: "Jazmin", nachname: "Wardlow" },
      { nummer: 4, vorname: "Oluwatosin", nachname: "Demehin" },
      { nummer: 7, vorname: "Arzu", nachname: "Karabulut" },
      { nummer: 8, vorname: "Emine Ecem", nachname: "Esen" },
      { nummer: 11, vorname: "Catalina", nachname: "Usme" },
      { nummer: 12, vorname: "Andrea", nachname: "Staskova" },
      { nummer: 13, vorname: "Fatma Sare", nachname: "Öztürk" },
      { nummer: 16, vorname: "Ebru", nachname: "Topcu" },
      { nummer: 21, vorname: "Ecem", nachname: "Cümert" },
      { nummer: 25, vorname: "Hapsatou", nachname: "Malado Diallo" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 17, vorname: "Handan", nachname: "Kurga" },
      { nummer: 23, vorname: "Müge Inan", nachname: "Kanour" },
      { nummer: 5, vorname: "Eda", nachname: "Karatas" },
      { nummer: 10, vorname: "Ismigül", nachname: "Yaciner" },
      { nummer: 18, vorname: "Kristina", nachname: "Bakarandze" },
      { nummer: 20, vorname: "Berna", nachname: "Yeniceri" },
      { nummer: 22, vorname: "Nazlican", nachname: "Parlak" },
      { nummer: 24, vorname: "Arzu", nachname: "Akkurt" },
      { nummer: 77, vorname: "Irem", nachname: "Eren" },
      { nummer: 99, vorname: "Benan", nachname: "Altinas" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Merle", nachname: "Frohms" },
      { nummer: 4, vorname: "Kathrin", nachname: "Hendrich" },
      { nummer: 6, vorname: "Janina", nachname: "Minge" },
      { nummer: 7, vorname: "Chantal", nachname: "Hagel" },
      { nummer: 10, vorname: "Svenja", nachname: "Huth" },
      { nummer: 18, vorname: "Pernille", nachname: "Kielland" },
      { nummer: 21, vorname: "Rebecka", nachname: "Blomqvist" },
      { nummer: 23, vorname: "Sveindis", nachname: "Jonsdottir" },
      { nummer: 24, vorname: "Joelle", nachname: "Wedemeyer" },
      { nummer: 25, vorname: "Vivien", nachname: "Endemann" },
      { nummer: 39, vorname: "Sarai", nachname: "Linder" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 22, vorname: "Lisa", nachname: "Schmitz" },
      { nummer: 30, vorname: "", nachname: "Borbe" },
      { nummer: 2, vorname: "Lynn", nachname: "Wilms" },
      { nummer: 9, vorname: "Lineth", nachname: "Beerensteyn" },
      { nummer: 13, vorname: "Luca", nachname: "Popp" },
      { nummer: 14, vorname: "Nuria", nachname: "Rabano" },
      { nummer: 19, vorname: "Fenna", nachname: "Kalma" },
      { nummer: 20, vorname: "Ariana", nachname: "Arias" },
      { nummer: 29, vorname: "Jule", nachname: "Brand" }
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
                      <Coaches nameCoachHome="Metin Ülgen" nameCoachAway="Tommy Stroot" />
                      <Referee nameReferee="Olatz Rivera Olmedo (ESP)" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Event headline="" text="Für Wolfsburg geht es in der Liga am Samstag darum, die Tabellenführung gegen noch torlose Potsdamer zu verteidigen, ehe Galatasaray schon nächsten Mittwoch zum Rückspiel anreist.." />
                      <Event headline="" text="Am Ende gewinnt Wolfsburg hoch und verdient mit 5:0 beim amtierenden türkischen Meister. Von der ersten Minute an ging das Spiel nur nach vorne. Besonders die Torschützinnen Blomqvist und Endemann zählen zu den auffälligsten Spielerinnen auf dem Platz und haben einiges zu dem sehr beeindruckenden Torschussverhältnis von 34:2 beigetragen." />

                      <Comment minute={90} extra_time={9} icon="whistle" headline='Abpfiff' text="Jetzt erlöst die Olatz Rivera Olmedo Galatasaray und pfeift ein sehr einseitiges Spiel ab."/>
                      <Comment minute={90} extra_time={8} text="Warum stoppen, wenn's doch gerade läuft? Brand nimmt es mit 3 Verteidigerinnen auf, bis ihr der Ball links im Sechzehner etwas zu weit nach vorne verspringt." />
                      <EventGoal minute={90} extra_time={7} team="Away" score="0:5" vorname="Vivien" nachname="Endemann" text="Einmal umgekehrt bitte: Diesmal kommt Blomqvist durch die Mitte und legt auf die halbrechts frei laufende Endemann ab. Im Strafraum haut sie den Ball mit einem Hammer rechts oben ins Eck." />
                      <EventGoal minute={90} extra_time={6} team="Away" score="0:4" vorname="Rebecka" nachname="Blomqvist" text="Aus zwei mach drei - Rebecka Blomqvist mit dem Hattrick. Nicht zum ersten Mal heute geht es über rechts bei Endemann schnell nach innen. Diesmal legt sie noch an der Strafraumgrenze mittig zu Blomqvist, die über Yaman hinweg genau unter die Latte trifft." />
                      <Event minute={90} extra_time={5} headline="Chance für Wolfsburg" team="Away" text="Egal wie lange das Spiel geht, die Wölfinnen werden nicht müde. Brand schickt Arias halbrechts, diese schießt aber knapp rechts vorbei." />
                      <Comment minute={90} extra_time={7} text="Aufgrund der Vielzahl der Verletzungsunterbrechungen werden noch 7 Minuten oben drauf gelegt." />
                      <Comment minute={90} text="Brands Schuss aus 17 Metern blockt Yaman ab. Die folgende Flanke nimmt Kalma zwar artistisch mit einem Seitfallzieher an, verfehlt dabei das Tor aber deutlich." />
                      <Event minute={87} headline="Chance für Wolfsburg" team="Away" text="Brand schlägt den Ball von links nach rechts in den Lauf von Blomqvist, die an der herausstürmenden Yaman vorbei dribbelt. Sie legt erst auf Kalma quer, die zu Arias weiterleitet. Die eben eingewechselte Spanierin schießt aber genau gegen die gestolperte Kalma, wodurch auch Abseits gepfiffen wird." />
                      <EventSubstitution minute={86} team="Home" player_in_vorname="Eda" player_in_nachname="Karatas" player_out_vorname="Ebru" player_out_nachname="Topcu" />
                      <EventSubstitution minute={86} team="Home" player_in_vorname="Irem" player_in_nachname="Eren" player_out_vorname="Fatma" player_out_nachname="Öztürk" />
                      <EventSubstitution minute={86} team="Away" player_in_vorname="Ariana" player_in_nachname="Arias" player_out_vorname="Svenja" player_out_nachname="Huth" />
                      <Comment minute={85} text="Aus sehr spitzem Winkel probiert Brand es über die linke Seite, setzt den Ball aber über das Tor." />
                      <Comment minute={83} text="Öztürk bleibt erneut auf dem Boden im eigenen Sechzehner liegen und Yaman zeigt sofort an, dass sie ausgewechselt werden muss." />
                      <Comment minute={81} text="Brand spielt sich mittels Doppelpass mit Blomqvist links in den Sechzehner, kommt dort aber nicht weiter. Sie legt auf Rabano ab, die ebenfalls den Doppelpass sucht. Brand bekommt den zu steilen Ball aber nicht mehr." />
                      <Comment minute={80} text="Wolfsburg stoppt auch nach dem dritten Treffer nicht offensiv zu spielen und Galatasaray in die eigene Hälfte zu drücken." />
                      <EventSubstitution minute={78} team="Home" player_in_vorname="Nazlican" player_in_nachname="Parlak" player_out_vorname="Hapsatou" player_out_nachname="Malado Diallo" />
                      <EventGoal minute={77} team="Away" score="0:3" vorname="Rebecka" nachname="Blomqvist" text="Blomqvist zum zweiten! Endemann wird erneut auf der rechten Außenbahn geschickt und steckt von dort in die Mitte. Die Hereingabe landet zwar bei Demehin, die aber genau vor die Füße von Blomqvist klärt. Aus halbrechter Position schlenzt diese den Ball dann mit ganz viel Gefühl ins lange Eck zur Vorentscheidung." />
                      <Comment minute={76} text="Öztürk bleibt nach einem eigentlich leichten Zweikampf mit Blomqvist liegen und muss im Halsbereich behandelt werden." />
                      <EventSubstitution minute={75} team="Away" player_in_vorname="Nuria" player_in_nachname="Rabano" player_out_vorname="Sarai" player_out_nachname="Linder" />
                      <EventSubstitution minute={75} team="Away" player_in_vorname="Fenna" player_in_nachname="Kalma" player_out_vorname="Justine" player_out_nachname="Kielland" />
                      <Comment minute={74} text="Staskova kommt links im Strafraum nicht an Minge vorbei und legt auf die mittig stehende Usme ab. Auch sie wird direkt von zweien attackiert und Hendrich haut den Ball schließlich weg." />
                      <Comment minute={73} text="Anstatt einen Rückpass zu klären, begibt sich Yaman in ein riskantes Dribbling mit Blomqvist innerhalb ihres Sechzehners, dass sie dann noch nur mit ungenauem wegschlagen retten kann. " />
                      <Event minute={71} headline="Chance für Wolfsburg" text="Statt Tempo über die Außen, nun immer wieder gefährliche Distanzschüsse. Ein Freistoß landet bei Kielland, die ihr Glück von vor dem Strafraum probiert. Wieder streckt sich Yaman und kann klären." />
                      <Comment minute={68} text="Werden die Hausherrinnen jetzt doch nochmal wach? Staskova wird tief angespielt, kommt aber ganz knapp nicht an den Ball." />
                      <EventSubstitution minute={66} team="Home" player_in_vorname="Kristina" player_in_nachname="Bakarandze" player_out_vorname="" player_out_nachname="Karabulut" />
                      <EventGoal minute={63} team="Away" score="0:2" vorname="Rebecka" nachname="Blomqvist" text="Da ist das lang überfällige zweite Tor. Blomqvist ist die gedankenschnellste nach Minges Wumms aus über 20 Metern, der von der Unterseite der Latte kurz vor dem Tor aufspringt. Dort steht die Schwedin vor dem Tor und braucht nur den Fuß hin zu halten." />
                      <Event minute={61} team="Away" headline="Chance für Wolfsburg" text="Kielland macht es aus über 20 Metern ganz eng. Der Schuss landet nur am linken Pfosten." />
                      <Comment minute={59} text="In der ersten viertel Stunde der zweiten Halbzeit verläuft das Spiel genau wie die ersten 45 Minuten: Wolfsburg macht das Spiel, hat viel Zug zum Tor, aber trifft weiterhin nicht zum längst überfälligen 2:0." />
                      <EventCard minute={58} team="Home" card_type="Gelb" vorname="Andrea" nachname="Staskova" text="Staskova bringt Hendrich fernab vom Ball zu Fall und wird für diese Aktion verwarnt." />
                      <Comment minute={58} text="Linder hat auf der linken Außenbahn Platz ohne Ende. Die Flanke kurz vor der Grundlinie landet erst bei Endemann, deren Schuss geblockt wird, genau wie Brand’s Nachschuss aus der zweiten Reihe" />
                      <Comment minute={56} text="Brand gewinnt den Ball direkt in ihrem ersten offensiven Zweikampf. Dieser landet dann bei Huth, die ungefährlich zu Yaman schießt." />
                      <EventSubstitution minute={55} team="Away" player_in_vorname="Jule" player_in_nachname="Brand" player_out_vorname="Sveindis" player_out_nachname="Jonsdottir" />
                      <EventSubstitution minute={55} team="Away" player_in_vorname="Luca" player_in_nachname="Papp" player_out_vorname="Chantal" player_out_nachname="Hagel" />
                      <Event minute={51} team="Away" headline="Chance für Wolfsburg" text="Blomqvist mit der riesigen Chance zum zweiten Treffer. Kielland spielt haargenau durch die Lücke in der Abwehrkette und setzt somit Blomqvist in Szene. Im Strafraum scheitert die Stürmerin dann aus 11 Metern an der stark parierenden Yaman." />
                      <Comment minute={48} text="Wie schon in Hälfte eins ist Frohms hellwach und klärt im letzten Moment weit vor ihrem Strafraum vor der durchgestarteten Staskova." />
                      <Comment minute={46} text="Ohne personelle Veränderungen stößt jetzt Wolfsburg an." />

                      <Event headline="Pause" text="Der Rasen ist nach 45 Minuten nur auf der linken Spielhälfte bespielt. Dort stehen die Gäste aus der Autostadt sehr hoch und spielen sich, meist über die rechte Seite mit einer sehr auffälligen Endemann, einige gute Chancen heraus. Mit dem ersten Tor in der diesjährigen Champions League Saison führen sie aber ‘nur’ mit einem Tor Vorsprung, mit dem die harmlosen Gastgeberinnen noch gut bedient sein können." />

                      <Comment minute={45} extra_time={1} text="Die erste Halbzeit wird noch um drei Minuten verlängert, in der Wolfsburg die nächste Ecke heraus spielt." />
                      <Comment minute={45} text="Blomqvist setzt sich halbrechts vor dem Sechzehner durch und probiert es aus gut neun Metern mal. Demehin schmeißt sich mit dem ganzen Körper in den Schuss und klärt so noch bevor es gefährlich für Yaman im Tor wird." />
                      <Event minute={41} headline="Chance für Galatasaray" team="Home" text="Kurz vor der Pause kommt dann doch noch die erste Offensivaktion von Galatasaray: Topcu schlägt den Ball lang aus der eigenen Hälfte nach vorne auf Diallo. Mit einem Doppelpass mit Staskova kombiniert sie sich halblinks in den Strafraum, bekommt dann aber kaum Druck hinter den Schuss, der in Frohms Armen landet." />
                      <Comment minute={39} text="Das altbewerte Spiel geht weiter: Endemann bekommt den Ball rechts durchgespielt, sie zieht gegen zwei nach innen, spielt diesmal aber nicht ab sondern versucht einen weiteren Haken nach rechts. Mit diesem bleibt sie aber ausnahmsweise mal hängen." />
                      <Event minute={37} headline="Chance für Wolfsburg" team="Away" text="Kielland spielt Endemann auf der rechten Seite genau in den Lauf, unter deren Flanke so ziemlich alle Verteidigerinnen herspringen. Letztendlich landet der Ball bei Linder, die den Dropkick mit vollem Risiko zu hoch ansetzt." />
                      <Comment minute={34} text="Weiter geht es mit Tempo über die rechte Seite. Wieder zieht Endemann nach innen, die mittlerweile fast durchgehend gedoppelt wird und nur mit Mühe vom Ball getrennt werden kann." />
                      <EventCard minute={32} team="Home" card_type="Gelb" vorname="Ecem" nachname="Cümert" />
                      <Comment minute={30} text="So langsam wäre auch das zweite Tor nicht unverdient. Von der Mannschaft aus der Türkei kommt weiterhin nichts nach vorne, während auf der anderen Seite eine Chance die nächste Jagd." />
                      <Comment minute={29} text="Und direkt die nächste Chance: Diesmal geht es mal über die bisher vernachlässigte linke Seite, wo Jonsdottirs Flanke bei Hagel landet. Der Schuss setzt auf dem Boden auf und verschwindet dann auf den Rängen hinter dem Tor." />
                      <Event minute={28} headline="Chance für Wolfsburg" team="Away" text="Yaman verhindert mit langen Armen eine gute Kopfball Chance von Blomqvist aus rund zehn Metern. Zuvor wird Huth von Endemann in Szene gesetzt, die den Ball hoch und platziert in den Strafraum bekommt." />
                      <Comment minute={27} text="Jonsdottir fängt einen schwachen Querpass genau vor dem Sechzehner ab, bekommt aber nicht genug Druck hinter den Schuss." />
                      <EventGoal minute={24} team="Away" vorname="Joelle" nachname="Wedemeyer" score="0:1" text="Aus dieser Ecke entsteht eine weitere, die Wedemeyer per Kopf einnetzt. Huths Hereingabe von links fliegt weit auf den zweiten Pfosten, wo die Verteidigerin ohne Gegenspielerin heran rauscht und den Ball mit Wumms auf der rechten Seite platziert." />
                      <Comment minute={23} text="Auf der anderen Seite leitet Jonsdottir sehenswert mit der Hacke zu Endemann weiter, die von rechts in den Sechzehner zieht. Dort spielt sie nicht rechtzeitig auf Hagel oder Blomqvist ab, sodass Öztürk noch per Grätsche ins Aus klären kann." />
                      <Comment minute={23} text="Die erste potentielle Chance verhindert Frohms, indem sie aus ihrem Strafraum kommt und vor der durchgestartenden Staskova klärt." />
                      <Event minute={21} team="Away" headline="Chance für Wolfsburg" text="Wieder setzt sich Endemann auf der rechten Seite, wenn auch mit etwas Glück, gegen zwei Verteidigerinnen durch und läuft kurz vor der Seitenauslinie in die Mitte. Der anschließende Pass landet bei Jonsdottir, die aber beim Schuss gestört wird und so das Tor rechts verfehlt." />
                      <Comment minute={18} text="Karabulut muss nach einem Zweikampf, bei dem Kielland sie in Höhe des Knies getroffen hat, behandelt werden." />
                      <Comment minute={15} text="Die erste Viertelstunde gehört ganz klar dem Team aus Deutschland, deren Tor mit etwas Pech nicht zählte. Die Gäste sind nur zu sehen, wenn sie die Chance zu einem Konter sehen, den sie bisher aber nicht ausspielen konnten." />
                      <Comment minute={13} text="Die vierte Ecke landet genau bei Jonsdottir, die den Ball über das Tor setzt." />
                      <EventCard minute={10} team="Home" vorname="Catalina" nachname="Usme" card_type="Gelb" />
                      <Event minute={8} headline="Abseitstor für Wolfsburg" team="Away" text="Wieder macht es Endemann rechts schnell. Diesmal zieht sie erst nach innen, ohne wirklich attackiert zu werden, und legt dann auf die links komplett frei stehende Linder rüber. Den Pass in den Fünfer muss Blomqvist dann nur noch an der ausgespielten Yaman vorbeischieben.
                      Das Tor wird nach kurzer Besprechung mit der Assistentin an der Seite aber zurückgenommen. Blomqvist hatte den Ball nach Endemanns Pass noch berührt. Zu diesem Moment stand Linder bereits im Abseits" />
                      <Comment minute={7} text="Endemann nimmt links fahrt auf und flankt flach in Richtung Jonsdottir. Der Ball wird erneut ins Seitenaus geklärt. Doch auch die bereits dritte Ecke bleibt ungefährlich." />
                      <Comment minute={6} text="Aus der zweiten Wolfsburger Ecke entsteht ein Konter der Gastgeberinnen. Diallo kann das Spiel aber nicht schnell genug machen und verliert den Ball noch vor dem Strafraum wieder." />
                      <Comment minute={5} text="Blomqvist zieht links in den Strafraum und versucht den Ball auf die mittig stehenden Hagel aufzulegen. Durch einen Abpraller an einer Verteidigerin hüpft er stattdessen genau in die Arme von Yaman." />
                      <Event minute={3} headline="Chance für Wolfsburg" team="Away" text="Huth schießt einen Freistoß aus 18 Metern von halblinks direkt aufs Tor. Der Schuss ist etwas zu zentral und kein Problem für Yaman, die den Ball mit hoch gerissenen Armen über das Tor klärt." />
                      <Comment minute={1} text="Kielland eröffnet das Spiel direkt mit einem Distanzschuss aus über 20 Metern, der ein kleines Stück über den Querbalken segelt." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Die Gastgeberinnen eröffnen das dritte Gruppenspiel der Gruppe A im Atatürk-Olympiastadion."/>

                      <Event headline="" text="Geleitet wird das Spiel von der Spanierin Olatz Rivera Olmedo." />
                      <Event headline="" text="Die Türkinnen hingegen mussten am Wochenende im Stadtderby gegen Besiktas eine knappe 1:0 Niederlage hinnehmen. Damit stehen sie nach 6 Spielen mit nur 12 Punkten da." />
                      <Event headline="" text="Mut bei den Wölfinnen macht ihre aktuelle Form. Sie sind mit zwei souveränen 3:0 Siegen in der Liga aus der Länderspielpause gekommen. Zudem kann Tommy Stroot auch wieder voll auf die zuletzt angeschlagenen Endemann und Linder setzen." />
                      <Event headline="" text="Beide Teams stehen nach zwei verlorenen Spielen gegen Lyon und die Roma bereits unter Druck. Ohne einen Sieg würde die Chance auf ein Weiterkommen auf beiden Seiten in die Unwahrscheinlichkeit sinken" />
                      <Event headline="" text="Für Galatasaray ist es nach der Meisterschaft in der vergangenen Saison die erste Qualifikation für die Champions League. Die Wolfsburgerinnen hingegen haben das Ziel, nach einer Durstrecke von 10 Jahren den dritten Titel in diesem Wettbewerb zu gewinnen." />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}
export default GalatasarayIstanbulVflWolfsburg13112024;

export {}