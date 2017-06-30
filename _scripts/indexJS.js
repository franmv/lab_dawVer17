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
	
	//Functionalidad para mandar el pedidio
	$('#submitForm').on('click', function(){
		if (validateForm()) orderSummary();
	});

	$('#resetForm').on('click', function(){
		var inputElements = document.getElementsByTagName("input");
		var field = document.getElementById("resumen");

		////Oculta al seccion de errores y Regresa el menu drop down a su selección principal.
		$(".errores").addClass("hidden");	
		$("select").value = "notSelected";

		//Ciclo que regresa todos los elementos tipo input a vaoñr nulo
		for (var i = inputElements.length-5; i>=0; i--){

			if(inputElements[i].type == "number"){
				inputElements[i].value = "";
			}else{
				inputElements[i].checked = false;
			}

			field.parentNode.parentNode.classList.add("hidden");
		}
	});		

	$('#publishComm').on('click', function(){
		
		if ($('#correoNombre').val().length < 3 && $('#correoCorreo').val() != "" && $('#correoTexto').text() != ""){
			var $newComment = "";

			$newComment += "<p>";
				$newComment += "<b>" + $('#correoNombre').val() + "</b> | ";
				$newComment += $('#correoCorreo').val() + "<br>";
				$newComment += $('#correoTexto').text() + "<br>";
			$newComment += "</p>";

			$('#comentarios').append($newComment);
		}
	
	});

	$('#iniciarSesion').on('click', function(){
		window.location.replace("registration.html");
	});

	$('#logo').on('click', function(){

		window.location.replace("index.html");
		
	});
	

	//AJAX: carga los comentarios almacenados en un .XML
	$.ajax({  
		url : "_data/contenido.php",
		type : "POST",
		dataType : "json",
		contentType: "application/x-www-form-urlencoded",
		success : function(comments){
			console.log(comments);
			var $toPrint = "";

			for(var i = 0; i < comments.length; i ++){
				$toPrint +=  "<p>";
					//$toPrint += $previousComments[i].photo;
					$toPrint += "<b>" + comments[i].user + "</b> | ";
					$toPrint += comments[i].email + "<br>";
					$toPrint += comments[i].comm + "<br>";
				$toPrint += "</p>";
			}
			
			$("#comentarios").append($toPrint);
		},
		error : function(errorMessage){
			console.log(errorMessage);
		}
	}); 
	/*$.ajax({  
		url : "data/comments.xml",
		type : "GET",
		dataType : "xml",
		success : function(previousComments){
			var $commentToPrint = "";

			$(previousComments).find("comment").each(function(){
				var $thisComment = $(this);

				$commentToPrint +=  "<p>";
					//$commentToPrint += $thisComment.find("name").attr("photo");
					$commentToPrint += "<b>" + $thisComment.find("name").text() + "</b> | ";
					$commentToPrint += $thisComment.find("name").attr("email") + "<br>";
					$commentToPrint += $thisComment.find("text").text() + "<br>";
				$commentToPrint += "</p>";
			});

			$("#comentarios").append($commentToPrint);
		},
		error : function(errorMessage){
			console.log(errorMessage);
		}
	}); */

	//AJAX: carga la informacion de los chefs desde un archivo .json
	$.ajax({ 
        url : "_data/chefs.php",
        type : "POST",
        dataType : "json",
        contentType: "application/x-www-form-urlencoded",
        success : function(mrBurgerChefs){
        	console.log(mrBurgerChefs);
            var $pageContent = "";

            for (var i = 0; i < mrBurgerChefs.length; i ++){
                $pageContent += '<div class= "chefs"><h2>'+ mrBurgerChefs[i].tipo + '</h2><br><b>' +
                					//espacio para la foto
                                    mrBurgerChefs[i].nombre + '</b><br><b>' + 
                                    mrBurgerChefs[i].apellidos + '</b><br> Edad: ' +
                                    mrBurgerChefs[i].edad + '<br>  <h3>Especialidades</h3> <div class = "especialidades"> <ul>';

	                                    /*var espec =  mrBurgerChefs[i].especialidades;
	                                    for (var j = 0; j < espec.length; j ++){

	                                    	$pageContent += '<li>' + espec[j].especialidad + '</li>';
	                                    }*/

                                    $pageContent += '</ul> </div> </div>';
            }  	//la informacion de los chefs se almacena en elementos de tipo DIV para el estuilo de estos elemntos modificar el archivo CSS 
            	//los divs deben de desplegarse de manera que se encuentren alienados en su eje horizontal espaciados proporcionalmente.
            
            $("#acerca").append($pageContent);
        },
        error : function(errorMessage){
            console.log(errorMessage);
        }
    });

	menuFunctionality();

});

function orderSummary(){
	// condicional que ejecuta lafuncion de validar la forma antes de continuar con el resumen del pedido, si el formulario no esta vcompleto se regresa n los errores al ususairo, en caso de que si est4e completo se ejecuta order summar : SEPARAR EN UNA FUNCION DISTINTA  LA CUAL SE EJECUTA AL DAR CLICK EN EL BOTON Y ES LA QUE TOMA LA DECISION Y LA QUE CONTIENE LA CONDICIONAL.
	//if 


	var inputElements = document.getElementsByTagName("input");
	var selectElements = document.getElementsByTagName("select");
	var parragraf = document.getElementById("resumen");
	var len = inputElements.length - 6;
	var num = inputElements[len].value;
	var aux;

	var toPrint = "";
	
	//Descripción de la orden:
	toPrint = "Entonces si entendimos bien quieres "; 

		if (num != 1) toPrint += num + " hamburguesas "; else toPrint += " una hamburguesa ";
		for (var i = 0; i < 3; i++){
		
			if (inputElements[i].checked) 
				toPrint += inputElements[i].value;
		}
		
		if (inputElements[3].checked) 
			toPrint += "con queso, ";   
		
		for (var i = 4; i < len-4; i++){
			if (inputElements[i].checked) toPrint += inputElements[i].value + ", ";
		}

		if (selectElements.value != "") 
			toPrint += " bañada en nuestra deliciosa salasa " + selectElements.value + ".";

		for (var i = len-4; i < len-1; i++){
			
			if (inputElements[i].checked && aux == 0) {
				toPrint += " Y como guarnición " + inputElements[i].value; 
				aux = 1;
			}
			else {
				if (inputElements[i].checked) toPrint += ", " + inputElements[i].value;
			}
		}
	parragraf.append(toPrint);
	parragraf.parentNode.parentNode.classList.remove("hidden");
} // valida el formulario antes de desplegar el resumen de l peido

function validateForm(){
	// Ubicamos elementos tamaño, salsa y cantidad
	var optionSize = document.getElementsByClassName("tamaño");
	var opcionSauce = document.getElementsByClassName("salsa");
	var opcionText = document.getElementById("cantidad");
	var optionBox = document.getElementsByClassName("errores");
	// Ubicamos los mensajes de error 
	var errMsgSize = document.getElementById("errorTamaño");
	var errMsgSauce = document.getElementById("errorSalsa");
	var errMsgText = document.getElementById("errorCantidad");

	var ret;
	
	// Validamos el contenido de la sección "Tamaño"
	for(var i = 0; i < optionSize.length; i ++){
		if(optionSize[i].checked){
			optionBox[0].classList.add("hidden");
			errMsgSize.classList.add("hidden");
			ret = false;
			break;
		}else{
			optionBox[0].classList.remove("hidden");
			errMsgSize.classList.remove("hidden");
			ret = true;
		}
	}

	// Validamos el contenido de la sección "salsa"
	if(opcionSauce[0].value == "notSelected"){
		optionBox[0].classList.remove("hidden");
		errMsgSauce.classList.remove("hidden");
		ret = true;
	}else{
		errMsgSauce.classList.add("hidden");
	}

	// Validamos el contenido de la sección "cantidad"
	if (opcionText.value == ""){
		optionBox[0].classList.remove("hidden");
		errMsgText.classList.remove("hidden");
		ret = true;
	}
	else{
		errMsgText.classList.add("hidden");
	}

	// responde con Falso cuando al menos uno de los errores es desplegado de lo contrario responde con verdadero.
	if (ret) return false; else return true; 
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

/******************* CODIGO ORIGINAL ************************
document.addEventListener("DOMContentLoaded", function(){
	// Definición de objetos 
	var submitOrder = document.getElementById("submitForm");
	var resetOrder = document.getElementById("resetForm");

	// Funciones de los objetos
	submitOrder.addEventListener("click", submitButton);
	resetOrder.addEventListener("click", resetForm);
	menuFunctionality(); /* funcion que siempre se ejecuta /
});


function resetForm(){
		var optionBox = document.getElementsByClassName("errores");
		var inputElements = document.getElementsByTagName("input");
		var selectElements = document.getElementsByTagName("select");
		var field = document.getElementById("resumen");
		////Oculta al seccion de errores	
		optionBox[0].classList.add("hidden");
		//Regresa el menu drop down a su selección principal.
		selectElements.value = "notSelected";
		//Ciclo que regresa todos los elementos tipo input a vaoñr nulo
		for (var i = inputElements.length-5; i>=0; i--){
			if(inputElements[i].type == "number"){
				inputElements[i].value = "";
			}else{
				inputElements[i].checked = false;
			}
			field.parentNode.parentNode.classList.add("hidden");
		}
	});

*/



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



