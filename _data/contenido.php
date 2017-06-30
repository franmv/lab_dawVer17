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

		$sqlquery = "SELECT	comment, U.username, email 
					 FROM COMMENTS C 
					 JOIN USERS U 
					 ON (C.username=U.username)";
	
		$datos = $conn->query($sqlquery);

		if ($datos->num_rows > 0){
			$i = 0;
			while($row = $datos->fetch_assoc()){
				$response[$i] = array('user' => $row['username'], 'comm' => $row['comment'], 'email' => $row['email'] );
				$i++;
			}

			echo json_encode($response);
		}
		
		else{
			$connection -> close();
			return array("status" => "406");
		}
		
		$result = $dato->fetch_assoc();

		echo json_encode($result);

	}
?>