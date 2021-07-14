var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
  btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
  btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
  btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
	btnCerrarPopup3 = document.getElementById('button2');
	btnCerrarPopup5 = document.getElementById('button3');




btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnAbrirPopup2.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnAbrirPopup3.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});

btnAbrirPopup4.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});



btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});
btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});

btnCerrarPopup5.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});


