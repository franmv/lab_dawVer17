/*
	Autor: Francisco Maass Villarreal
	Matricula: A01136728
	Clase: Desarrollo de Applicaciones web
	Periodo: Verano 2017
	Profesor: MSc Alfredo Salazar Vélez
	Escuela: Instituto tecnológico y de estudios superoipres de Monterrey
	Campus: Monterrey
*/

$(document).ready(function(){
	
	//var menuElement = document.getElementById("menu");
	//var liElements = menuElement.getElementsByTagName("li");
	var $liElements = $("#menu").liElements;
	for (var i = 0; i < liElements.length(); i ++){
		//agregar event listener a cada uno de los elementos (e) de la lista 
 /*		$liElements[i].on("click", function(e){
			$(".selected").removeClass("selected"); 		//Remove class selected from menu item
			$(".showing").addClass("hidden");				//Add class hidden to content
			$(".showing").removeClass("showing");			//Remove class hiden to content
			
			var currentLiElement = e.target;
			// Mostrar la seccion correspondiente seleccionada en el menu
            var sectionToShow = document.getElementById(currentLiElement.classList.value);
            sectionToShow.classList.add("currentSelection");
            sectionToShow.classList.remove("hiddenSection");

            // Agregar la clase selected al elemento de la lista actual
            currentLiElement.classList.add("selected");
		});*/

		liElements[i].addEventListener("click", function(e){
			// Remover la clase selected del elemento actualmente seleccionado
			var currentSelected = document.getElementsByClassName("selected");
			currentSelected[0].classList.remove("selected");

			// Remover la clase de currentSelection al elemento actualmente seleccionado
			var currentSection = document.getElementsByClassName("currentSelection");
			// Agregar la clase de hiddenSection al elemento previo
			currentSection[0].classList.add("hiddenSection");
			currentSection[0].classList.remove("currentSelection");

			var currentLiElement = e.target;

			// Mostrar la seccion correspondiente seleccionada en el menu
            var sectionToShow = document.getElementById(currentLiElement.classList.value);
            sectionToShow.classList.add("currentSelection");
            sectionToShow.classList.remove("hiddenSection");

            // Agregar la clase selected al elemento de la lista actual
            currentLiElement.classList.add("selected");
		});
	} 
}
});
/*
document.addEventListener("DOMContentLoaded", function(){
	
	// Función para validar el input de username
	//var submitButton = document.getElementById("submitForm");
	//submitButton.addEventListener("click", validateUserName);

	menuFunctionality();
});
*/
/*
	function validateUserName(){
		var userNameElement = document.getElementById("userName");
		var userNameErrorMessage = document.getElementById("userNameErrorMessage");
			
		if (userNameElement.value == ""){
			userNameErrorMessage.classList.remove("hiddenElement");
		}
		else{
			userNameErrorMessage.classList.add("hiddenElement");
		}
	}
*/


/***************************************************/

	//Agregar un eventListener al documento HTML con parametros
	document.addEventListener("DOMContentLoaded", function(){
		//Buscamos el boton Submit (A la cocina!)
		var submit = document.getElementById("submitForm");
		var clear = document.getElementById("resetForm");

		//Agregamos Event listener "click al boton"
		submit.addEventListener("click", validateForm);
		//clear.addEventListener("click", clearForm);

		//Activamos la funcionalidad del menú
		menuFunctionality();
	});

	//CAMBIAR VALIDACIONES X JQuery
	function validateForm(){
		//Declaramos e inicializamos variables con eleccoines del ususario y mensajes.
		var x = new Array();
		x[0] = document.getElementsByClassName("tamaño"); // checked = True or False
		x[1] = document.getElementsByClassName("salsa"); //selectedIndex != 0 or ""var extra = document.getElementsByClassName("extra"); // //checked True or False
		x[2] = document.getElementsByClassName("cantidad"); // >0

		var error = document.getElementsByClassName("error");

		/*
		for (var i = 0; i <= aux; i++) {
			switch(elemnto[i].typeof){
				case "radio": 
					//Se checan cada una de las opciones
					var j = elemnto[i].length;
					
					do{ //Se checa si alguna opción esta marcada
						if(elemto[i][j].checked){
							//Oculta error con que una opcion sea seleccionada 
							error[i].classList.add("hidden");
							break;
						};
					
						j--;

					}while(j!=0);//valida si hay opciones sin revisar

					//habilita error si ninguna opcion se seleccionó 
					error[i].classList.remove("hidden"); 
					break;
				
				case "select";
					if(elemento[i].selectedIndex == "-1"){ 		//si ninguna opcion se seleccionó 
						error[i].classList.remove("hidden"); 	//habilita error 
					};
					break;
				
				case "number":
					if (elemento[i].value <= 0) {
						error[i].classList.remove("hidden");
					};
					break;
				
				default:
					// en caso de no pasar por alguna delas pruebas, no se marca error.
					error[i].classList.add("hidden");
					break;
			}
		};

		
		//Checha que el usuario haya elegido un tamaño de hamburguesa
		if (elemento[i][0].checked || elemento[i][1].checked || elemento[i][2].checked){
			error[i].classList.remove("hidden");
		} else{
			error[i].classList.add("hidden");
		}

		//Checha que el usuario haya elegido una salsa
		if (salsa.selectedIndex > "-1"){
			error[i].classList.remove("hidden");
		} else{
			error[i].classList.add("hidden");
		}

		//Checha que el usuario introduzca la cantidad de hamburguesas
		if(cantidad.value == "0" || cantidad.value == ""){
			error[i].classList.remove("hidden");
		} else{
			error[i].classList.add("hidden");
		}*/
	}


	function clearForm(){
		var input = document.getElementsByTagName("input");
		var select = document.getElementById("salsa");
		var size = input.length;
		size -= 2;

		for(var i = 0; i < size; i++){
			switch(input[i].type){
				case radio: 	
				case checkbox:
					input[i].checked = false;
					break;
				case text:
					input[i].value = "";
					break;
				default:
					//nothing to do
					break;
			}
		}

		//Elimina la opcion seleccionada de la lista de salsas.
		select.selectedIndex = "-1";
	}

	//EL DON/NUESTRO SR | ARMA TU ORDEN | DEJANOS UN COMENTARIO 
	function menuFunctionality(){
	/*
		var menu = document.getElementById("menu");
		var menuOptions = menu.getElementsByTagName("li");
		var aux = menuOptions.length;

		for(var i = 0; i < aux; i++){
			menuOptions[i].addEventListener("click", function(e){
				var prevOption = document.getElementsByClassName("selected");
				var prevSection = document.getElementsByClassName("showing");
				
				//Eliminar la opción de menú anterior de la clase "selected"
				prevOption[0].classList.remove("selected");
				//Ocultar la seccion actual
				prevSection[0].classList.add("hidden");
				prevSection[0].classList.remove("showing");
				

				var selectedOption = e.target;
				var toShow = document.getElementById(selectedOption.classList.value);	

				//Mostrar la sección elegida
				toShow.classList.add("showing");
				toShow.classList.remove("hidden");

				//Incluir ala opcion 
				selectedOption.classList.add("selected");
				
			});
		}*/
	}

	//CARGAR COMENTARIOS PREVIOS: almacenadoS en un archivo XML
	//CARGAR ARCHIVOS AL LLEGAR A LA SECCION

	//CARGAR SECCIÓN CONOCE A LOS CHEFS

	/*
		Laboratorio 4:

		Crear Base de datos

		Usuarios
			Registro para usuarios 
				Seccion de registro:
					- html: contenido
					- css: estilo
					- js: recopilar datos de forma
				Funcionalidad:
					- validar usuario no existe
					- crear usuario 
					- vaciar forma
				Notificaciones
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