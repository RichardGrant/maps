var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});
myApp.onPageInit("index", function(page){
}).trigger();


var ei = {
	"panel":{
		"panel": ".panel",
		"header":".header",
		"data": ".data"
	}
}
$$('.panel-left').on('panel:opened', function () {
    $$(ei['panel']['data']).css("height", ($$(ei['panel']['panel']).outerHeight(true) -  $$(ei['panel']['header']).outerHeight(true)) + "px");
});



document.addEventListener('deviceready', function () {
	var mapDiv = document.getElementById("map");
	map = plugin.google.maps.Map.getMap(mapDiv,
		{
			disableDefaultUI: true,
			styles:[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],
			'camera' : {
				target: {lat: 28.888590, lng: -81.261549},
				zoom: 16
			},
			'preferences': {
				'zoom': {
					'minZoom': 16,
					'maxZoom': 18
				},
				'building': false
			}
		}
	);
	map.on(plugin.google.maps.event.MAP_READY, function(){
		console.log("loaded");
	});
}, false);