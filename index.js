var map = L.map('map').setView([19.0760, 72.8777], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.0760, 72.8777]).addTo(map)
    .bindPopup('Mumbai')
    .openPopup();



var map1 = L.map('map1').setView([19.0760, 72.8777], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

L.marker([19.0760, 72.8777]).addTo(map1)
    .bindPopup('Wait For A Coustomer Location')
    .openPopup();




// const map = L.map('map').setView([0, 0], 13); // You can set a default location and zoom level

// // Add a tile layer to the map (required by Leaflet)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);