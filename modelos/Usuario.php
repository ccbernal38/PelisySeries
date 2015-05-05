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
		foreach ($result as $row) {
			if($username == $row[2]){
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
		return $this->select(null,$where);
	}

	function getUsuarios()
	{
		//select
		return $this->select();
	}
}


?>