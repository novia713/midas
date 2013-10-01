/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

		function handleVisibilityChange() {
		  if (document.hidden) {} else {
		    window.location.href = "index.html";
		  }
		}


		function playSound(n = null) {
		  var instrument = $('#instrument').val();
		  var dir = "cello";
		  var ar_instrument = [];

		  ar_instrument['hohner'] = new Array("155090__urlande__melodica-sol0", "155086__urlande__melodica-si2", "155081__urlande__melodica-la1", "155078__urlande__melodica-la-1", "155075__urlande__melodica-fa-2",
		    "155073__urlande__melodica-fa1", "155071__urlande__melodica-re-2", "155068__urlande__melodica-re-3", "155061__urlande__melodica-fa-1", "155060__urlande__melodica-do1",
		    "155057__urlande__melodica-fa-0", "155056__urlande__melodica-do-1", "155054__urlande__melodica-do-3");

		  ar_instrument['cello'] = new Array("153769__carlos-vaquero__violoncello-d-4-tenuto-vibrato","153768__carlos-vaquero__violoncello-c-4-tenuto-vibrato","153767__carlos-vaquero__violoncello-c-4-tenuto-vibrato",
								"153766__carlos-vaquero__violoncello-b-3-tenuto-vibrato","153765__carlos-vaquero__violoncello-a-3-tenuto-vibrato","153764__carlos-vaquero__violoncello-a-3-tenuto-vibrato",
								"153763__carlos-vaquero__violoncello-g-3-tenuto-vibrato","153762__carlos-vaquero__violoncello-g-3-tenuto-vibrato","153761__carlos-vaquero__violoncello-f-3-tenuto-vibrato",
								"153760__carlos-vaquero__violoncello-f-3-tenuto-vibrato","153759__carlos-vaquero__violoncello-e-3-tenuto-vibrato","153758__carlos-vaquero__violoncello-d-3-tenuto-vibrato",
								"153757__carlos-vaquero__violoncello-d-3-tenuto-vibrato");

		  ar_instrument['piano'] = new Array("68448__pinkyfinger__Piano_G","68446__pinkyfinger__Piano_F","68445__pinkyfinger__Piano_F",
								"68444__pinkyfinger__Piano_Eb","68443__pinkyfinger__Piano_E","68442__pinkyfinger__Piano_D",
								"68441__pinkyfinger__Piano_C","68440__pinkyfinger__Piano_C","68439__pinkyfinger__Piano_Bb",
								"68437__pinkyfinger__Piano_A","68438__pinkyfinger__Piano_B");

		  ar_instrument['bass'] = new Array("21591__djgriffin__sub-bass-stab-g","21590__djgriffin__sub-bass-stab-d","21589__djgriffin__sub-bass-stab-d-4",
											"21588__djgriffin__sub-bass-stab-d-3","21587__djgriffin__sub-bass-stab-d-2","21586__djgriffin__sub-bass-stab-b",
											"21585__djgriffin__sub-bass-stab-1","21584__djgriffin__juno-bass-d","21583__djgriffin__beast-stab-d",
											"21582__djgriffin__bass-d","21581__djgriffin__atari-stab-d");

		  ar_instrument['motley'] = new Array("130526__stomachache__f-hi-1","150454__caiogracco__crystal-bowl-f-3-1","18091__daven__16-sb-bass-hit-c",
											"18092__daven__17-sb-bass-hit-c","18101__daven__26-sb-bass-hit-f","18105__daven__30-sb-bass-hit-f",
											"183822__quartertone__gtclhrm-05f-5s-69-v01","22571__jdstarrett__dstringlowf","88260__ttptp__c");

		  var x = (n)? n : 0 + Math.floor(Math.random() * 12) ;
		  var sonido = "sounds/" + instrument + "/"  + ar_instrument[instrument][x] + ".ogg";

		  elem = ( n ) ?  $('#btn' + n) :  $('#pad');

		  var times = ($('#multiple').is(':checked')) ? 1 + Math.floor(Math.random() * 3)  : 1 ;
		  var i = 1;
		  for (i = 1; i <= times; i++) {
		    // alert(i + ", " + times);
		    var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
		    elem.css('background-image', '-moz-linear-gradient(top , white 17%, '+color+' 99%)');

		    var snd = new Audio(sonido);
		    snd.play();
		    i = i + 1;
		  }
		}


		function mi_click(n = null) {

		  segs = ($('#delay').is(':checked')) ?  setTimeout(function() {  playSound(n) }, 10 + Math.floor(Math.random() * 300)) : playSound(n) ;

		}

		function change_interface(status){
			if (false === status){
				$("#container_pad").hide();
				$('#container_calcu').fadeIn();
			}else{
				$("#container_calcu").hide();
				$('#container_pad').fadeIn();
			}
		}
