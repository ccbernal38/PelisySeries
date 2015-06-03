<?php
require_once "libs/Controlador.php";
class Home extends Controlador {
    
    public function imprimir() {
        print_r($this->parametros);
    }
    
    public function index() {
        /**$usuario = $this->cargarModelo("Usuario");
        $result =$usuario->getUsuarios();
        foreach ($result as $row) {
        print_r($row);
        }
        **/
        $this->cargarVistas("index");
    }
    
    public function registro() {
        $nombre = $_POST['nombre'];
        $apellido = $_POST['lastname'];
        $correo = $_POST['email'];
        $username = $_POST['username'];
        $pass = $_POST['pass'];
        $pass2 = $_POST['pass2'];
        
        $usuario = $this->cargarModelo("Usuario");
        //verificacion de usuarios repetidos
        $user = $usuario->buscarUsuario($username);
        
        if ($user == false) {
            //Verificacion contraseñas iguales
            if ($pass == $pass2) {
                $campos = array('name', 'lastname', 'email', 'username', 'pass');
                $values = array($nombre, $apellido, $correo, $username, $pass);
                $usuario->setUsuario($campos, $values);
                $respuesta['estado'] = "exitoso";
                $respuesta['mensaje'] = "Registro exitoso.";
                echo json_encode($respuesta);
            } 
            else {
                $respuesta['estado'] = "error";
                $respuesta['mensaje'] = "Las contraseñas no coinciden.";
                echo json_encode($respuesta);
            }
        } 
        else {
            $respuesta['estado'] = "error";
            $respuesta['mensaje'] = "ERROR: El usuario ya se encuentra registrado.";
            echo json_encode($respuesta);
        }
    }
    
    public function login() {
        $username = $_POST["username"];
        $pass = $_POST["pass"];
        
        $usuario = $this->cargarModelo("usuario");
        
        $respuesta = $usuario->autenticacion($username, $pass);
        
        if ($respuesta != null) {

            setcookie("user", $respuesta[0]['username'], time() + 3600, "/");
            setcookie("id", $respuesta[0]['idUser'], time() + 3600, "/");
            //Datos del usuario logueado
            $envio['nombre'] = $respuesta[0]['name'];
            $envio['apelido'] = $respuesta[0]['lastname'];
            $envio['email'] = $respuesta[0]['email'];
            $envio['username'] = $respuesta[0]['username'];
            echo json_encode($envio);
           
            
          //$this->cargarVistas("index");            

        } 
        else {
            echo "login fallido";
        }
    }
    
    public function logout() {
        setcookie("user", "", time() - 3600, "/");
        header("Location: /pelisyseries");
        setcookie("id", "", time() - 3600, "/");
        header("Location: /pelisyseries");
    }

    public function agregarSerieFavorita()
    {
        $idSerie = $_POST['idSerie'];
        $idUser=$_COOKIE["id"];

        $usuario = $this->cargarModelo("Usuario");
        $respuesta = $usuario->agregarSerieFavorita($idUser,$idSerie);
        return $respuesta;
    }

    public function listarSeriesFavoritas()
    {
         $idUser=$_COOKIE["id"];
         $usuario = $this->cargarModelo("Usuario");
         $respuesta = $usuario->listarSeriesFavoritas($idUser);

         if($respuesta!=null)
         {
            for ($i=0; $i < count($respuesta); $i++) { 
                $series[$i]['id'] = $respuesta[$i]['movies_idSeries'];
            }
             
             header('Content-type: application/json');
             echo json_encode($series);
         }
         
    }
}
?>
