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
import EventCard from "../components_ticker/EventCard";

const Bayer04LeverkusenUnionBerlin18012025 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Bayer 04 Leverkusen';
    const awayTeam = 'Union Berlin';
    const stadium = 'Oliva Nova';
    const league = 'Testspiel';
    const matchday = '06. Spieltag';
    const result = '2:1'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "", nachname: "" },
      { nummer: 2, vorname: "", nachname: "" },
      { nummer: 3, vorname: "", nachname: "" },
      { nummer: 4, vorname: "", nachname: "" },
      { nummer: 5, vorname: "", nachname: "" },
      { nummer: 6, vorname: "", nachname: "" },
      { nummer: 7, vorname: "", nachname: "" },
      { nummer: 8, vorname: "", nachname: "" },
      { nummer: 9, vorname: "", nachname: "" },
      { nummer: 10, vorname: "", nachname: "" },
      { nummer: 11, vorname: "", nachname: "" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 12, vorname: "", nachname: "" },
      { nummer: 13, vorname: "", nachname: "" },
      { nummer: 14, vorname: "", nachname: "" },
      { nummer: 15, vorname: "", nachname: "" },
      { nummer: 16, vorname: "", nachname: "" },
      { nummer: 17, vorname: "", nachname: "" },
      { nummer: 18, vorname: "", nachname: "" },
      { nummer: 19, vorname: "", nachname: "" },
      { nummer: 20, vorname: "", nachname: "" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "", nachname: "" },
      { nummer: 2, vorname: "", nachname: "" },
      { nummer: 3, vorname: "", nachname: "" },
      { nummer: 4, vorname: "", nachname: "" },
      { nummer: 5, vorname: "", nachname: "" },
      { nummer: 6, vorname: "", nachname: "" },
      { nummer: 7, vorname: "", nachname: "" },
      { nummer: 8, vorname: "", nachname: "" },
      { nummer: 9, vorname: "", nachname: "" },
      { nummer: 10, vorname: "", nachname: "" },
      { nummer: 11, vorname: "", nachname: "" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 12, vorname: "", nachname: "" },
      { nummer: 13, vorname: "", nachname: "" },
      { nummer: 14, vorname: "", nachname: "" },
      { nummer: 15, vorname: "", nachname: "" },
      { nummer: 16, vorname: "", nachname: "" },
      { nummer: 17, vorname: "", nachname: "" },
      { nummer: 18, vorname: "", nachname: "" },
      { nummer: 19, vorname: "", nachname: "" },
      { nummer: 20, vorname: "", nachname: "" }
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
                      <Coaches nameCoachHome="Roberto Pätzold" nameCoachAway="Ailien Poese" />
                      {/* <Referee nameReferee="" /> */}
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>  
                      <Event headline="Fazit nachm Spiel!" text={`Wie schon in der ersten Hälfte machen wir das Spiel, können uns aber nicht belohnen. Trotz guter Chancen unsererseits und einer Bochumer in der Nachspielzeit bleibt die zweite Hälfte Torlos und wir beenden die Heim-Hinrunde mit einem Unentschieden. Nächse Woche geht es dann nochmal nach Gütersloh zum letzten Spiel diees Jahr. \n 
                        Bis dahin wie immer: bleibt gesund, kommt gut nach Hause und niemals vergessen...
                        `} />
                      <Comment minute={120} extra_time={1} icon="whistle" headline="Abpfiff" text="Knappe Niederlage gegen Bundesligisten." />
                      <Comment minute={120} text="Eine Kontermöglichkeit über rechts kriegen wir noch, endet immerhin mit Einwurf." />
                      <Comment minute={118} text="Elli setzt sich technisch ganz stark gegen ihre Gegenspielerin durch. Die Hereingabe wird dann von Moll abgefangen." />
                      <Comment minute={115} text="Die letzten fünf Minuten nochmal alles geben!" />
                      <EventGoal minute={115} team="Home" score="2:1" vorname="Delice" nachname="Boboy" text="Aus spitzem Winkel zieht Boboy den Ball über Sarah oben rechts ins Netz..." />
                      <Comment minute={112} text="... den Nachschuss der durchfliegenden Ecke setzt eben diese dann aber per Dropkick ein gutes Stück zu hoch an. Schade." />
                      <Comment minute={110} text="Elli holt aus einem fast schon zu langen Ball aus der eigenen Hälfte noch eine Ecke raus..." />
                      <Comment minute={108} text="Viel passiert hier gerade nicht mehr. Der Ball wechselt seine Besitzerin immer irgendwo im Mittelfeld." />
                      <Comment minute={105} text="Die Fouls von Leverkusen häufen sich zum Ende des Spiels ganz schön. Wer's nicht anders kann..." />
                      <EventCard minute={103} team="Home" card_type="yellow" vorname="Ruby" nachname="Grant" text="Erste Karte des Spiels für unnötig starkes Einsteigen im Mittelfeld" />
                      <EventSubstitution minute={101} team="Away" player_in_vorname="Latoya" player_in_nachname="Bach" player_out_vorname="Antonia" player_out_nachname="Halverkamps" />
                      <Event minute={101} team="Away" headline="Chance für Union" text="Nele und Toni mit gutem Doppelpass. Der Abschluss prallt noch leicht ab und ist dadurch keine Gefahr für Moll im Bayer-Tor." />
                      <Comment minute={97} text="Die Wärme und Laufzeit des Spiels merkt man den Spielerinnen mittlerweile auch an. Die Genauigkeit der Pässe lässt immer weiter nach." />
                      <Comment minute={94} text="Hey, hey, hey! Erst wird Elli links am Trikot gezogen, kurz darauf Nele einmal umgeholzt. Ist immer noch ein Testspiel hier." />
                      <EventSubstitution minute={92} team="Home" player_in_vorname="Karolina" player_in_nachname="Vilhjamsdottir" player_out_vorname="Paulina" player_out_nachname="Bartz" />
                      <EventSubstitution minute={92} team="Home" player_in_vorname="Anne" player_in_nachname="Moll" player_out_vorname="Friederike" player_out_nachname="Repohl" />
                      <EventSubstitution minute={92} team="Home" player_in_vorname="Delice" player_in_nachname="Boboy" player_out_vorname="Caroline" player_out_nachname="Kehrer" />
                      <Comment minute={92} text="Leverkusen scheint nicht ganz glücklich mit dem Ausgleich. Ist uns aber egal, wir halten dagegen und laufen hoch an." />
                      <Comment minute={88} text="Kurzer Aufschrei der Werkself, gibt aber zu Recht keinen Elfmeter. Zita weiß doch genau, wie weit sie gehen kann." />
                      <Comment minute={84} text="So kann man mal starten." />
                      <EventGoal minute={82} team="Away" score="1:1" vorname="Nele" nachname="Bauereisen" text="Hoch geflogen und nichts bereut: Nele steigt bei Tonis Ecke am höchsten und gleicht zum Start des letzten Drittels aus." />
                      <Comment minute={81} icon="whistle" headline="Anpfiff 3. Drittel" text="Und nachdem sich das Wechselkarussell wohl ein letztes Mal gedreht hat, geht es in die letzten 40 Minuten." />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Sophie" player_in_nachname="Trojahn" player_out_vorname="Naika" player_out_nachname="Reissner" />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Elli" player_in_nachname="Seiro" player_out_vorname="Leonie" player_out_nachname="Köster" />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Ida" player_in_nachname="Hekkinen" player_out_vorname="Pia" player_out_nachname="Metzker" />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Anna" player_in_nachname="Weiß" player_out_vorname="Fatma" player_out_nachname="Sakar" />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Charleen" player_in_nachname="Niesler" player_out_vorname="Tomke" player_out_nachname="Schneider" />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Zita" player_in_nachname="Rurack" player_out_vorname="Judith" player_out_nachname="Steinert" />

                      <Comment minute={80} icon="whistle" headline="Abpfiff 2. Drittel" text="Pünktlich gehts in die zweite Pause." />
                      <Comment minute={77} text="Nele verlagert nach rechts außen zu Korina, die direkt zurück flankt. Millimeter bevor Nele mit dem Kopf an den Ball kommt, ist Repohl mit den Händen zur Stelle. So kann man es aber machen." />
                      <Comment minute={73} text="Das Spiel läuft seit den Wechseln nur noch in Richtung Leverkusener Tor. Nur zum Abschluss kommen wir noch nicht so richtig." />
                      <Comment minute={71} text="Toni erkämpft sich vor der Grundlinie noch einen verloren geglaubten Ball. Dass dann von hinten drei Rote angerannt kommen, ist dann nicht ganz fair." /> 
                      <Comment minute={70} text="Fatma nimmt sich ganz viel Platz rechts und schlägt eine schönen Flanke. Am Ende einen ticken zu hoch für Toni." />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Korina" player_in_nachname="Janez" player_out_vorname="Athanasia" player_out_nachname="Moraitou" />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Nele" player_in_nachname="Bauereisen" player_out_vorname="Lisa" player_out_nachname="Heiseler" />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Antonia" player_in_nachname="Halverkamps" player_out_vorname="Dina" player_out_nachname="Orschmann" />
                      <EventSubstitution minute={66} team="Away" player_in_vorname="Celine" player_in_nachname="Frank" player_out_vorname="Anouk" player_out_nachname="Blaschka" />
                      <Event minute={64} team="Home" headline="Chance für Leverkusen" text="Und weils so schön ist noch eine dritte Parade hinterher: Kögel verlängert auf Zdebel, die aus der Drehung scheitert." />
                      <Event minute={63} team="Home" headline="Chance für Leverkusen" text="Langer Freistoß von Halbrechts, der per Kopf aufs Tor verlängert wird. Diesmal ist Melanie schnell unten." />
                      <EventSubstitution minute={61} team="Home" player_in_vorname="Ruby" player_in_nachname="Grant" player_out_vorname="Delice" player_out_nachname="Boboy" />
                      <EventSubstitution minute={61} team="Home" player_in_vorname="Julia" player_in_nachname="Mickenhagen" player_out_vorname="Karolina" player_out_nachname="Vilhjamsdottir" />
                      <Event minute={61} team="Home" headline="Chance für Leverkusen" text="Melanie!! Was eine Parade! Boboy meint es mit einem Schlenzer von der Ecke des Sechzehners trickreich zu machen. Die Flugbahn des Balls schmiert da aber gegen die unserer Torhüterin ab." />
                      <Comment minute={60} text="Die Hälfte der angesetzten Gesamtspielzeit ist jetzt rum, Pause gibts aber erst in 20 Minuten wieder." />
                      <Comment minute={58} text="Ball rollt wieder, alle können weitermachen. Jetzt gehts auf zum Ausgleich!" />
                      <Comment minute={56} text="Das Spiel ist unterbrochen, Boboy muss nach einem Luftzweikampf mit Tomke behandelt werden." />
                      <Comment minute={54} text="Nach dem Hundebellen vollzieht jetzt wohl auch ein Traktor seine Arbeit in der Nähe. Die Soundkulisse ist bisher immerhin recht abwechslungsreich." />
                      <Comment minute={52} text="Jetzt kommt da doch mal Fahrt auf. Aus einer Flanke von links wird ein halber Schuss, den Melanie ganz locker aus der Luft holt." />
                      <Comment minute={50} text="So richtig spielen wollen die Leverkuserinnen in der zweiten Hälfte noch nicht. Den Ball lassen sie nur hinten kreisen." />
                      <Event minute={43} team="Away" headline="Chance für Union" text="Es geht offensiv weiter. Dina testet Rephol von der Strafraumgrenze." />
                      <Comment minute={43} text="Direkt die erste kleine Chance: Naika bekommt den Ball zum Nachschuss nach einem Freistoß ohne Abnehmerin." />
                      <Comment minute={42} text="So ein bisschen erinnert mich das ganze schon an Eishockey: 2. Drittel, viele Wechsel... Nur wärmer ist es hier. Und das Spielgerät ist weiß." />
                      <Comment minute={41} icon="whistle" headline="Anpfiff 2. Drittel" text="Und weiter gehts." />
                      <EventSubstitution minute={41} team="Away" player_in_vorname="Pia" player_in_nachname="Metzker" player_out_vorname="Anna" player_out_nachname="Weiß" />
                      <EventSubstitution minute={41} team="Away" player_in_vorname="Naika" player_in_nachname="Reissner" player_out_vorname="Charleen" player_out_nachname="Niesler" />
                      <EventSubstitution minute={41} team="Away" player_in_vorname="Melanie" player_in_nachname="Wagner" player_out_vorname="Cara" player_out_nachname="Bösl" />


                      <Comment minute={40} icon="whistle" headline="Abpfiff 1. Drittel" text="Das wars dann auch schon mit dem ersten Drittel. In Zehn Minuten geht's weiter." />
                      <Comment minute={37} text="Das Mittelfeld wird mittlerweile klar von den Eisernen Ladies dominiert. Das dagegen arbeiten hat die Werkself so ein bisschen nach hinten verschoben." />
                      <Event minute={34} team="Home" headline="Chance für Leverkusen" text="Mal wieder ein Lebenszeichen von den Damen vom Bayerkreuz. Ein langer Freistoß wird zentral per Kopf verlängert. Cara steht wieder richtig und muss nur die Arme hochhalten und zugreifen." />
                      <Event minute={28} team="Away" headline="Chance für Union Berlin" text="Und Athanasia haut aus 25 Metern direkt den nächsten Schuss hinterher. Der landet am Ende aber nur in den Armen von Repohl." />
                      <Comment minute={27} text="So, Herantasten ist beendet und der erste Torschuss unsererseits. Zwar rechts vorbei, aber wir sind wach!" />
                      <Comment minute={26} text="Mit ganz feiner Drehung behauptet sich Naika im Mittelfeld. Am Ende gibt es wenigstens einen Einwurf aus guter Position." />
                      <Comment minute={23} text="Offensiv geht es immer näher ans Tor. Dina kann eine hohe Hereingabe im Sechzehner dann nicht ganz festmachen." />
                      <EventGoal minute={19} team="Home" score="1:0" vorname="Tomke" nachname="Schneider" text="Das ist ganz unglücklich! Tomke will eine Flanke von rechts klären und zielt dabei athletisch ins eigene Tor..." />
                      <Comment minute={18} text="Vom Spielfeldrand erhalten die Eisernen Ladies jetzt auch tierischen Support in Form von bellen."/>
                      <Comment minute={14} text="Athanasia schickt Naika links die Linie entlang. Wieder kommt sie knapp nicht zum Abschuss, weil ein rotes Bein dazwischen kommt." />
                      <Comment minute={11} text="Leverkusen hat zwar weiterhin mehr Ballbesitz, wir lösen uns aber mehr vom Tor und pressen jetzt auf Fehler." />
                      <Event minute={9} team="Home" headline="Chance für Leverkusen" text="Boboy mogelt sich links irgendwie durch und versucht es zweimal von halblinks. Cara ist aber beide Male da und macht das ganz cool." />
                      <Comment minute={6} text="Die Werkself macht gut Druck in der Anfangsphase, kommt aber gegen die gut stehende Abwehrkette nicht weiter durch." />
                      <Comment minute={3} text="Aus einer Leverkusener Ecke geht es ganz schnell in die andere Richtung: Dina zieht zum Sprint an und legt auf Naika quer. Die wird dann zu weit nach rechts abgedrängt." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Und los gehts in Oliva Nova."/>
                      <Event headline="Unser Team für heute!" text={`Cheftrainerin Alien Poese schickt heute die folgende Elf auf den Rasen: \n 
                        Mit der Nummer 1: Cara Bösl – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 2: Tomke Schneider – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 7, unsere Kapitänin: Lisa Heiseler – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 8: Anouk Blaschka – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 11: Dina Orschmann – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 17: Judith Steinert – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 18: Charleen Niesler – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 21: Anna Weiß – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 28: Leonie Köster – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 42: Naika Reissner – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 77: Athanasia Moraitou – FUSSBALLGÖTTIN! \n
                        Verglichen mit dem Pokalspiel gegen Frankfurt wechseln beginnen heute Celine und Anna für Fatma und Eleni.
                        `} />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}
export default Bayer04LeverkusenUnionBerlin18012025;

export {}