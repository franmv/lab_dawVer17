<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$server = 'localhost';
	$dbuser = 'root';
	$dbpass = 'root';
	$db = 'mrBurger';

	//Conexión a BD
	$conn = new mysqli($server, $dbuser, $dbpass, $db);

	if ($conn->connect_error){
	    header('HTTP/1.1 502 SIN CONEXIÓN A BD');
	    die("El servidor no pudo establecer una conexión al a BD");
	}

	else{
		$usr=$_POST['user'];
		$pwd=$_POST['password'];

		$sqlquery = "SELECT	*
					 FROM Users 
					 WHERE username='$usr' AND passwrd='$pwd' ";
	
		$datos = $conn->query($sqlquery);

		if ($datos->num_rows > 0){
			
			while($row = $datos->fetch_assoc()){
				$response= array('name' => $row['firstname'], 'lastname' => $row['lastname']);
			}

			session_start();

			$_SESSION["firstName"] = $row["firstname"];
			$_SESSION["lastName"] = $row["lastname"];

			echo json_encode($response);
		}
		
		else{
			$connection -> close();
			return array("status" => "406");
		}

	}
?>