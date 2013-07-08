
requirejs.config({
    "paths": {
      "jquery": "../components/jquery/jquery.min",
      "randoms": "../scripts/midas"
    }
});


require(['jquery', 'randoms'], function( $ ) {
	$( document ).ready(function() {

		document.getElementById("pad").addEventListener("touchstart", mi_click, false);

		document.addEventListener("visibilitychange", handleVisibilityChange, false);
	});
});
