<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$server = 'localhost';
	$dbuser = 'root';
	$dbpass = 'root';
	$db = 'mrBurger';

	$action = $_POST['accion'];

	//Conexión a BD
	$conn = new mysqli($server, $dbuser, $dbpass, $db);
	
	//Validamos la conexión
	if ($conn->connect_error){
	    header('HTTP/1.1 502 SIN CONEXIÓN A BD');
	    die("El servidor no pudo establecer una conexión al a BD");
	}else{
		//Se crean los querys
		switch($action){
			case 'checkUser': 
				$usr = $_POST['usuario'];
				$sqlquery = "SELECT * FROM Users WHERE username= '$usr' ";				 
				break;

			case 'checkEmail' : 
				$email = $_POST['correo'];
				$sqlquery1 = "SELECT * FROM Users WHERE email= '$email' ";
				break;
		}
	}
		
	$dato = $conn->query($sqlquery); //Se envia el query a la base de datos y se guarda la respuesta

	if ($dato->num_rows > 0){
		//marcamos errores correspondientes en caso de que se presenten
		switch($action){
			case 'checkUser': 
				header('HTTP/1.1 409 CONFLICTO, éste nombre de usuario ya existe, por favor selecciona otro');
		    	die("El usuario ya existe.");
			break;

			case 'checkEmail' : 
				header('HTTP/1.1 409 CONFLICTO, éste correo está asociado a otra cuenta, por favor utilize uno distinto');
				die("El correo ya está registrado.");
			break;
		}
	}else{

		switch ($action){
			case 'checkUser':
			$connection -> close();
					echo json_encode('USER AVAILABLE');
			break;

			case 'checkEmail':
			$connection -> close();
					echo json_encode('EMAIL AVAILABLE');
			break;

			case 'nuevoRegistro':
				$pass = $_POST['passwrd'];
				$nombre = $_POST['nombre'];
				$apellido = $_POST['apellido'];
				$edad = $_POST['edad'];

				$sql = "INSERT INTO Users (username, passwrd, email, firstname, lastname, age) VALUES ('$usr', '$pass', '$email', '$nombre', '$apellido', '$edad')";

				if (mysqli_query($conn, $sql)) {	/*Si el INSERT es EXITOSOS se inicia session (se guardan datos de la session) y se hace un echo con la unformacion */
		    		
					session_start(); 								//Iniciar session
					$_SESSION["firstName"] = $userFirstName;		//Nombre de quien esta en sessión.
					$_SESSION["lastName"] = $userLastName;			//Apellido de quien est

		    		echo json_encode("New record created successfully");
				}else{
					header('HTTP/1.1 501 Bad connection, something went wrong while saving your data, please try again later');
		    		die("Error: " . $sql . "\n" . mysqli_error($conn));
				}
			break;
		}
	}
?>