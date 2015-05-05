<?php 
if(file_exists('/libs/Controlador.php'))
{
	include '/libs/Controlador.php';	
}
else if(file_exists('../libs/Controlador.php'))
	include '../libs/Controlador.php';	
else if(file_exists('libs/controlador.php'))
	include 'libs/controlador.php';

class Index extends Controlador
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

	public function registro(){
		$nombre = $_POST['name'];
		$apellido = $_POST['lastname'];
		$correo = $_POST['email'];
		$username = $_POST['username'];
		$pass = $_POST['pwd'];
		$pass2 = $_POST['pwd2'];

		$usuario = $this->cargarModelo("Usuario");

		//verificacion de usuarios repetidos
		$user = $usuario->buscarUsuario($username);
		
		if($user == false)
		{
			//Verificacion contraseñas iguales
			if($pass == $pass2)
			{
				$campos = array('name','lastname','email','username','pass');
				$values = array($nombre,$apellido, $correo, $username, $pass );			
				$usuario->setUsuario($campos, $values);			
				return "Usuario registrado exitosamente.";
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
			header("Location: /pelisyseries");
			exit;
		}
		else{
			echo "Login fallido";
//			$this->cargarVistas("index");
		}
	}

	public function logout(){
		setcookie("chsm", "", time() - 3600, "/");
		header("Location: /pelisyseries");
	}
}

?>