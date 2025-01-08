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

const VfLWolfsburgGalatasarayIstanbul201124 = () => {
    const [activeTab, setActiveTab] = useState("Ticker");

    const homeTeam = 'VfL Wolfsburg';
    const awayTeam = 'Galatasaray Istanbul';
    const stadium = 'AOK-Stadion';
    const league = 'Frauen Champions League';
    const matchday = '4. Spieltag';
    const result = '5:0'
  
    const homeTeamColor = teamColors[homeTeam];
    const awayTeamColor = teamColors[awayTeam];

    const homeTeamPlayers = [
      { nummer: 1, vorname: "Merle", nachname: "Frohms" },
      { nummer: 2, vorname: "Lynn", nachname: "Wilms" },
      { nummer: 4, vorname: "Kathrin", nachname: "Hendrich" },
      { nummer: 6, vorname: "Janina", nachname: "Minge" },
      { nummer: 9, vorname: "Lineth", nachname: "Beerensteyn" },
      { nummer: 10, vorname: "Svenja", nachname: "Huth" },
      { nummer: 11, vorname: "Alexandra", nachname: "Popp" },
      { nummer: 18, vorname: "Pernille", nachname: "Kielland" },
      { nummer: 21, vorname: "Rebecka", nachname: "Blomqvist" },
      { nummer: 25, vorname: "Marina", nachname: "Hegering" },
      { nummer: 39, vorname: "Sarai", nachname: "Linder" }
    ];

    const homeTeamSubstitutionPlayers = [
      { nummer: 22, vorname: "Lisa", nachname: "Schmitz" },
      { nummer: 30, vorname: "", nachname: "Borbe" },
      { nummer: 7, vorname: "Chantal", nachname: "Hagel" },
      { nummer: 7, vorname: "Lena", nachname: "Lattwein" },
      { nummer: 14, vorname: "Nuria", nachname: "Rabano" },
      { nummer: 19, vorname: "Fenna", nachname: "Kalma" },
      { nummer: 20, vorname: "Ariana", nachname: "Arias" },
      { nummer: 24, vorname: "Joelle", nachname: "Wedemeyer" },
      { nummer: 25, vorname: "Vivien", nachname: "Endemann" },
      { nummer: 29, vorname: "Jule", nachname: "Brand" }
    ];

    const awayTeamPlayers = [
      { nummer: 1, vorname: "Gamze", nachname: "Yaman" },
      { nummer: 2, vorname: "Jazmin", nachname: "Wardlow" },
      
      { nummer: 5, vorname: "Eda", nachname: "Karatas" },
      { nummer: 7, vorname: "Arzu", nachname: "Karabulut" },
      { nummer: 8, vorname: "Emine Ecem", nachname: "Esen" },
      { nummer: 11, vorname: "Catalina", nachname: "Usme" },
      { nummer: 12, vorname: "Andrea", nachname: "Staskova" },
      { nummer: 13, vorname: "Fatma Sare", nachname: "Öztürk" },
      { nummer: 18, vorname: "Kristina", nachname: "Bakarandze" },
      { nummer: 24, vorname: "Arzu", nachname: "Akkurt" },
      { nummer: 25, vorname: "Hapsatou", nachname: "Malado Diallo" }
    ];

    const awayTeamSubstitutionPlayers = [
      { nummer: 17, vorname: "Handan", nachname: "Kurga" },
      { nummer: 23, vorname: "Müge Inan", nachname: "Kanour" },
      { nummer: 10, vorname: "Ismigül", nachname: "Yaciner" },
      { nummer: 16, vorname: "Ebru", nachname: "Topcu" },
      { nummer: 20, vorname: "Berna", nachname: "Yeniceri" },
      { nummer: 22, vorname: "Nazlican", nachname: "Parlak" },
      { nummer: 77, vorname: "Irem", nachname: "Eren" },
      { nummer: 99, vorname: "Benan", nachname: "Altinas" }
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
                      <Coaches nameCoachHome="Tommy Stroot" nameCoachAway="Metin Ülgen" />
                      <Referee nameReferee="Ivana Projkovska (UKR)" />
                  </>
              )}

              {activeTab === "Ticker" && (
                  <>
                      <Event headline="" text="Für die Wölfinnen geht es dann am Samstag bei Regionalligist Mainz 05 im DFB-Pokal weiter, ehe in der Liga die Woche darauf die ebenfalls formstarken und dicht folgenden Leverkuserinnen zum Duell bitten." />  
                      <Event headline="" text="Für Galatasaray war es das mit der Chance aufs Weiterkommen ins Achtelfinale. Auch wenn es rechnerisch noch möglich wäre, ist das Torverhältnis und null Punkte sehr unrealistisch." />  
                      <Event headline="" text="Durch den Sieg klettert Wolfsburg, dank besseren Torverhältnisses, vorerst auf den zweiten Platz in Gruppe A, hinter Lyon. Diese spielen gleich noch gegen die AS Rom, die sicher den zweiten Platz zurückerobern und mit Lyon gleichziehen möchten." />  

                      <Comment minute={90} extra_time={8} icon="whistle" headline="Abpfiff" text="Ende in Wolfsburg. Die Hausherrinnen gewinnen hochverdient, wie schon in der Woche zuvor, mit 5:0 und sind somit vorerst punktgleich mit den Roma. Am Ende dürfte aber trotz gutem Ergebnis vor allem die ausbaufähige Chancenverwertung herausstechen, die bei fast 50 Torschüssen noch ausbaufähig ist." />
                      <EventGoal minute={90} extra_time={6} score="5:0" team="Home" vorname="Lena" nachname="Lattwein" text="Wie schon im Hinspiel kommt auch in der letzten Minute nochmal ein fünfter Treffer oben drauf. Popp und Brand einen Doppelpass auf der linken Seite. In der Mitte rast Lattwein in die Flanke von Popp und köpft über die Torhüterin ein." />
                      <Comment minute={90} extra_time={2} text="Es gibt zudem 5 Minuten für die lang entschiedene Partie extra." />
                      <Comment minute={90} extra_time={1} text="Bei der Querlage bleiben Öztürk und Brand liegen. Bei der deutschen dauert das behandeln deutlich länger." />
                      <Event minute={90} headline="Chance für Wolfsburg" text="Popp legt auf Brand, die von links quer legt. In der Mitte ist  Kalma den Ball einen Schritt zu weit voraus und auch Endemanns Schuss aus 5 Metern wird geblockt." />
                      <Comment minute={89} text="Jetzt auch Hendrich mit einer Chance. Popp legt nach hinten zur Verteidigerin ab, die damit wohl nicht gerechnet hat und den Ball am Punkt nicht trifft." />
                      <EventGoal minute={88} score="4:0" team="Home" vorname="Alexandra" nachname="Popp" text="Und da ist der lang verdiente Treffer auch endlich: Wilms flankt, von der freien rechten Seite, auf Popp, die aus 12 Metern platziert ins rechte untere Eck zu ihrem dritten Treffer köpft." />
                      <Comment minute={87} text="Die Statistiker haben eine Rate von 39:2 Torschüssen ausgewertet. Da kann schon von einem Wucher an verpassten Chancen gesprochen werden, auch wenn das Spiel nie aus den Händen zu fallen gedroht hat." />
                      <Comment minute={85} text="Und noch einer für vergebene Großchancen: Endemann bringt flach herein auf Alex Popp. Die mittlerweile Kapitänin schließt aus wenigen Metern ab aber auch hier zu zentral in die Arme von Yanma." />
                      <Comment minute={84} text="Popp holt einen hohen Ball aus der Luft und legt zu Lattwein auf. Aber auch hier geht Yanma wieder als Siegerin hervor." />
                      <Comment minute={82} text="Ein Großteil der 2536 Zuschauer sind in Feierlaune und machen bei Eiseskälte gut Stimmung von der Tribüne." />
                      <EventSubstitution minute={81} team="Away" player_in_vorname="Ismigül" player_in_nachname="Yalcinner" player_out_vorname="Arzu" player_out_nachname="Akkurt" />
                      <EventSubstitution minute={80} team="Home" player_in_vorname="Fenna" player_in_nachname="Kalme" player_out_vorname="Lineth" player_out_nachname="Beerensteyn" />
                      <Comment minute={79} text="Akkurt wird mit der Trage vom Spielfeld getragen. Die Krämpfe sind zu stark geworden." />
                      <Comment minute={78} text="Obwohl Galatasaray alle 10 Feldspieler in der eigenen Hälfte tief stehen hat, kommt Wolfsburg immer wieder durch. Nur das vierte Tor will einfach nicht fallen." />
                      <EventSubstitution minute={76} team="Away" player_in_vorname="Irem" player_in_nachname="Esme" player_out_vorname="Catalina" player_out_nachname="Usme" />
                      <Comment minute={75} text="Über rechts zieht Endemann ohne Gegnerdruck in den Strafraum und versucht es aus sehr spitzem Winkel, scheitert aber ebenfalls an Yaman."/>
                      <EventCard minute={74} team="Away" card_type="Gelb" vorname="Kristina" nachname="Bakarandze" text="Bakarandze hält Linder davon ab ihren Einwurf auszuführen." />
                      <Comment minute={71} text="Und auch Öztürk hat noch etwas gegen den vierten Treffer. Endemanns Schuss klärt sie, wie schon einmal zuvor gegen Popp." />
                      <Event minute={69} team="Home" headline="Chance für Wolfsburg" text="Wenn man schon kein Glück hat, kommt auch noch Pech hinzu. Oder in diesem Fall der Pfosten. Lattwein bekommt den Ball nach einer Ecke drei Meter hinter dem langen Pfosten und hämmert ihn gegen eben diesen." />
                      <EventSubstitution minute={69} team="Home" player_in_vorname="Jule" player_in_nachname="Brand" player_out_vorname="Rebekka" player_out_nachname="Blomqvist" />
                      <Event minute={68} team="Home" headline="Chance für Wolfsburg" text="Und wieder das Duell Beerensteyn - Yanma. Diesen Ball aus der Luft in der Drehung aufs Tor zu bringen ist nicht sonderlich leicht, landet aber dennoch bei Yanma in den Armen." />
                      <Event minute={67} team="Home" headline="Chance für Wolfsburg "text="Es ist einfach nicht Beerensteyns Tag was Abschlüsse angeht. Wieder steht sie frei vor Yanma und wieder zieht sie den Kürzeren gegen die stark haltende Keeperin." />
                      <Comment minute={66} text="Endemann fliegt an der bisher eh schon überforderten rechten Seite vorbei. In der Mitte verpassen sowohl Lattwein als auch Popp knapp." />
                      <Comment minute={65} text="Wieder gibt es eine Ecke nach Lattweins abgeblocktem Schuss, wodurch der Counter schon bei 14 Ecken steht" />
                      <EventSubstitution minute={62} team="Home" player_in_vorname="Vivien" player_in_nachname="Endemann" player_out_vorname="Svenja" player_out_nachname="Huth" />
                      <EventSubstitution minute={62} team="Home" player_in_vorname="Lena" player_in_nachname="Lattwein" player_out_vorname="Justine" player_out_nachname="Kielland" />
                      <EventSubstitution minute={62} team="Home" player_in_vorname="Joelle" player_in_nachname="Wedemeyer" player_out_vorname="Marina" player_out_nachname="Hegering" />
                      <Comment minute={61} text="Jetzt kommt auch Hendrich mit in die vorderste Reihe, kommt aber nicht an den Ball. Stattdessen geht Beerensteyns Schuss von rechts wieder knapp am Pfosten vorbei." />
                      <Comment minute={60} text="Auf der anderen Seite wird dann Staskova zurückgepfiffen, noch bevor sie durch war." />
                      <Comment minute={57} text="Wilms lupft den Ball fein über alle Verteidigerinnen auf Beerensteyn, die einen Ticken zu früh gestartet ist und dafür zurückgepfiffen wird." />
                      <Comment minute={54} text="Das Spiel bleibt auch nach 10 Minuten in der zweiten Hälfte bei den gleichen Mustern: Wolfsburg macht das Spiel, kann sich aber trotz vieler gute Chancen nicht weiter belohnen." />
                      <Comment minute={52} text="Usme dribbelt sich an Minge vorbei und kann Staskova zentral hinter die Kette schicken. Der Ball ist dann noch ein Stück zu schnell für die Tschechin, die abdrehen muss, um nicht in die wachsame Frohms zu knallen." />
                      <Comment minute={51} text="Beerensteyn kommt wieder frei zum Kopfball, bringt Huths Flanke aber nicht aufs Tor." />
                      <Comment minute={49} text="Im Konter geht es jetzt über Popp und Beerensteyn schnell durchs Zentrum. Rechts wollen sie Blomqvist mitnehmen, die sich den Ball aber ein Stück zu weit nach vorne legt und bei Yaman landet." />
                      <Event minute={47} team="Home" headline="Chance für Wolfsburg" text="Und auch diese ist wieder gefährlich. Beerensteyns Schuss vom ersten Pfosten blockt Yaman stark mit den Füßen. Im Anschluss schießen sich dann erst die Wolfsburgerinnen ab, dann die Gäste nochmal und von dort geht der Ball wieder ins Toraus." />
                      <Event minute={47} team="Home" headline="Chance für Wolfsburg" text="Es geht weiter, wie es aufgehört hat. Rechts ist zu viel Platz für Huth, deren Flanke Popp über die herausstürmende Yaman köpft. Kurz vor der Linie klärt Öztürk noch zur Ecke." />
                      <Comment minute={46} text="Akkurt steht jetzt offensiver und Yeniceri übernimmt ihre Position auf der rechten Seite." />
                      <EventSubstitution minute={46} team="Away" player_in_vorname="Berna" player_in_nachname="Yeniceri" player_out_vorname="Hapsatou" player_out_nachname="Malado Diallo" />

                      <Event minute={45} extra_time={2} headline="Pause" text="Ein sehr dominantes und überzeugendes Wolfsburg dominiert die erste Halbzeit. Das es ‘nur’ 3:0 steht ist bei 23:2 Torschüssen fast schon glücklich für die sehr überfordert wirkenden Gäste. " />
                      
                      <Comment minute={45} extra_time={1} text="Wolfsburg kombiniert sich ganz ruhig und ohne wirkliche Gegenwehr durch die Mitte auf die rechte Seite. Dort hat Wilms wieder Platz ohne Ende und kann sich die Stelle, an der sie flankt fast aussuchen. In der Mitte trifft Minge den Ball mit der Seite vom Fuß und leitet ihn über das Tor." />
                      <Comment minute={43} text="Kurz vor der Pause dann doch noch die erste Chance für die Gäste. Karabuluts Heber über das Mittelfeld landet im Lauf von Diallo, die halbrechts in den Strafraum läuft. Von der Grenze probiert sie es direkt und verfehlt nicht weit." />
                      <Event minute={41} headline="Chance für Wolfsburg" team="Home" text="Und wieder muss sich die Torhüterin strecken: Kielland rauscht von hinten heran und träfe aus der Distanz genau unter die Latte, wäre da nicht die junge Torhüterin in der Luft." />
                      <Event minute={40} headline="Chance für Wolfsburg" team="Home" text="Ein nahezu schwerwiegender Fehlpass im eigenen Strafraum von Karatas landet bei Beerensteyn. Aus einem Querpass bekommt Huth die Chance frei aufs Tor zu schießen wo Yaman gerade noch über das Tor lenken kann." />
                      <Comment minute={37} text="Es beginnt wieder eine Phase in der die Gäste sich nach vorne trauen und den Ball längere Zeit zirkulieren lassen." />
                      <Comment minute={35} text="Beerensteyn versucht Yaman zu umlaufen, merkt aber, dass das nicht so einfach ist. Stattdessen legt sie sich den Ball auf den linken Fuß und zirkelt ihn, wieder nur ganz knapp, am linken Pfosten vorbei." />
                      <Event minute={34} team="Home" headline="Chance für Wolfsburg" text="Trotz der eindeutigen Führung stoppen die Wölfinnen nicht. Huth versucht es erneut aus halbrechter Position auf Höhe der Strafraumgrenze. Am Ende steht Yaman genau richtig." />
                      <EventGoal minute={31} team="Home" score="3:0" vorname="Janina" nachname="Minge" text="Wolfsburg erhöht erneut. Und das mit einem wundervollen Tor von Janina Minge. Huth wird rechts von Wilms auf die Reise geschickt. Ihre Flanke wird abgefälscht und landet bei Popp, die ohne zu zögern auf Minge hinter ihr ablegt. Aus fast 20 Metern wuchtet diese den Ball genau in den rechten Winkel." />
                      <Comment minute={30} text="Yaman wird noch an der rechten Schulter behandelt. Es scheint aber jeden Moment weiter zu gehen." />
                      <Comment minute={28} text="Der Ball hüpft zwar zum dritten Mal ins Tor der Gäste, zählt aber nicht. Projkovska hat noch vorher ein Foul von Beerensteyn an Yaman gepfiffen, die in der Luft von der Niederländerin getackelt wird, als beide zu einem hohen Ball von Hegering gehen wollen." />
                      <Comment minute={27} text="Galatasaray bekommt jetzt auch mal wieder in den Strafraum. Dort steht Hendrich aber sehr wachsam bereit zu klären." />
                      <Comment minute={25} text="Linder bekommt den Ball mal auf die linke Seite und legt zurück zur Sechzehner Linie auf Blomqvist. Der Ball tickt noch leicht auf, wodurch ihr Schuss über das Tor geht." />
                      <Comment minute={24} text="Die Ecken bleiben weiter gefährlich - so wie nahezu alles, was Wolfsburg bisher in diesem Spiel macht. Galatasaray kommt nicht an den Ball und kann nur zuschauen wie Popp den Ball hoch auf Linder spielt, die zu Hegering legt. Der Schuss ist dann aber doch etwas zu ungenau und geht am Tor vorbei." />
                      <Comment minute={21} text="Beerensteyn spielt sich schön mit Popp durch die Mitte und legt dann auf Huth an der rechten Strafraumgrenze. Bei der Flanke fehlen dann erneut wenige Zentimeter damit Beerensteyn drankommt." />
                      <Comment minute={17} text="Es geht weiter viel über die rechte Seite der Wölfinnen, auf der Wilms besonders auffällig ist." />
                      <EventGoal minute={15} team="Home" score="2:0" vorname="Alexandra" nachname="Popp" text="Und da ist auch der Zweite. Wieder eine lange Flanke von Wilms, die am zweiten Pfosten bei Popp herunterkommt. Mit einem platzierten Kopfball ins linke Eck kann Yaman im Tor nichts mehr machen." />
                      <Comment minute={14} text="Die kurze Druckphase der Gäste nach dem frühen Rückstand ist aber auch wieder vorbei. Es spielt gerade nur Wolfsburg - und das sehr gefährlich." />
                      <Comment minute={12} text="Auch die Ecke bringt eine gute Chance zum zweiten Treffer. Wilms Hereingabe verlängert Popp mit dem Kopf zu Sarai Linder. Die Nationalspielerin steht zwar sehr gut, bekommt aber keinen Druck auf den Ball." />
                      <Event minute={11} headline="Chance für Wolfsburg" team="Home" text="Und wieder rollt der Ball knapp am Tor vorbei: Huth kommt frei zum Schuss, der abgefälscht bei Beerensteyn landet. Nach einer kurzen Drehung verfehlt sie das Tor mit einem abgefälschten Schuss nur um Zentimeter." />
                      <Event minute={9} headline="Chance für Wolfsburg" team="Home" text="Wilms, die auf der rechten Bahn Platz ohne Ende hat, mit einer ganz feinen Hereingabe. In der Mitte verpasst Blomqvist ganz knapp im Fünfmeterraum, ehe Popp reingegrätscht kommt und den Ball knapp am Tor vorbei drückt." />
                      <Comment minute={7} text="Der Ball läuft weiter durch die Wolfsburger Reihen, ohne etwas anbrennen zu lassen." />
                      <Comment minute={5} text="Galatasaray versucht hoch zu stehen, kann bisher aber noch keine Fehler erzwingen. Wolfsburg probiert es währenddessen mit einem hohen Ball über links - ein Stück zu weit für Blomqvist." />
                      <EventGoal minute={2} team="Home" score="1:0" vorname="Alexandra" nachname="Popp" text="Popp kann lange im Strafraum überlegen, was sie mit dem Ball macht und legt auf Linder ab. Ihr Schuss wird zwar von Karatas geblockt, landet aber wieder genau vor den Füßen von Popp, die mühelos vom Punkt ins rechte Eck zu ihrem vierten Saisontor in der Champions League vollendet." />
                      <Comment minute={2} text="Wolfsburg bekommt auch direkt die erste Ecke, die aber in nichts resultiert." />
                      <Comment minute={1} icon="whistle" headline='Anpfiff' text="Der Anstoß von Wolfsburg kommt direkt auf die rechte Seite, wo Huth gestartet ist. Ihre Flanke segelt nach nicht mal 20 Sekunden vorbei an allen durch den Strafraum."/>

                      <Event headline="" text="Auch für den Tabellenführer der Frauen Bundesliga ist dieses Spiel ein Pflichtsieg. Mit drei Punkten weniger und einem schlechteren Torverhältnis als die Roma liegen sie nur auf dem dritten Platz von Gruppe A." />
                      <Event headline="" text="Nach der Hinspielniederlage vor einer Woche geht es für Galatasaray ums Überleben in der Champions League. Ohne einen Sieg wäre das Achtelfinale schon am vierten Spieltag nahezu unerreichbar." />
                  </>
              )}
          </div>
      </TeamColorProvider>
    );
}
export default VfLWolfsburgGalatasarayIstanbul201124;

export {}