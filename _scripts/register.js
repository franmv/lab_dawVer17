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
	var fN = fL = fU = fE = fP = false;
	$('.error').hide();

	//Borrar el formulario
	$('#clearRegister').on('click', function(){

		$('select').val('');
		$('.registerForm').val('');
		$('.registerForm').css({'background-color': ''});
		$('.error').hide();
	});

	//Validación de nombre (no vacío)
	$('#registrarName').on('focusout', function(){
		if($(this).val().length > 3){
			fN=true;
		}else{
			fN=false;
			$(this).css({'background-color': '#F2837F'});
		}
	});

	//Validación de apellido (no vacío)
	$('#registrarLastname').on('focusout', function(){
		if($(this).val().length > 3){
			fL=true;
		}else{
			fL=false;
			$(this).css({'background-color': '#F2837F'});
		}
	});

	//Validación de usuario
	$('#registrarUser').on('focusout', function(){
		
		//validamos que el campo no se quede vacio
		if($(this).val()!=''){

			var $userVerification = { 'usuario':$(this).val(), 'accion':'checkUser' };
			//validamos si el ususairo esta en BD
			$.ajax({
				url : '_data/registro.php',
				type : 'POST',
				data : $userVerification,
				datatype : 'json',
				contentType : 'application/x-www-form-urlencoded',
				success : function(userValidation){
					console.log(userValidation);
					$('#registrarUser').css({'background-color': ''});
					$('#userError').hide();
					fU = true;
				},
				error : function(errorMsg){
					console.log(errorMsg);
					$('#userError').show();
					fU = false;
				}
			});
		}else{ $(this).css({'background-color': '#F2837F'});}
	});

	//Validación del correoelectronico 
	$('#registrarEmail').on('focusout', function(){
		//Expresion regular para correo electronico
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		//Valida de sintaxis
		if(regex.test($(this).val())){
			
			$emailVerification = { 'correo' : $(this).val(), 'accion' : 'checkEmail'  };

			//Validación de correo en BD
			$.ajax({
				url : '_data/registro.php',
				type : 'POST',
				data : $emailVerification,
				datatype : 'json',
				contentType : 'application/x-www-form-urlencoded',
				success : function(emailValidation){
					$('#emailError').hide();
					fE = true;
					$(this).css({'background-color': ''});
				},
				error : function(errorMessage){
					console.log(errorMessage);
					alert(errorMessage);
					$('#emailError').show();
					fE = false;
				}
			});
			
		}else{
			$(this).css({'background-color': '#F2837F'});
		}
	});

	//Validación del correoelectronico 
	$('#registrarPassConfirmation').on('keyup', function(){

		//Valida de sintaxis
		if( $(this).val() == $('#registrarPass').val() ){
			$('#passError').hide();
			fP = true;
		}else{
			$('#passError').show();
			fP = false;
		}
	});

	//Validación de todos los campos y que  
	$('#registerButton').on('click', function(){
		if(fN && fL && fU && fE && fP){
			$nuevoUsuario = {
							'nombre' : $('registrarName').val(),
							'apellido' : $('registrarLastname').val(),
							'usuario' : $('registrarUser').val(),
							'correo' : $('registrarEmail').val(),
							'passwrd' : $('registrarPass').val(),
							'edad' : '25',
							'accion' : 'nuevoRegistro'
							};
			$.ajax({
				url : '_data/registro.php',
				type : 'POST',
				data : $nuevoUsuario,
				datatype : 'json',
				contentType : 'application/x-www-form-urlencoded',
				success : function(userCreation){


				},
				error : function(errorMessage){
					console.log(errorMessage);
					window.alert(errorMessage);
				}
			});
		}else{
			if(!fN) $('#registrarName').css({'background-color': '#F2837F'});
			if(!fL) $('#registrarLastname').css({'background-color': '#F2837F'});
			if(!fU) $('#registrarUser').css({'background-color': '#F2837F'});
			if(!fE) $('#registrarEmail').css({'background-color': '#F2837F'});
			if(!fP) $('#registrarPassConfirmation').css({'background-color': '#F2837F'});
		}
	});

	$('#logo').on('click', function(){

		window.location.replace("index.html");
	});



});