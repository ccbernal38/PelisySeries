<?php 

include 'libs/Controlador.php';

class Home extends Controlador
{

	public function imprimir()
	{
		print_r($this->parametros);
	}

	public function index()
	{
		/**$usuario = $this->cargarModelo("Usuario");
		$result =$usuario->getUsuarios();
		foreach ($result as $row) {
			print_r($row);
		}
		**/
		$this->cargarVistas("index");
	}

	public function registre(){
		$nombre = $_POST['nombre'];
		$username = $_POST['username'];
		$pass = $_POST['pass'];
		$pass2 = $_POST['pass2'];

		$usuario = $this->cargarModelo("Usuario");

		//verificacion de usuarios repetidos
		$user = $usuario->buscarUsuario($username);

		if($user == false)
		{
			//Verificacion contraseñas iguales
			if($pass == $pass2)
			{
				$campos = array('nombre','username','pass');
				$values = array($nombre, $username, $pass );			
				$usuario->setUsuario($campos, $values);			
			}	
		}
		else{
			echo "ERROR: El usuario ya se encuentra registrado.";
		}
	}

	public function login(){
		$username = $_POST["username"];
		$pass = $_POST["pass"];
		$modelo = $this->cargarModelo("Usuario");
		$respuesta = $modelo->autenticacion($username, $pass);
		
		if($respuesta != null && $respuesta->rowCount()>0)
		{

			setcookie("chsm", "logedin", time()+3600, "/");
			header("Location: /ChatSystem");
			exit;
		}
		else{
			echo "Login fallido";
//			$this->cargarVistas("index");
		}
	}

	public function logout(){
		setcookie("chsm", "", time() - 3600, "/");
		header("Location: /ChatSystem");
	}
}

?>