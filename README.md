# Moment 3, DT207G - NoSQL-databaser 

En backend-baserad webbapplikation som är skapad med NodeJS och Express som innehåller koden för en simpel REST-webbtjänst.
Webbtjänsten lagrar arbetserfarenheter med information som företagsnamn, plats, jobbtitel, start- och slutdatum samt en beskrivning om jobbet. 
API:et använder metoderna GET, POST, PUT och DELETE för att utföra CRUD-operationer. 

# Länk

Länk till API:et : [https://moment-3-laboration.onrender.com/](https://moment-3-laboration.onrender.com/) 


## Installation, databas

API:et använder MonogoDB som databas. Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket. 
I server.js-filen finns ett schema för hur en collection ska se ut. 

| Collection | Field|
|--|--|
| Workexperinces | _id(genereras automatiskt), companyname (string), jobtitle (string), location (string), startdate (date), enddate (date), description (string)|


## Användning
Nedan finns beskrivet hur man använder API:et på olika sätt.

| Metod | Ändpunkt  | Beskrivning 
|--|--|--|
| GET | api/workexperiences| Hämtar alla arbetserfarenheter
|GET|api/workexperiences/:id|Hämtar arbetserfarenheter utifrån specifikt ID|
|POST|api/workexperiences|Lägger till och lagrar nya poster|
|PUT|api/workexperiences/:id|Ändrar arbetserfarenheter utifrån ID|
|DELETE|api/workexperiences/:id|Raderar poster utifrån ID|
    
    {

    "_id": "6623b62e6e3ae9dff70c1fa9",
    "companyname": "TestManiacs",
    "jobtitle": "Master Testare",
    "location": "Storulvån",
    "startdate": "2024-01-13T00:00:00.000Z",
    "enddate": "2024-01-22T00:00:00.000Z",
    "description": "Såg till att anrop via ThunderClient fungerade som de ska och att data i Compass och Atlas uppdateras därefter"
  }
        

  
## Arbetsgång
Kortfattad beskrivning av arbetsgången för webbtjänsten.

1. Skapade ett nytt npm projekt och installerade följande paket:
 - Express: Webbramverk för Node.JS.
 - Cors: För att kunna utföra korsdomänsförfrågningar från andra domäner.
 - Dotenv: För att undvika att ha med känslig information i källkoden.
 - Mongoose: Ett paket för att hantera anslutning och kommunikation med MongoDB.
 - Nodemon: För att automatiskt starta om applikationen när en ändring görs, installeras som devdependency.

 2. Skapade en databas i MongoDB via Atlas och använde MongoDB Compass användargränssnitt för att få en överblick och hantera data i databasen.
 
 3. Skapade en .gitignore-fil för att undvika att versionshantera node_modules och .env-filen.

 4. Skapade en .env.sample-fil med ett skal för hur .env-filen ska se ut. 

 5. Skapade en server.js-fil som innehåller alla inställningar för npm-paketen (exklusive nodemon) samt databasen. 
    Denna fil innehåller koden för hur olika anrop ska hanteras, det vill säga GET, POST, PUT och DELETE.

 6. Använde ThunderClient för att testa att anrop fungerar korrekt.

## Skapad av:
Ronja Norlén, rono2300, 2024.
