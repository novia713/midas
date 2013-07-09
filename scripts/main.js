
requirejs.config({
    "paths": {
      "jquery": "../components/jquery/jquery.min",
      "randoms": "../scripts/midas"
    }
});


require(['jquery', 'randoms'], function( $ ) {
	$( document ).ready(function() {
		$('#container_calcu').hide();

		document.getElementById("pad").addEventListener("touchstart", mi_click, false);

		document.addEventListener("visibilitychange", handleVisibilityChange, false);

		$('#switch_pad').change(function() {
			change_interface($('#switch_pad').is(':checked'));
		});
	});
});
