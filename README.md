# Location — Assets panel-plugin

Toont de GPS-locatie van de geselecteerde foto op een kaart, in het Assets-panel.
Statische plugin (geen build-stap): `index.html` + `config.js` + `icon.png`.
Kaart via Leaflet + OpenStreetMap, selectie via `@woodwing/assets-client-sdk`.

## Bestanden
- `index.html` — de plugin-UI + SDK-koppeling.
- `config.js` — whitelist van Assets-client-URL('s) + GPS-veldnamen. **Pas dit aan.**
- `icon.png` — 20×20 pin-icoon voor de plugin-knop.

## Vóór deployen — config.js aanpassen
1. `CLIENT_URL_WHITELIST` → de URL('s) van jouw Assets-client(s) die de plugin
   mogen embedden (bv. `https://ww-dam-demo.woodwing.cloud`).
2. `GPS_LAT_FIELD` / `GPS_LON_FIELD` → **verifieer** tegen jullie metadata-schema
   (Management Console → Metadata, of een metadata-report op een foto met GPS).
   Als jullie een gecombineerd `gpsLocation`-veld gebruiken, vult de fallback dat af.

## Hosten via GitHub + Vercel (zoals de AI Agent)
1. Maak een nieuwe GitHub-repo, bv. `assets-location-panel`.
2. Zet deze drie bestanden in de root (`index.html`, `config.js`, `icon.png`) en push.
3. Ga naar vercel.com → **Add New… → Project** → importeer de repo.
4. Framework preset: **Other** (geen build command, output = root). Deploy.
5. Je krijgt een HTTPS-URL, bv. `https://assets-location-panel.vercel.app/`.
   Vercel zet standaard geen `X-Frame-Options`, dus Assets kan de pagina embedden.

## Configureren in de Management Console
Plug-ins → **Panel plug-ins** → `+`:
- **Name:** `Location`
- **URL:** je Vercel-URL (bv. `https://assets-location-panel.vercel.app/`)
- **Icon:** upload `icon.png` (20×20)
- **Button tooltip:** `Location`
- **Configuration:** leeg laten (config zit in `config.js`); of later env-waarden
  als configProperties toevoegen en in de plugin uitlezen.
- **Enable** aanzetten → **Save**.

Daarna: rechten per usergroup instellen en testen in Assets (selecteer een foto
met GPS → het Location-panel toont de pin).

## Nog te verifiëren (eerlijk)
- Exacte GPS-veldnamen in jullie schema (zie config.js).
- De exacte SDK-signatuur voor het reageren op selectie-updates
  (`AssetsPluginContext.get(whitelist, handler)`) — gebaseerd op het WoodWing-
  tutorialartikel; in `index.html` gemarkeerd met `TODO VERIFIEER`. Check tegen de
  SDK-README/typedefs zodra je 'm in een Assets-testomgeving draait.

## Demo opnemen zonder live Assets
Deze plugin wacht op de Assets-context en toont buiten een Assets-client niets.
Gebruik voor een opname zonder live omgeving de losse mock:
`../location-panel-poc.html` (zelfde UI, met voorbeelddata).
