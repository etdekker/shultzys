"use strict";

function initialize() {
	var myLatlng = new google.maps.LatLng(47.657316, -122.313064);
	var mapOptions = {
	    zoom: 17,
	    center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	});
}

google.maps.event.addDomListener(window, 'load', initialize);