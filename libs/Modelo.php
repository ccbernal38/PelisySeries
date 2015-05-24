  <?php
/**
* 
*/
class Modelo{

	protected $conexion;
	protected $nombreTabla;

	function __construct( ){
		$host = "localhost";
		$db_name = "pelisyseries";
		$usuario = "root";
		$contraseña = "";

		try {
			$this->conexion = new PDO("mysql:host={$host};dbname={$db_name}", $usuario, $contraseña);
		} catch (Exception $e) {
			echo "Connection error: " . $e->getMessage();
		}		
	}

	protected function query( $query ){
		return $this->conexion->query( $query );
	}

	protected function select( $llaves = null, $where = null ){

		$query = "select";
		if($llaves == null)
		{
			$query .= " * ";
		}
		else{

			$last = end($llaves);
			
			foreach ($llaves as $llave) {

				if($last != $llave){
					$query .= " " . "$llave".", ";	
				}
				else{
					$query .= " " . "$llave" . " ";
				}			
			}
		}
		$query .= "from $this->nombreTabla";
		if($where != null)
		{
			$query .= " where";
			$last = end($where);

			foreach ($where as $key => $value) {
				if($last != $value){
					$query .= " $key = $value and ";					
				}
				else{
					$query .= " $key = $value";	
				}			
			}
		}		
		
		return $this->query($query);
	}

	protected function insert( $campos, $parametros ){

		$query = "insert into $this->nombreTabla (";
		$values = "";
		if(count($campos) == count($parametros))
		{
			for ($i=0; $i < count($campos); $i++) 
			{ 
				if($i == count($campos)-1)
				{
					$query .= "$campos[$i] ) values ( ";
					if(is_int($parametros[$i]) || is_float($parametros[$i]) || is_double($parametros[$i]))
					{
						$values .= "$parametros[$i] )";
					}
					else{
						$values .= "'" . "$parametros[$i]" . "' )";
					}
				}
				else
				{
					$query .= $campos[$i] . ", ";

					if(is_int($parametros[$i]) || is_float($parametros[$i]) || is_double($parametros[$i]))
					{
						$values .= "$parametros[$i]" . ", ";
					}
					else
					{
						$values .= "'" . "$parametros[$i]" . "', ";
					}
				}

			}
			$query .= $values;
			
		}
		
		return $this->query($query);
	}

		protected function update( $parametro = null, $condicion = null ){
		if( $parametro != null )
		{
			$query = "Update $this->nombreTabla Set ";		
			$lastParam = end( $parametro );
			foreach ( $parametro as $key => $value ) {
				if( $lastParam == $value )
				{
					$query .= "$key = '$value' ";
				}
				else{
					$query .= "$key = '$value', ";
				}
			}
			if( $condicion != null )
			{
				$query .= "where ";
				$lastWhere = end($condicion);
				foreach ( $condicion as $key => $value ) {
					if( $lastWhere == $value)
					{
						$query .= "$key = '$value' ";
					}
					else
					{
						$query .= "$key = '$value' and ";
					}
				}
				$this->query($query);
			}
			else
			{
				$this->query($query);
			}
		}
	}

	protected function delete( $where = null )	{
		$query = "Delete from $this->nombreTabla";
		if( $where == null )
		{
			$this->query( $query );
		}
		else{
			$query .= " where ";
			$last = end($where);
			foreach ( $where as $key => $value ) {
				if( $last != $value )
				{
					$query .= " $key = '$value' and ";					
				}
				else{
					$query .= " $key = '$value'";	
				}		
			}
			echo "$query";
			$this->query($query);
		}
	}

	function setNombreTabla( $nombre ){
		$this->nombreTabla = $nombre;
	}

	function getNombreTabla( ){
		return $this->nombreTabla;
	}
}
?>