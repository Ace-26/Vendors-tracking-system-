var map = L.map('map').setView([19.0760, 72.8777], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.0760, 72.8777]).addTo(map)
    .bindPopup('My Location')
    .openPopup();



    var map1 = L.map('map1').setView([19.0760, 72.8777], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);
    
    L.marker([19.0760, 72.8777]).addTo(map1)
        .bindPopup('Waiting For A Vendor Location')
        .openPopup();