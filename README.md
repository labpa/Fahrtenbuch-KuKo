# Fahrtenbuch React App
## Dokumentation
### Anforderung
Erstellen eines Fahrtenbuches mit React. Das Fahrtenbuch soll die Daten im local Storage des Browsers speichern. 
Eingegeben werden sollen folgende Informationen:
+ Kennzeichen des Fahrzeugs
+ Fahrer:in des Fahrzeugs
+ Kilometerstand bei Beginn der Fahrt
+ Kilometerstand bei Ende der Fahrt
+ Datum der Fahrt
+ Zweck der Fahrt

Die eingegebenen Daten sollen nach eingabe in einer Liste unterhalb des Eingabeformulars ausgegeben werden.
Zusätzlich soll das Herunterladen der entstandenen Liste in Form einer JSON Datei möglich sein.
Über die Möglichkeit eines Uploads soll es möglich sein JSON Dateien hochzuladen und den Inhalt ausgeben zu lassen.
Die Einträge der Liste sollen sich nachträglich einzeln löschen lassen.

### GUI
#### Entwurf
![Fahrtenbuch.png](img%2FFahrtenbuch.png)
Eingabemöglichkeiten des Fahrtenbuchs

![Fahrtenbuch_Ausgabe.png](img%2FFahrtenbuch_Ausgabe.png)
Ausgabe der Liste unterhalb der Eingabe

#### Zwischenstand
![Zwischenstand-Eingabe.png](img%2FZwischenstand-Eingabe.png)
Zwischenstand Eingabemöglichkeit mit Bootstrap

![Zwischenstand-Liste.png](img%2FZwischenstand-Liste.png)
Zwischenstand Ausgabe der Liste unterhalb der Eingabe


## TODO

### Funktionalität
+ enum Kennzeichen
+ Speichern Kilometer entsprechend zu einem Nummernschild
+ KM Ende wird als neuer KM stand gespeichert
+ + Bei Auswahl Nummernschild anzeige KM-Beginn automatisch aktuellen KM stand

### Download
+ PDF export

### PWA
+ Bedeutet das eine Anwendung eigenschaften einer Native und einer Web App vereint
+ Ermöglicht Plattformunabhängigkeit
+ 
+ progressive web app -> pwa

### 

## zu verstehen
### useEffect


## Erstellen
+ Zuerst wurde die React App generiert.
  `yarn create react-app . --template typescript`
+ App Starten:
  `yarn start`
  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.





