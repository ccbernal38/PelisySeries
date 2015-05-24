<?php 

include 'libs/Modelo.php';
/**
* 
*/
class Usuario extends Modelo
{
	function __construct()
	{
		parent::__construct();
		$this->setNombreTabla("users");
	}

	function setUsuario($campos, $values)
	{
		//insert
		$this->insert($campos, $values);
		
	}

	function buscarUsuario($username)
	{
		//insert
		$condicion = array('username' =>"'$username'");
		$result = $this->select(null, $condicion);
		$resultadosConsulta = $result->fetchAll();
		foreach ($resultadosConsulta as $row) {
			if($username == $row['username']){
				return true;
			}
		}
		return false;
	}

	function borrarUsuario($where){
		//delete
		$this->delete($where);
	}

	function actualizarUsuario(){
		//update
		$this->update($campos, $where);
	}

	function autenticacion($username, $password)
	{
		$where = array('username' => "'$username'" , 'pass' => "'$password'" );
		$PDO = $this->select(null,$where);
		$resultado = $PDO->fetchAll();
		return $resultado;
	}

	function getUsuarios()
	{
		//select
		return $this->select()->fetchAll();
	}
}


?>