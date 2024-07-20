<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import type { Map as LeafletMap, LatLngTuple, Marker, Icon } from 'leaflet';
    
    let map: LeafletMap;
    
    const mines = [
      { location: [6.81867, 80.27658] as LatLngTuple, name: 'Eheliyagoda Area', mineral: 'Graphite', description: 'Site 1: 4 acres, 5km from Eheziayagoda town. Plain terrain with alluvial deposits.' },
      { location: [7.57946, 80.54730] as LatLngTuple, name: 'Maduragoda Area', mineral: 'Graphite', description: 'Sites 2-4: 100 acres, 2km from Maduragoda town. Hilly terrain with Garnet Sillumanite Schist.' },
      { location: [7.8995716, 80.7469047] as LatLngTuple, name: 'Dambula Area', mineral: 'Quartz', description: 'Sites 4-5: 50 acres, 15km from Dambula town. Reserved forest with charnockite Gneissic.' },
      { location: [8.72085, 80.55761] as LatLngTuple, name: 'Vavuniya Area', mineral: 'Mica', description: 'Sites 7-8: 200 acres, 7km from Vavuniya town. Reserved forest in Wanni complex.' },
      { location: [8.91306, 80.34027] as LatLngTuple, name: 'Kalmadu Area', mineral: 'Granite', description: 'Site 9: 100 acres, 7km from Vavuniya town. Reserved forest and patta land with Pink Granite.' }
    ];
    
    onMount(() => {
      if (browser) {
        import('leaflet').then((L) => {
          import('leaflet/dist/leaflet.css');
          
          // Custom icon definition
          const icon = L.default.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
    
          // Set the default icon for all markers
          L.default.Marker.prototype.options.icon = icon;
          
          // Initialize the map centered on Sri Lanka
          map = L.default.map('map').setView([7.8731, 80.7718] as LatLngTuple, 8);
    
          // Add OpenStreetMap tiles
          L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);
    
          // Add markers for each mine
          mines.forEach(mine => {
            const marker: Marker = L.default.marker(mine.location).addTo(map);
            marker.bindPopup(`
              <b>${mine.name}</b><br>
              Mineral: ${mine.mineral}<br>
              ${mine.description}
            `);
          });
        });
      }
    });
    </script>
    
    <style>
    #map {
      height: 600px;
      width: 100%;
    }
    </style>
    
    {#if browser}
      <div id="map"></div>
    {/if}