<?php 
/**
* 
*/
class FrontController
{
	private $controlador = "index";
	private $metodo = "index";
	private $params="";

	public function index()
	{
		$url = $_SERVER["REQUEST_URI"];
		$path = trim(parse_url($url, PHP_URL_PATH), "/");
		try{
			@list($appname, $controlador, $metodo, $params) = explode("/", $path, 4);
			@$params = (explode('/', $params));
			//se utiliza el metodo creado anteriormente
			//para cargar el controlador
			if($controlador != "index.php")
			{
				$micontrolador = $this -> cargarControlador($controlador);
			}
			else
			{
				$micontrolador = $this -> cargarControlador($this->controlador);
			}
			
			//asumimos que este metodo existe pues aun no ha sido creado

			if(!isset($params))
			{
				$micontrolador->setParametros($params);	
			}
			
			//creamos una variable para almacenar el nombre
			//del metod de manera temporal
			if($metodo != null)
			{
				$stringMetodo  = $metodo;	
			}
			else
			{
				$stringMetodo = $this->metodo;
			}
			
			//ejecutamos el metodo desde el controlador
			$micontrolador->$stringMetodo();

		}	
		catch(Exception $e)
		{
			$e -> getMessage();
		}
	}


	public function _setControlador($controlador)
	{
		if(!is_null($controlador)){
			$this -> controlador = $controlador;
		}		
	}

	public function _setMetodo($metodo)
	{
		if(!is_null($metodo))
		{
			$this -> metodo = $metodo;
		}
	}

	public function _setParams($params)
	{
		if(!is_null($params))
		{
			$this -> params = $params;
		}
	}

	public function _getControlador()
	{
		return $this -> controlador;
	}

	public function _getMetodo()
	{
		return $this -> metodo;
	}

	public function _getParams()
	{
		return $this -> params;
	}

	function cargarControlador( $controlador )
	{	
		//ponemos en mayuscula el primer caracter
		//y el resto en minuscula
		$controlador = ucfirst(strtolower($controlador));
		//Creamos una URL donde se buscara el controlador.
		$urlFile ='controladores/' . $controlador . '.php';
		//Verificamos si el archivo existe.
		if(file_exists($urlFile))
		{

			//incluimos ese archivo
			include $urlFile;
			//El nombre del archivo
			//debe ser el mismo nombre de clase
			$class = $controlador;
			$controller = new $class();
			//retornamos la instancia
			return $controller;
		}
		else
		{
			return null;
		}

	}

}
$frontController = new FrontController();
$frontController -> index();

 ?>