function initMap() {
    // Specify location
    var loc = {lat: -34.397, lng: 150.644};

    // Map
    var map = new google.map.Map(document.getElementById('map'), {zoom: 4, center: loc});

    // Marker
    var marker = new google.maps.Marker({position: loc, map: map});
}