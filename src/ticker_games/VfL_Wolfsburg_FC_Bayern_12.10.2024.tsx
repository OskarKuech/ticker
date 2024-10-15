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
import EventCard from "../components_ticker/EventCard";
import EventSubstitution from "../components_ticker/EventSubstitution";

import teamColors from '../utils/teamColors.json';
import { TeamColorProvider } from '../utils/TeamColorContext';

const VfLWolfsburgFCBayern121024 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'VfL Wolfsburg';
    const awayTeam = 'FC Bayern';
    const stadium = 'Volkswagen Arena';
    const league = 'Frauen Bundesliga';
    const matchday = '6. Spieltag';
    const result = '2:0'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Merle", nachname: "Frohms" },
      { nummer: 2, vorname: "Lynn", nachname: "Wilms" },
      { nummer: 4, vorname: "Kathrin", nachname: "Hendrich" },
      { nummer: 6, vorname: "Janina", nachname: "Minge" },
      { nummer: 8, vorname: "Lena", nachname: "Lattwein" },
      { nummer: 10, vorname: "Svenja", nachname: "Huth" },
      { nummer: 11, vorname: "Alexandra", nachname: "Popp" },
      { nummer: 25, vorname: "Vivien", nachname: "Endemann" },
      { nummer: 29, vorname: "Jule", nachname: "Brand" },
      { nummer: 31, vorname: "Marina", nachname: "Hegering" },
      { nummer: 39, vorname: "Sarai", nachname: "Linder" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 22, vorname: "Lisa", nachname: "Schmitz" },
      { nummer: 7, vorname: "Chantal", nachname: "Hagel" },
      { nummer: 9, vorname: "Lineth", nachname: "Beerensteyn" },
      { nummer: 14, vorname: "Nuria", nachname: "Rabano" },
      { nummer: 18, vorname: "Justine", nachname: "Kielland" },
      { nummer: 21, vorname: "Rebecka", nachname: "Blomqvist" },
      { nummer: 23, vorname: "Sveindis", nachname: "Jonsdottir" },
      { nummer: 24, vorname: "Joelle", nachname: "Wedemeyer" },
      { nummer: 28, vorname: "Tabea", nachname: "Sellner" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Maria Luisa", nachname: "Grohs" },
      { nummer: 2, vorname: "Linda", nachname: "Sembrant" },
      { nummer: 4, vorname: "Glodis Perla", nachname: "Viggosdottir" },
      { nummer: 6, vorname: "Tuva", nachname: "Hansen" },
      { nummer: 7, vorname: "Giulia", nachname: "Gwinn" },
      { nummer: 9, vorname: "Jovana", nachname: "Damnhanovic" },
      { nummer: 11, vorname: "Lea", nachname: "Schüller" },
      { nummer: 17, vorname: "Klara", nachname: "Bühl" },
      { nummer: 21, vorname: "Pernille", nachname: "Harder" },
      { nummer: 25, vorname: "Sarah", nachname: "Zadrazil" },
      { nummer: 31, vorname: "Georgia", nachname: "Stanway" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 32, vorname: "Ena", nachname: "Magmutovic" },
      { nummer: 10, vorname: "Linda", nachname: "Dallmann" },
      { nummer: 12, vorname: "Sydney", nachname: "Lohmann" },
      { nummer: 14, vorname: "Alara", nachname: "Sehitler" },
      { nummer: 16, vorname: "Julia", nachname: "Zigiotte" },
      { nummer: 22, vorname: "Dagou", nachname: "Doucoure" },
      { nummer: 24, vorname: "Weronika", nachname: "Zawistowska" },
      { nummer: 26, vorname: "Samantha", nachname: "Kerr" },
      { nummer: 30, vorname: "Carolin", nachname: "Simon" }

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
                      <Coaches nameCoachHome="Tommy Stroot" nameCoachAway="Alexander Straus" />
                      <Referee nameReferee="Franziska Wildfeuer" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>  
                      <Comment minute={90} extra_time={6} icon="whistle" headline='Abpfiff' text="Damit setzt es sowohl die erste Bayern Niederlage der Saison wie auch die erste Bundesliga Niederlage seit 2022. Die sonst so starke Offensive kam über die gesamte Laufzeit nicht ins Spiel und hatte nur vereinzelt Chancen durch Schüller und Harder. Wolfsburg hat mit viel Leidenschaft verteidigt und zu jeder Zeit dagegen gehalten und war, durch Endemann und die Ex-Münchnerin Beerensteyn, effektiv genug, um wichtige Punkte zu gewinnen und den Titelkampf der Bundesliga wieder zu eröffnen."/>
                      <Comment minute={90} extra_time={5} text="Bayern bekommt nochmal eine Ecke, die Minge ungewollt aufs eigene Tor bringt. Für Frohms aber nicht gefährlich." />
                      <EventCard minute={90} extra_time={4} vorname="Sveindis" nachname="Jonsdottir" card_type="Gelb" team="Home" text="Jonsdottir hält Lohmann klar am Trikot und wird dafür mit einer Karte verwarnt." />
                      <EventSubstitution minute={90} extra_time={3} player_in_vorname="Chantal" player_in_nachname="Hagel" player_out_vorname="Svenja" player_out_nachname="Huth" team="Home" />
                      <Comment minute={90} extra_time={2} text="Alle Feldspielerinnen der Bayern kommen zum Freistoß nahe der Mittellinie nach vorne. Viggosdottir köpft aber ins Toraus." />
                      <Comment minute={90} extra_time={1} text="5 Minuten bekommen die Bayern noch um auszugleichen." />
                      <Event minute={89} headline="Chance für Bayern" team="Away" text="Auf der anderen lässt Harder die Riesenchance zum Anschluss liegen. Von Dallmann in den Sechzehner geschickt, kommt Harder ins 1-gegen-1 mit Frohms. Der Schuss der Dänin wird leicht von der Wolfsburgerin abgefälscht und landet nur an der Latte." />
                      <Event minute={88} headline="Chance für Wolfsburg" team="Home" text="Jonsdottir mit der risenchance auf die endgültige Entscheidung. Lattwein spielt die Isländerin perfekt an der Grenze zum Sechzehner an. Was dann folgt, kann sowohl als Schuss als auch als Abspiel gewertet werden, es wurde zumindest nicht gefährlich." />
                      <Comment minute={86} text="Es geht weiter und direkt mit einem Dribbling von Svenja Huth gegen zwei. Sie kommt zur Flanke, findet aber keine Mitspielerin." />
                      <Comment minute={84} text="Frohms fängt einen zu lang geratenen Ball im eigenen Strafraum ab und setzt sich, den Oberschenkel haltend, auf den Boden. Schon zum dritten Mal sammeln sich alle Spielerinnen bei ihren Trainern für taktische Anweisungen." />
                      <Comment minute={83} text="Stanway nach Ballgewinn mit einem direkten Pass aus der Mitte in den Lauf von Pernille Harder. Janina Minge grätscht im letzten Moment dazwischen und klärt zur Ecke." />
                      <Comment minute={81} text="Die Gäste aus der bayerischen Landeshauptstadt werfen nun zwar alles nach vorne, kommt aber immer noch nicht durch. 10 Minuten bleiben ihnen noch, um die erste Bundesliga Niederlage seit zwei Jahren abzuwenden." />
                      <Comment minute={78} text="Hegering fängt einen Abschlag von Grohs tief in der Münchener Hälfte ab und versucht es mal aus über 30 Metern. Der Ball landet bei einem der Fans auf dem Oberrang hinter dem Tor." />
                      <EventCard minute={77} team="Away" vorname="Linda" nachname="Sembrant" card_type="Gelb" text="Jonsdottir wird lang an der Mittellinie angespielt und von Sembrant in Ringermanier zu Fall gebracht." />
                      <EventSubstitution minute={76} team="Home" player_in_vorname="Sveindis" player_in_nachname="Jonsdottir" player_out_vorname="Vivien" player_out_nachname="Endemann" />
                      <Event minute={74} team="Away" headline="Chance für Bayern" text="Frohms kommt bei einer Ecke aus dem Tor, kann aber nicht klären. Dallmann kommt so zum Kopfball und Popp muss kurz vor der Linie klären, wo Frohms den Ball dann aufnimmt." />
                      <EventSubstitution minute={73} team="Away" player_in_vorname="Sydney" player_in_nachname="Lohmann" player_out_vorname="Lea" player_out_nachname="Schüller" />
                      <EventSubstitution minute={73} team="Away" player_in_vorname="Samantha" player_in_nachname="Kerr" player_out_vorname="Sarah" player_out_nachname="Zadrazil" />
                      <EventSubstitution minute={73} team="Away" player_in_vorname="Alara" player_in_nachname="Sehitler" player_out_vorname="Klara" player_out_nachname="Bühl" />
                      <Event minute={72} headline="Chance für Wolfsburg" team="Home" text="Auch bei der zweiten Wolfsburger Ecke wird es wieder gefährlich. Hegering verschwindet hinter allen Münchnerinnen und bringt den Ball mit dem Kopf aufs Tor, wo Grohs pariert." />
                      <Comment minute={70} text="Grohs muss nach der Klärung Aktion behandelt werden. Wie schon in der ersten Halbzeit sammeln sich alle Spielerinnen bei ihren Trainern." />
                      <Event minute={69} headline="Chance für Wolfsburg" team="Home" text="Und es wird direkt wieder gefährlich. Endemann nimmt richtig Fahrt auf und flankt von rechts perfekt auf Popp, die am Elfmeterpunkt im Fall frei zum Kopfball kommt. Durch einen Aufprall auf der Fünfmeterlinie wir die Flugbahn ganz eklig für Grohs, die sich ganz lang machen muss um ihn über den Querbalken zu lenken." />
                      <EventGoal minute={67} team="Home" vorname="Lineth" nachname="Beerensteyn" score="2:0" text="Das ist mal eine Einwechslung, die sich direkt ausgezahlt hat. Beerensteyns trifft den Ball nach einer Ecke nicht richtig, aber Stanway auch nicht. Dadurch bleibt er im Fünfmeterraum liegen und Beerensteyn setzt mit einem zweiten Versuch nach und versenkt gnadenlos unter der Latte." />
                      <Event minute={66} headline="Chance für Wolfsurg" team="Home" text="Und direkt ist mal eine Chance für Wolfsburg da. Beerensteyn gewinnt ein Kopfballduell und verfehlt das Tor mit ihrem ersten Ballkontakt knapp." />
                      <Comment minute={65} text="Von den Bayern kommt in der zweiten Halbzeit offensiv wenig bis gar nichts. Die defensiv stehenden Wolfsburgerinnen versuchen es weiterhin hauptsächlich mit Kontern, aber auch auf der anderen Seite entstehen kaum Torchancen." />
                      <EventSubstitution minute={64} team="Home" player_in_vorname="Lineth" player_in_nachname="Beerensteyn" player_out_vorname="Jule" player_out_nachname="Brand" />
                      <Comment minute={63} text="Lattwein verlagert mit guter Übersicht vom zentrum diagonal nach rechts auf Huth, deren Flanke zu einem halben, aber schwachen, Torschuss wird und kein Problem für Grohs ist." />
                      <Comment minute={60} text="Wolfsburg setzt sich wieder im Mittelfeld durch und macht es über Endemann schnell. Kurz vor der Grundlinie möchte sie abspielen, verpasst aber den Zeitpunkt und so kullert der Ball nur ins Toraus." />
                      <Comment minute={58} text="Huths Flanke findet keine Abnehmerin in Grün, aber den Kopf von Zagdrazil von wo der Ball gefährlich in den eigenen Fünfer geleitet wird. Gwinn muss klären." />
                      <Comment minute={55} text="Nach einem körperlichen Start in die zweite Halbzeit pendelt es sich wieder zu dem Spiel aus der ersten Hälfte ein. Die Wolfsburgerinnen überlassen den Bayern meist den Ball, gehen aber mit naher Deckung auch effektiv gegen das bekannt schnelle Aufbauen vor." />
                      <Comment minute={53} text="Die frisch eingewechselte Simon bringt direkt eine Flanke mit Freistoß hinein. Der Ball wird geklärt, landert aber bei Stanway, die über das Tor verzieht." />
                      <Comment minute={53} text="Durch die Einwechslung von Simon wechselt Gwinn wieder auf ihre gewohnte rechte Seite und Simon übernimmt links." />
                      <EventSubstitution minute={52} team="Away" player_in_vorname="Carolin" player_in_nachname="Simon" player_out_vorname="Tuva" player_out_nachname="Hansen" />
                      <Comment minute={51} text="Zagdrazil versucht Harder mit einem Steilpass auf die linke Seite zu bedienen. Der Ball gerät etwas zu lang für die Angreiferin und springt von der Eckfahne ins Seitenaus." />
                      <Comment minute={47} text="Jetzt lernen sich Schüller und Brand an der Mittellinie kennen. Diesmal bleibt die Stürmerin der Gäste liegen und muss behandelt werden." />
                      <Comment minute={46} text="Harder trifft Wilms am Knöchel. Die Wolfsburgerin bleibt mit schmerzverzerrtem Gesicht an der Strafraumgrenze liegen." />
                      <Comment minute={46} text="Ohne Wechsel geht es mit Anstoß Bayern weiter." />

                      <Event headline="Halbzeit" text="Die Wolfsburgerinnen führen durch das frühe Tor von Endemann zur Pause mit 1:0 gegen die bis dato noch ungeschlagenen Meisterinnen aus München. Mitte der zweiten Hälfte haben sich die Gastgeberinnen dann etwas zurückgezogen und mehr auf das Verteidigen und Kontern eingestellt. Bis auf eine gute Chance von Haderer und einem Torschuss von Schüller nach Eckvariante kam auch von den Gästen noch nicht viel." />

                      <Comment minute={45} extra_time={4} text="Katharina Hendrich dreht mal auf und zieht an drei Münchnerinnen vorbei. Sie spielt Brand links außen an, deren Flanke abgefälscht wird. Von der anderen Seite probiert Huth es ebenfalls hoch, doch auch dieser Heber wird nicht gefährlich und von Grohs aus der Luft geholt." />
                      <Comment minute={45} extra_time={3} text="Stanway bringt Brand genau vor der Schiedsrichterin in der Wolfsburger Hälfte zu Fall - Freistoß für den VfL." />
                      <Comment minute={45} extra_time={1} text="Aufgrund der langen Behandlungspause werden 5 Minuten nachgespielt." />
                      <Comment minute={45} text="Svenja Huth spielt auf Wilms, die auf der rechten Seite frei zur Flanke kommt. Der Ball landet leicht abgefälscht bei Popp, die den Ball im Sprung nur mit der Hacke trifft und nicht gefährlich machen kann." />
                      <Event minute={43} headline="Chance für Bayern" team="Away" text="Die Bayern wieder mit derselben Eckenvariante. Diesmal kommt der flache Ball zu Lea Schüller, die den Ball aus einer Halbdrehung auf die rechte Ecke des Tores bringt, wo Frohms bereits auf den Weg hin ist." />
                      <Comment minute={43} text="Klara Bühl nimmt den Ball direkt, rechts vorbei an der Mauer. Aber Popp steht richtig und klärt mit dem Kopf zur Ecke." />
                      <Comment minute={42} text="Zadrazil wird gut 4 Meter vor dem Strafraum von Lattwein zu Fall gebracht. Es gibt Freistoß in einer sehr guten Situation." />
                      <Comment minute={40} text="Stanway probiert es mal mit einem langen hohen Ball von halbrechts in den Sechzehner. Der Ball kommt länger als gewollt und Frohms fängt ihn mit Leichtigkeit ab." />
                      <Comment minute={39} text="Svenja Huth zieht von der rechten Seite in den Strafraum ein, wird dann aber bis zur Grundlinie weiter gedrängt. Von dort schiebt sie den Ball, durch die Beine von Marie Grohs, in die Mitte, wo Hansen klären kann." />
                      <Comment minute={38} text="Dem Spiel mangelt es bisher zwar an einer großen Menge an Torchancen, ist aber dennoch ein sehr ansehnliches Fußballspiel. Die Wölfinnen lassen den Bayern keine Chance lange aufzubauen und machen das Spiel immer wieder schnell." />
                      <Comment minute={36} text="Brand läuft Hansen hoch an, die den Ball zu Grohs zurückspielen möchte. Endemann kreuz den Weg und zwingt Hansen so abzudrehen, wo Brand ihr den Ball wegschnappt. Sie legt sich den Ball dann ein Stück zu weit vor und er rollt im Toraus.." />
                      <Event minute={34} headline="Chance für Bayern" team="Away" text="Harder mit der Ausgleichschance für die Gäste. Schüller leitet den Ball mit der Hacke an die startende Harder weiter, die durchstartet. Im Sechzehner verzieht sie den Schuss von halbrechts links am Tor vorbei." />
                      <Comment minute={32} text="Gwinn schlägt einen Freistoß von der linken Seite lang an den zweiten Pfosten. Dort ändert Viggosdottir die Richtung des Spielgeräte wieder in Richtung Mitte, wo er an allen Spielerinnen vorbeifliegt." />
                      <Comment minute={30} text="Brand hält den Ball an der linken Grundlinie noch im Spiel, verliert ihn dann im 1-gegen-2 Duell an der nach hinten mitarbeitenden Dallmann." />
                      <Comment minute={29} text="Sarah Zadrazil mit kurzer Basketball-Einlage. Im Kopfballduell entwischt ihr der Arm nach oben und stoppt den Ball." />
                      <Comment minute={28} text="Zadrazil gewinnt den Ball im Aufbau der Wölfinnen. Von rechts spielt sie Harder im Sechzehner an, die im letztem moment Fair von Lattwein aufgehalten wird." />
                      <Comment minute={26} text="Brand gewinnt den Ball an der Mittellinie und ist auf und davon. Endemann läuft links von ihr, wird aber erst zu spät angespielt. Viggosdottir ahnt den Pass in den Sechzehner und bekommt ihr Bein dazwischen." />
                      <Comment minute={25} text="Durch den Wechsel steht Harder nun zentral in der Bayerischen Dreifach-Spitze. Dallmann übernimmt Harders Position auf der rechten Seite." />
                      <EventSubstitution minute={24} team="Away" player_out_vorname="Jovana" player_out_nachname="Damnjanovic" player_in_vorname="Linda" player_in_nachname="Dallmann" />
                      <Comment minute={24} text="Unter Applaus vom Wolfsburger Publikum wird Damnjanovic vom Platz getragen." />
                      <Comment minute={22} text="Damnjanovic bleibt weiterhin am Boden liegen und wird behandelt. Währenddessen eielen Sanitäter mit einer Trage herbei." />
                      <EventCard minute={21} team="Away" card_type="Gelb" vorname="Tuva" nachname="Hansen" text="Hansen ist anderer Meinung als Schiedsrichterin Wildfeuer. Für Meckern erhält sie die Gelbe Karte." />
                      <Comment minute={20} text="Und direkt der nächste Zusammenprall von Hegering. Diesmal im Luftduell mit Damnjanovic, die liegen bleibt aber keinen Freistoß bekommt." />
                      <Comment minute={19} text="Beide Trainer nutzen die Verletzungspause für taktische Anweisungen an ihre Spielerinnen. Hegering kehrt unterdessen auf den Platz zurück." />
                      <Comment minute={18} text="Harder bekommt den Ball von Bühl perfekt in den Wolfsburger Sechzehner gespielt und steht frei vor Frohms. Hegering kommt im letzten Moment von der Seite und klärt den Ball zur Seite weg. Hegering bleibt liegen und muss am Kiefer behandelt werden." />
                      <Comment minute={17} text="Hansen sehr symbolisch für das bisherige Bayerische Offensivspiel: Sie läuft mit Ball die rechte Außenbahn entlang und ins Seitenaus." />
                      <Comment minute={15} text="Die Bayern mit einer interessanten Eckenvariante. Alle Spielerinnen im Strafraum stehen am Ende des Fünfmeterraums hinter dem zweiten Pfosten. Bühls Ecke kommt dann flach auf den ersten Pfosten und findet keinen der heran rauschenden Müncherinnen." />
                      <Comment minute={13} text="Bühl bringt den Freistoß links in den Sechzehner. Dort findet sich keine Abnehmerin und der Ball verläuft ins Aus." />
                      <Comment minute={12} text="Wilms pflückt Zadrazil in der eigenen Hälfte von den Beinen und wird mündlich verwarnt." />
                      <Comment minute={9} text="Die Wolfsburgerinnen versuchen es im eigenen Ballbesitz direkt schnell zu machen. Wilms spielt nach Ballgewinn an der Mittellinie direkt einen langen Ball auf Brand, den sie nicht vor der heraus eilenden Grohs erreichen kann." />
                      <Comment minute={7} text="Auf der Gegenseite versucht Bühl es mit einer Flanke auf Schüller. Frohms passt auf und fängt den Ball vor der Angreiferin ab." />
                      <EventGoal minute={5} team="Home" vorname="Vivien" nachname="Endemann" score="1:0" text="Wolfsburg mit einem Blitzstart ins Topspiel! Damnjanovic mit einem ganz unglücklichen Fehlpass zur eigenen Abwehr. Endemann fängt den Ball ab, zieht an Sembrant vorbei ins Zentrum und schließt sehenswert in den rechten Winkel ab. Maria Grohs ohne jegliche Abwehrchance." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Der VfL eröffnet das Topspiel der Frauen Bundesliga von rechts nach links."/>
                      
                      <Event headline="" text="Die Bayern, auf der anderen Seite, kommen mit nach dem 5:2 gegen Mitfavorit Arsenal gestärkt zum Klassiker. Trotzdem gibt Alexander Straus Simon und Lohmann eine Verschnaufpause. Für sie beginnen Sembrant und Schüller von Anfang an. " />
                      <Event headline="" text="Wolfsburgs Trainer Tommy Stroot wechselt im Vergleich zur knappen Niederlage in Rom in der Champions League dreimal: Hendrich, Endemann und Brand starten für Beerensteyn, Jonsdottir und Blomqvist, die alle auf der Bank Platz nehmen." />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}

export default VfLWolfsburgFCBayern121024;