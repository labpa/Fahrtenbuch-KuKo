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

### PWA - progressive web app
+ Bedeutet das eine Anwendung eigenschaften einer Native und einer Web App vereint
+ Ermöglicht Plattformunabhängigkeit

1. Download von Chrome
2. Generate a Lighthouse report
3. manifest.jason angepasst
 + https://app-manifest.firebaseapp.com/
4. Icon ausgewählt - Neue Images in passenden größen erstellt - Entsprechende Images hochgeladen und in manifest.jason angepasst
 + https://imageresizer.com/de
5. maskable erstellt und hochgeladen -> manifest.json
 + https://maskable.app/editor
6. `yarn run build`
7. upload build Ordner bei Netlify
  + https://fahrtenbuch.netlify.app/

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

## Dashboard
Für die App wurde eine Startseite das sogenannte Dashboard erstellt. Das Dashboard wird nach dem start der App als erstes angezeigt. Über das Dashboard ist es möglich entweder über klicken
des angezeigten Fahrzeuges oder über das benutzen der Navbar zum Fahrtenbuch zu gelangen.
![dashboard.png](img%2Fdashboard.png)

Um das Dashboard als Startseite zu bekommen wurde ihm in der App.tsx über den react-router-dom der Pfad `"/"` zugewiesen dieser dann auf das `<Dashboard/>` verweist.



## Navigation
Um sich innerhalb der App bewegen zu können ist es notwendig die Navigation innerhalb der App zu ermöglichen. Dafür verwendet wurde  wurde react-router-dom 6.20.1
### React-router-dom
+ Installation von react-router-dom
  + `npm install react-router-dom`
### Navbar

## Speichern der Daten
### Local Storage

## OnlineBearbeiten

## Datenbank Supabase
Um Daten in einer Datenbank speichern zu können habe ich mich für supabase als backend entscheiden.

### ER-Diagramm
#### Entwurf
![entwurf_ER_Diagramm.png](img%2Fentwurf_ER_Diagramm.png)
Erster entwurf ER-Diagramm für die Datenbank Fahrtenbuch

#### Umsetzung
![ER_Diagramm_Fahrtenbuch.png](img%2FER_Diagramm_Fahrtenbuch.png)
ER-Diagramm mit der endgültigen Datenbank für das Fahrtenbuch



### Supabase
#### Erstellen der Tabellen in Supabase

+ fahrzeug
  + fahrzeug_id *uuid* **PK**
  + created_at *timestamp*
  + nummernschild *text*
  + baujahr *text*


+ fahrerin
  + fahrerin_id *uuid* **PK**
  + created_at *timestamp*
  + vorname *text*
  + nachname *text*


+ fahrt
  + fahrt_id *uuid* **PK**
  + created_at *timestamp*
  + fahrerin_id *uuid* **FK**
  + fahrzeug_id *uuid* **FK**
  + grund *text*
  + datum *text*
  + km-begin *int8*
  + km-ende *int8*

#### Policy Supabase

--INSERT  
create policy insert_policy  
on schema_name.table_name  
for insert to authenticated  
with check (true);  

--VIEW  
CREATE POLICY view_policy  
ON schema_name.table_name  
FOR SELECT TO authenticated  
USING (true);  

-- UPDATE  
CREATE POLICY update_policy  
ON schema_name.table_name  
FOR UPDATE TO authenticated  
USING (true);  

--DELETE  
CREATE POLICY delete_policy  
ON schema_name.table_name  
FOR DELETE TO authenticated  
USING (true);  

### App
+ erstellen von .env Datei.
  + Über diese Datei wird die Verbindung zur Datenbank aufgebaut. Die .env Datei enthält den Public Key und die Url
+ Erstellen Ordner config
+ Erstellen SupabaseClient.js im Ordner config -> export supabase
+ import supabase auf entsprechender Seite

