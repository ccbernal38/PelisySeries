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
        
        $respuesta = $usuario->autenticar($username, $pass);
        
        if ($respuesta != null && $respuesta->rowcount() > 0) {
            setcookie("user", "localLogin", time() + 3600, "/");
            $envio['nombre'] = $respuesta[0]['name'];
            $envio['apelido'] = $respuesta[0]['lastname'];
            $envio['email'] = $respuesta[0]['email'];
            $envio['username'] = $respuesta[0]['username'];
            echo json_decode($envio);
            $this->cargarVistas("index");            

        } 
        else {
            echo "login fallido";
        }
    }
    
    public function logout() {
        setcookie("chsm", "", time() - 3600, "/");
        header("Location: /pelisyseries");
    }
}
?>
