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
		return $this->query("SELECT idUser,name,lastname,username,email FROM users  WHERE username='$username' AND pass='$password'")
		->fetchAll();
	}

	function agregarSerieFavorita($idUser,$idSerie)
	{
		$queryserie= $this->query("SELECT * FROM series WHERE idSerie='$idSerie'")->fetchAll();

		if ($queryserie==false) {
			$insertPelicula= $this->query("INSERT INTO series (idSerie) VALUES ('$idSerie')");
			
		}
		
			$query= $this->query("SELECT * FROM fav_series WHERE users_idUsers='$idUser' AND movies_idSeries='$idSerie'")->fetchAll();


			if($query==false)
			{
				return $this->query("INSERT INTO fav_series (users_idUsers,movies_idSeries) VALUES('$idUser','$idSerie')");
			}

		


		
		echo "la pelicula ya fue agregada a favoritos"; 
		
		
	}

	function listarSeriesFavoritas($idUser)
	{
		return $query= $this->query("SELECT movies_idSeries FROM fav_series WHERE users_idUsers='$idUser'")->fetchAll();
	}

	function getUsuarios()
	{
		//select
		return $this->select()->fetchAll();
	}
}


?>