<?php 

include 'libs/Modelo.php';
/**
* 
*/
class Usuario extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->database();

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
		//$where = array('nombre' => "christian" );
		$this->delete($where);
		//return $this->select();	
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

		
		//$campos[0] = "nombre";
		//$campos[1] = "apellido";
		//$campos[2] = "edad";
		//$values[0] = "christian";
		//$values[1] = "Bernal";
		//$values[2] = 23;
		

		

		//Update
		//$campos = array('nombre' => "pepe" );
		//$where = array('edad' => "30" );
		
		//return $this->select();	
	}
}


?>