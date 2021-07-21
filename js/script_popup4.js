var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
  btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');


btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});



btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

