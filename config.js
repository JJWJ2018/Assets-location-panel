// Configuratie voor de Location panel-plugin.
// Pas CLIENT_URL_WHITELIST aan naar de URL('s) van JOUW Assets-client(s).
// Dit zijn de Assets-omgevingen die deze plugin in een iframe mogen embedden
// en waarmee de plugin via postMessage mag communiceren (SDK-beveiliging).
window.PLUGIN_CONFIG = {
  CLIENT_URL_WHITELIST: [
    // Voorbeelden — vervang door je eigen Assets-client-URL('s):
    'https://ww-dam-demo.woodwing.cloud',
    'http://localhost:9000',
  ],

  // Naam van de metadata-velden waarin de GPS-coördinaten staan.
  // LET OP: verifieer deze tegen jullie eigen Assets-schema
  // (Management Console > Metadata, of een metadata-report op een foto-asset).
  // Veel Assets/Elvis-omgevingen gebruiken gpsLatitude/gpsLongitude,
  // soms een gecombineerd gpsLocation-veld ("lat,lon").
  GPS_LAT_FIELD: 'gpsLatitude',
  GPS_LON_FIELD: 'gpsLongitude',
  GPS_LOCATION_FIELD: 'gpsLocation', // fallback: gecombineerd "lat,lon"
};
