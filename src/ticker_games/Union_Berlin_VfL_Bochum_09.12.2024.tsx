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

const UnionBerlinVflBochum09122024 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'Union Berlin';
    const awayTeam = 'VfL Bochum';
    const stadium = 'Stadion An der Alten Försterei';
    const league = '2. Frauen Bundesliga';
    const matchday = '12. Spieltag';
    const result = '1:1'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Cara", nachname: "Bösl" },
      { nummer: 4, vorname: "Marie", nachname: "Becker" },
      { nummer: 6, vorname: "Celine", nachname: "Frank" },
      { nummer: 7, vorname: "Lisa", nachname: "Heiseler" },
      { nummer: 11, vorname: "Dina", nachname: "Orschmann" },
      { nummer: 17, vorname: "Judith", nachname: "Steinert" },
      { nummer: 21, vorname: "Anna", nachname: "Weiß" },
      { nummer: 23, vorname: "Pia", nachname: "Metzker" },
      { nummer: 27, vorname: "Korina", nachname: "Janez" },
      { nummer: 29, vorname: "Antonia", nachname: "Halverkamps" },
      { nummer: 77, vorname: "Athanasia", nachname: "Moraitou" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 12, vorname: "Melanie", nachname: "Wagner" },
      { nummer: 3, vorname: "Latoya Maxine", nachname: "Bach" },
      { nummer: 8, vorname: "Anouk", nachname: "Blaschka" },
      { nummer: 9, vorname: "Zita", nachname: "Rurack" },
      { nummer: 18, vorname: "Charleen", nachname: "Niesler" },
      { nummer: 19, vorname: "Sophie", nachname: "Trojahn" },
      { nummer: 24, vorname: "Fatma", nachname: "Sakar" },
      { nummer: 20, vorname: "42", nachname: "Naika Reissner" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Kari", nachname: "Närdemann" },
      { nummer: 2, vorname: "Antonia", nachname: "Haase" },
      { nummer: 5, vorname: "Lilian", nachname: "Huber" },
      { nummer: 6, vorname: "Janine", nachname: "Angrick" },
      { nummer: 7, vorname: "Mara", nachname: "Wilhelm" },
      { nummer: 10, vorname: "Anna", nachname: "Moczarski" },
      { nummer: 17, vorname: "Sarah", nachname: "Freutel" },
      { nummer: 21, vorname: "Anna", nachname: "Marques" },
      { nummer: 22, vorname: "Nina", nachname: "Karkhof" },
      { nummer: 24, vorname: "Alina", nachname: "Angerer" },
      { nummer: 31, vorname: "Franziska", nachname: "Wenzel" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 18, vorname: "Svea", nachname: "Resing" },
      { nummer: 30, vorname: "Leonie", nachname: "Doege" },
      { nummer: 8, vorname: "Michelle", nachname: "Klostermann" },
      { nummer: 11, vorname: "Dörthe", nachname: "Hoppius" },
      { nummer: 13, vorname: "Maja", nachname: "Hünnemeyer" },
      { nummer: 14, vorname: "Anna", nachname: "Uebing" },
      { nummer: 19, vorname: "Lucy", nachname: "Karwatzki" },
      { nummer: 20, vorname: "Amelie", nachname: "Fölsing" }
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
                      <Coaches nameCoachHome="Ailien Poese" nameCoachAway="Kyra Malinowski" />
                      <Referee nameReferee="Jacqueline Herrmann" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Event headline="Fazit nachm Spiel" text="Wie schon in der ersten Hälfte machen wir das Spiel, können uns aber nicht belohnen. Trotz guter Chancen unsererseits und einer Bochumer in der Nachspielzeit bleibt die zweite Hälfte Torlos und wir beenden die Heim-Hinrunde mit einem Unentschieden. Nächse Woche geht es dann nochmal nach Gütersloh zum letzten Spiel diees Jahr. Bis dahin wie immer: bleibt gesund, kommt gut nach Hause und niemals vergessen..." />

                      <Comment minute={90} extra_time={3} icon="whistle" text="Das wars dann auch. Im Topspiel müssen wir den Gästen einen Punkt abtreten." />
                      <Event minute={90} extra_time={2} team="Away" headline="Chance für Bochum" text="Heieiei. Da fangen wir uns nach einer Ecke fast noch den Gegentreffer in letzte Minute. Hoppius Kopfball kann Cara aber mit langen Fingern an die Latte lenken und dann wird zum Glück geklärt." />
                      <Comment minute={90} extra_time={1} text="Zwei Minuten gibt es noch. Nochmal alles nach vorne werfen Mädels!" />
                      <Event minute={89} team="Home" headline="Chance für Union" text="Freistoß von Halblinks. Athanasia findet Judith, die knapp vorbei köpft. Diesmal zwar rechts, ins Tor kann der aber langsam trotzdem mal." />
                      <Event minute={87} team="Home" headline="Chance für Union" text="Dina erkämpft sich an der Grundlinie einen zweiten Ball, leitet an Fatma weiter, deren Flanke Naika auf Toni vorlegt. Der Volley geht, wie auch sonst, knapp links vorbei." />
                      <EventSubstitution minute={85} team="Away" player_in_vorname="Michelle" player_in_nachname="Klostermann" player_out_vorname="Alina" player_out_nachname="Angerer" />
                      <Event minute={82} team="Home" headline="Chance für Union" text="Wieder kommt Naika gut durch und nimmt diesmal Toni mit. Damit der Schuss nicht rechts unten hineingegangen ist, musste sich Närdemann gewaltig strecken..." />
                      <Comment minute={81} text="Halb im liegen erkämpft sich Dina den Ball und schickt Lisa damit. Die Flanke kommt gut in Richtung Toni, aber da hat irgendwer ihren Kopf Zwischengehalten." />
                      <EventSubstitution minute={78} team="Away" player_in_vorname="Dörthe" player_in_nachname="Hoppius" player_out_vorname="Anna" player_out_nachname="Moczarski" />
                      <Event minute={76} team="Home" headline="Chance für Union" text="Naika setzt sich in ihrer ersten Szene direkt stark gegen drei durch und setzt dann Fatma in Szene, die von rechts kommt. Wieder geht der Schuss minimal am langen Eck vorbei." />
                      <EventSubstitution minute={74} team="Home" player_in_vorname="Naika" player_in_nachname="Reissner" player_out_vorname="Korina" player_out_nachname="Janez" />
                      <Event minute={73} team="Home" headline="Chance für Union" text="Es ist wie verhext. Korina bekommt den Ball durchgesteckt und legt zu Lisa quer. Den Schuss aus acht Metern halblinks kann Närdemann wieder mal halten." />
                      <Comment minute={71} text="Wieder sind 5478 von euch hier. Und das trotz des Wetters. Abermals ein RIESEN Dankeschön an alle die gekommen sind." />
                      <EventSubstitution minute={70} team="Away" player_in_vorname="Lucy" player_in_nachname="Karwatzki" player_out_vorname="Lilian" player_out_nachname="Huber" />
                      <Comment minute={68} text="Judith will nur den Ball weiterspielen und dann wie eine Tanne vor Weihnachten gefällt. Gibt zwar Freistoß aber eine Verwarnung wäre da auch nicht unangebracht."/>
                      <Comment minute={68} text="Fatma hat direkt Bock. Über rechts macht sie es schnell, nimmt ein paar Gegnerinnen raus und flankt hoch Richtung Tor. Der Ball landet auf der anderen Strafraumseite bei Athanasia, deren Flanke zu zentral ist und in den Armen von Närdemann landet."/>
                      <EventSubstitution minute={64} team="Home" player_in_vorname="Fatma" player_in_nachname="Sakar" player_out_vorname="Pia" player_out_nachname="Metzker" text="Unsere Torschützin hat Feierabend."/>
                      <Comment minute={62} text="Die kurze Verschnaufpause möchte Bochum sichtlich ausnutzen. Aber auch wenn sie mal in den Strafraum kommen, brennt nichts an. Und gleich gehts auch wieder nach vorne." />
                      <Comment minute={59} text="Da ging mein Puls kurz hoch. Mit einem langen Ball ist Marques hinter unserer Linie. Zum Glück ist Marie mit Kopf und Fuß schnell und klärt, bevor es wirklich brenzlig wird." />
                      <Comment minute={55} text="Bochum scheint jetzt auch wieder mitspielen zu wollen und kommt mit mehreren in Richtung Cara gestürmt. Unsre Abwehr steht aber wie ne Eins und regelt das." />
                      <Event minute={51} team="Home" headline="Chance für Union" text="Wieder geht der Ball nur knapp links vorbei. Diesmal hat sich Celine ein Herz gefasst und probiert einen aus dem Strafraum zurück kommenden Ball aus 22 Metern direkt aufs Tor zu bringen. Wäre so schön gewesen..." />
                      <Comment minute={49} text="Gab kurz Aufregung der Bochumer. Die wollen nach einem Eckball ein Handspiel gesehen haben. Das Schiri-Team passt aber auf und lässt weiterlaufen." />
                      <Comment minute={47} text="Dina setzt sich direkt mal gegen zwei im Strafraum durch. Der Schuss wird dann abgefälscht und kullert vor sich hin. Einfach mal ein Zeichen setzen." />
                      <Comment minute={46} text="Weiter gehts. Jetzt auch Richtung Waldseite." />

                      <Event minute={45} extra_time={3} headline="Fazit inner Pause" text="Das Einzige, was hier nicht passt, ist das Ergebnis. Abgesehen von dem Ausgleich kommt hier nichts von Bochum. Wir machen das Spiel und kommen immer wieder gefährlich vors Tor. Nach der Pause nutzen wir einfach wieder eine oder zwei unserer Chancen und dann passt das auch wieder." />
                      <Event minute={45} extra_time={2} headline="Abpfiff 1. Halbzeit" text="Dann gehts auch schon ins Warme. Zumindest für die Akteure da unten..." />

                      <Comment minute={45} extra_time={1} text="Eine Minute gibt es in unserer Druckphase nochmal drauf." />
                      <Comment minute={45} text="Marie fängt einen Bochumer Gegenstoß ab und macht es über links schnell. Nach Seitenwechsel auf die rechte Außenbahn bringt Pia den Ball zu Toni, die aus 14 Metern mit einem Volley drauf hält. Wieder macht Närdemann uns einen Strich durch die Rechnung.. Gleich passiert's aber. Ich spüre es!" />
                      <Event minute={45} team="Home" headline="Chance für Union" text="Marie fängt einen Bochumer Gegenstoß ab und macht es über links schnell. Nach Seitenwechsel auf die rechte Außenbahn bringt Pia den Ball zu Toni, die aus 14 Metern mit einem Volley drauf hält. Wieder macht Närdemann uns einen Strich durch die Rechnung.. Gleich passiert's aber. Ich spüre es!" />
                      <Comment minute={41} text="Die ist auch nicht ungefährlich. In der Mitte wird der Ball zwar geklärt, von links kommt die zweite Flanke dann aber auch nochmal hoch rein. Aber auch da kriegt keine den Kopf hinter." />
                      <Comment minute={39} text="Mit ein paar Doppelpässen wurschteln sich Korina, Lisa und Dina an so ungefähr allen Bochumerinnen entlang des Sechzehners. Am Ende kommt eine Ecke bei rum." />
                      <Event minute={36} team="Home" headline="Chance für Union" text="Athanasia probiert es einfach mal aus der zweiten Reihe. Das Flattern hat den Schuss auch nicht schlechter gemacht." />
                      <Comment minute={35} text="Da hat Lisa den Ball so schön über die Keeperin ins Netz geköpft und dann wird das Tor zurückgepfiffen... Da sei im Vorhinein wohl ein Foul gewesen sein." />
                      <Comment minute={32} text="Wir lassen uns von dem Tor nicht beeindrucken. Es geht weiter in Richtung Bochumer Tor! Pia war gerade auch fast direkt wieder durch, wurde dann noch zur Grundlinie abgedrängt." />
                      <EventGoal minute={29} score="1:1" team="Away" vorname="Nina" nachname="Kerkhof" text="Bochum gleicht mit dem ersten wirklichen Torschuss aus... Kerkhof kann sich mit einem Solo von links in die Mitte durchwurschteln und schlenzt den Ball dann aufs Tor. Cara streckt sich zwar so gut es geht und kommt auch noch dran, der Schuss ist aber zu platziert ins rechte Eck..." />
                      <Comment minute={28} text="Bochum kommt jetzt zwar auch mal nach vorne, die Mischung aus Hereingabe und Torschuss ist für Cara kein Problem." />
                      <Event minute={25} team="Home" headline="Chance für Union" text="Es geht weiter nur in eine Richtung. Lisa legt gut aus dem Strafraum zurück auf Toni, die zwar eine Verteidigerin aussteigen lässt, den Ball dann aus der Drehung aber nicht platziert genug aufs Tor bringen kann." />
                      <EventGoal minute={22} score="1:0" team="Home" vorname="Pia" nachname="Metzker" text="JAAAAA! Da ist die Führung. Wieder bringt Athanasia einen Freistoß gut von links in den Strafraum. Närdemann verschätzt sich da etwas und springt unter dem Ball durch. Dinas Schuss wird zwar auf der Line geblockt, aber Pia steht am zweiten Pfosten genau richtig und schiebt ein." />
                      <Comment minute={21} text="Der Ball rotiert jetzt mehr im Mittelfeld. So richtig viel Platz ist vorne gerade nicht." />
                      <Comment minute={17} text="So knapp! Pia steckt aus dem Mittelfeld zu Dina durch. Der Ball ist ein Ticken zu weit und landet nur bei Närdemann. Schade..." />
                      <Event minute={16} team="Away" headline="Chance für Bochum" text="Der Freistoß landet auf der Latte. Cara wäre aber da gewesen." />
                      <EventCard minute={15} team="Home" card_type="Gelb" vorname="Celine" nachname="Frank" text="Dafür gibts dann auch noch Gelb?!" />
                      <Comment minute={15} text="Jetzt gibts eine Gefährliche Freistoßposition für die Gäste. Celine soll den Ball nicht getroffen haben. Weiß ich ja nicht..." />
                      <Comment minute={13} text="Wieder bringen wir einen Freistoß von links gut rein. Im Kuddelmuddel zwischen drei Bochumerinnen kann Dina den Ball dann nicht festmachen." />
                      <Comment minute={10} text="Die ersten zehn Minuten gehören ganz klar uns. Wir hatten auch eine erste, gute Chance auf die Führung. So kann es weiter gehen." />
                      <Event minute={7} team="Home" headline="Chance für Union" text="Ein weiterer Freistoß kommt gut in den Fünfer. Da kommt Celine zum Kopfball, Nädermann steht aber richtig und kann abfangen." />
                      <EventCard minute={7} card_type="Gelb" team="Away" vorname="Lilian" nachname="Huber" />
                      <Comment minute={6} text="Einen Freistoß aus guter Position setzt Athanasia in die Mauer. Da war mehr drin."/>
                      <Comment minute={5} text="Bochum versuchts über links. Da möchte Marques durchstecken, Cara passt aber auf und schnappt sich den Ball." />
                      <Comment minute={2} text="Bochum startet mit einem Freistoß in unserer Hälfte. Pia klärt aber problemlos mit dem Kopf." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Wir geben den Ball frei."/>

                      <Event headline="Das soll zweite Liga sein?" text="Mit einem Schnitt von über 5000 Zuschauern pro Spiel sind wir nicht nur mit Abstand führend in der 2. Liga, sondern auch über ganz Deutschland gesehen, auf dem Treppchen - Champions League reif! Knapp vor uns stehen nur die Bundesligisten Bremen und Wolfsburg. Ein riesen Danke an alle von euch die immer da sind. Und wenn jetzt noch jeder von euch jemanden zum Spiel mitbringt kriegen wir die anderen sogar auch noch getoppt." />
                      <Event headline="Was geht so?" text= {`Obwohl wir vor zwei Wochen im Pokal alles gegeben haben und über Strecken auch besser waren, hatten wir am Ende einfach kein Glück und mussten uns der Eintracht geschlagen geben… War natürlich sehr bitter, jetzt fokussieren wir uns aber voll und ganz auf die Liga. \n
                      Da kommt der VfL Bochum zu uns. Und das nicht nur einmal diese Woche. Zweimal sind wir den Bochumern tatsächlich schon begegnet. Das ist aber schon gut 10 Jahre her. In der 2. Bundesliga Nord gab es 2014/15 bei beiden Spielen ein Unentschieden. Nach der Saison sind wir dann beide unsere Wege gegangen und haben lange nichts mehr voneinander gehört. Wie es der Zufall aber so will, gab es aber auch beim VfL in den letzten Jahren einen Aufschwung. Ebenfalls ungeschlagen sind sie letzte Saison durch die Regionalliga West marschiert und konnten mit zwei knappen Siegen gegen Mainz den Aufstieg perfekt machen. \n
                      Heute kommen sie als Tabellendritter zu uns. Die Serie von drei verlorenen Pflichtspielen in Folge verlängern wir aber gerne noch um ein Spiel.`} />
                      <Event headline="Unser Team für heute!" text={`Cheftrainerin Alien Poese schickt heute die folgende Elf auf den Rasen: \n 
                        Mit der Nummer 1: Cara Bösl – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 4: Marie Becker – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 6: Celine Frank – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 7, unsere Kapitänin: Lisa Heiseler – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 11: Dina Orschmann – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 17: Judith Steinert – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 21: Anna Weiß – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 23: Pia Metzker – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 27: Korina Janež – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 29: Antonia Halverkamps – FUSSBALLGÖTTIN! \n
                        Mit der Nummer 77: Athanasia Moraitou – FUSSBALLGÖTTIN! \n
                        Verglichen mit dem Pokalspiel gegen Frankfurt wechseln beginnen heute Celine und Anna für Fatma und Eleni.
                        `} />
                      <Event headline="Unioner!" text={`2. Advent, nach kurzer Verschnaufpause ein letztes Mal Heimspiel in der 2. Bundesliga in diesem Jahr. Und dann kommt ‘tief aus’m Westen’ auch noch der VfL zum Topspiel zweier Aufsteiger. Festlicher kann es doch wirklich nicht werden (das Wetter mal außen vor gelassen)! Mehr Infos zum Spiel und unsere Aufstellung kommen gleich…`} />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}
export default UnionBerlinVflBochum09122024;


export {}