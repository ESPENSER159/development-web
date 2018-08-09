<?php
	
	function conectar(){
		$usuario = "root";
		$password = "";
		$server = "localhost";
		$db = "Prueba";
		$conec = mysql_connect($server, $usuario, $password);
		mysql_select_db($db, $conec);

		

	}

?>