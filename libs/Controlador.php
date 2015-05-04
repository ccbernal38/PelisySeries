<?php

class Controlador
{

	protected $parametros;

	/**
	 * Metodo que permite cargar el modelo segun el nombre
	 * que se le indique en el parametro
	 * **/
	protected function cargarModelo($nombreModelo)
	{
		$nombreModelo = ucfirst(strtolower($nombreModelo));
		$urlFile = "modelos/".$nombreModelo.".php";
		if(file_exists($urlFile))
		{
			include $urlFile;
			$class = $nombreModelo;
			$controlador = new $class();
			return $controlador;
		}
		else
			return null;
	}
	/**
	 * Metodo que permite cargar las vistas segun el nombre
	 * que se le indique en el parametro
	 * **/
	protected function cargarVistas($nombreVista)
	{
		$urlFile = "vistas/".$nombreVista.".php";
		if(file_exists($urlFile))
		{
			require_once($urlFile);
			return true;
		}
		else
			return false;
	}

	/**
	 * Metodo setter del atributo parametros
	 * **/
	function setParametros($params){
		$this->parametros = $params;
	}

	/**
	 * Metodo Getter del atributo parametros
	 * **/
	function getParametros(){
		return $this->parametros;
	}
	
}


?>