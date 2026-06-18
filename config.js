// Configuratie voor de Location panel-plugin.
window.PLUGIN_CONFIG = {
  // Naam van de metadata-velden waarin de GPS-coördinaten staan.
  // LET OP: verifieer deze tegen jullie eigen Assets-schema
  // (Management Console > Metadata, of een metadata-report op een foto-asset).
  // Veel Assets/Elvis-omgevingen gebruiken gpsLatitude/gpsLongitude,
  // soms een gecombineerd gpsLocation-veld ("lat,lon").
  GPS_LAT_FIELD: 'gpsLatitude',
  GPS_LON_FIELD: 'gpsLongitude',
  GPS_LOCATION_FIELD: 'gpsLocation', // fallback: gecombineerd "lat,lon"
};
