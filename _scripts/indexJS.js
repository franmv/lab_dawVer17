/*
	Autor: Francisco Maass Villarreal
	Matricula: A01136728
	Clase: Desarrollo de Applicaciones web
	Periodo: Verano 2017
	Profesor: MSc Alfredo Salazar Vélez
	Escuela: Instituto tecnológico y de estudios superoipres de Monterrey
	Campus: Monterrey
*/

document.addEventListener("DOMContentLoaded", function(){
	// Definición de objetos 
	var submitOrder = document.getElementById("submitForm");
	var resetOrder = document.getElementById("resetForm");

	// Funciones de los objetos
	submitOrder.addEventListener("click", validateForm);
	resetOrder.addEventListener("click", resetForm);
	menuFunctionality(); /* funcion que siempre se ejecuta */

});

	function validateForm(){
		// Ubicamos elementos tamaño, salsa y cantidad
			var optionBox = document.getElementsByClassName("errores");
			var optionSize = document.getElementsByClassName("tamaño");
			var opcionSauce = document.getElementsByClassName("salsa");
			var opcionText = document.getElementById("cantidad");

	// Ubicamos los mensajes de error 
		var errMsgSize = document.getElementById("errorTamaño");
		var errMsgSauce = document.getElementById("errorSalsa");
		var errMsgText = document.getElementById("errorCantidad");
	
	// Validamos el contenido de la sección "Tamaño"
		for(var i = 0; i < optionSize.length; i ++){
			if(optionSize[i].checked){
				errorSalsa.classList.add("hidden");
				break;
			}else{
				optionBox[0].classList.remove("hidden");
				errMsgSize.classList.remove("hidden");
				break;
			}
		}

	// Validamos el contenido de la sección "salsa"
		if(opcionSauce[0].value == "notSelected"){
			optionBox[0].classList.remove("hidden");
			errorSalsa.classList.remove("hidden");
		}else{
			errorSalsa.classList.add("hidden");
		}

	// Validamos el contenido de la sección "cantidad"
		if (opcionText.value == ""){
			optionBox[0].classList.remove("hidden");
			errMsgText.classList.remove("hidden");
		}
		else{
			errMsgText.classList.add("hidden");
		}

	}


function menuFunctionality(){

	var menu = document.getElementById("menu");				
	var elemento = menu.getElementsByTagName("li");		

	for (var i = 0; i < elemento.length; i ++){	
		
		elemento[i].addEventListener("click", function(e){
			
			var hideOption = document.getElementsByClassName("selected");
			var hidePage = document.getElementsByClassName("showing");
			var displayOption = e.target; //Ubica elemento al que se le dio click
			var displayPage = document.getElementById(displayOption.classList.value);

			//Oculta la opcion del menú y pagina actuales
			hideOption[0].classList.remove("selected");
			hidePage[0].classList.add("hidden");
			hidePage[0].classList.remove("showing");

			//Despliega la opción del menú y paguna seleccionada
            displayOption.classList.add("selected");
            displayPage.classList.add("showing");
            displayPage.classList.remove("hidden");
		});
	} 
}



/*


					Funcionalidad:
						- validar usuario no existe
						- crear usuario 
						- vaciar forma
					Notificaciones:
						- si no se puede acceder al servidor
						- si no se puede acceder a BD
						- si el usuario ya existe
						- si se REGISTRO exitosamente

				Login de usuarios
					Modal:
						- html: contenido 
						- css: estilo: toda lapagiuna en media opacidad con una ventana  usr, pwd, login
						- js: recopilar usr y pwd
					Funcionalidad
						- validar si el usuario existe
						- iniciar session PHP
					Notificaciones:
						- Si el usuario no existe: error
						- si el usuairo existe: desplegar nombre

			Comentarios:
				validar session activa
				
				- recopilar datos de usuario
				- recopilar comentario

				- almacenar comentario en BD asociado al ususairo
				
				- cargar comentarios en BD

			Chefs
				- html: seccion para desplegar contenido de chefs
				- css: estilo (como dü)
				- js: caregar información desde BD cuando cargue la pagina

				- php: 
					-acceder BD por informacion de los chefs
		*/