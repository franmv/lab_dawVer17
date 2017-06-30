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

	$('#loginButton').on('click', function(){

		var $send={
			'user': 
			'password': 
		}


		$.ajax(){
			url : "_data/login.php",
	        type : "POST",
	        data: $send,
	        dataType : "json",
	        contentType: "application/x-www-form-urlencoded",
	        success : function(response){
	        	console.log(response);

        	},
        	error : function(errorMessage){
            	console.log(errorMessage);
        }
    });


});