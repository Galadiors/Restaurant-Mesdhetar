/*-----------*/

$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 5000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});

/*menu*/
let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});


/* Tab pagina menu*/

var tabButtons=document.querySelectorAll(".tab-container .button-container button");
var tabPanels=document.querySelectorAll(".tab-container  .tab-panel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#222";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'white');



/*----VALIDACION FORMULARIO-------*/

function validarFormulario(){

    var txtNombre = document.getElementById('nombre').value;
    var txtEmail = document.getElementById('email').value;
    var txtRut = document.getElementById('rut').value;
    var txtFecha = document.getElementById('fecha').value;
    var txtTelefono = document.getElementById('telefono').value;

    var banderaRBTN = false;

    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
        alert('Ingrese Nombre por favor');
        document.datos.nombre.focus();
        return false;
    }

    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtEmail))){
        alert('Escriba un correo válido');
        document.datos.email.value="";
        document.datos.email.focus();
        return false;
    }

    //Test rut
    if(txtRut == null || txtRut.length < 7 || txtRut.length > 9 || isNaN(txtRut)){
        alert('Ingrese Rut válido');
        document.datos.rut.value="";
        document.datos.rut.focus();
        return false;
    }

    //Test fecha
    if(!isNaN(txtFecha)){
        alert('Debe elegir una fecha');
        document.datos.fecha.focus();
        return false;
    }

    //Telefono
    if(txtTelefono.length != 8){
        alert('Ingrese número vsálido');
        document.datos.telefono.value="";
        document.datos.telefono.focus();
        return false;
    }

    return true;
}




