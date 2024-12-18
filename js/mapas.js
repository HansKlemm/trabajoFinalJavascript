let options = {
    enableHighAccuracy: true,
    timeout:5000,
    maximunAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    )
}else{
    alert("No has dado permisos de geolocalizacion.")
}

function success(position){
    let latitude= position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',{
        center:[latitude, longitude],
        zoom: 7
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org" target="_blank">Mi OpenStreetMap</a>'
    }).addTo(map);

    let recorrido = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(52.551282, 13.568250)
        ],
        //language: 'es',
        routeWhileDragging: true,  
        showAlternatives: true 
    }).addTo(map);

}

function error(){
    alert("No se pudo obtener la ubicación.");
}

// geo:52.551052,13.568019?z=19   (((((52.551282, 13.568250)))))

// 52.55082,13.56694?z=16

    // var marker = L.marker([52.551290, 13.568150]).addTo(map);

    // var circle = L.circle([52.551290, 13.568150], {
    // color: 'red',
    // fillColor: '#f03',
    // fillOpacity: 0.2,
    // radius: 10
    // }).addTo(map);

    // marker.bindPopup("<b>Bienvenidos!</b><br>A Hans Klemm Company.");

    // var popup = L.popup();

    // function onMapClick(e) {
    // popup
    // .setLatLng(e.latlng)
    // .setContent("tu clic en el mapa es en " + e.latlng.toString())
    // .openOn(map);
    // }

    // map.on('click', onMapClick);