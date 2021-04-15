function initMap(){
    var location = {lat: 14.096971325304711, lng: -87.22198851618754};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: location
    });

    new google.maps.Marker({position: location,
    map,
    title: "Ubicacion",
});
}