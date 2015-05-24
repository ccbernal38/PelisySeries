<?php
/**
 *
 */
class FrontController {
    private $controlador = "Home";
    private $metodo = "index";
    private $params = "";
    /**
     * Función principal cuando llega una petición, realiza las correctas separaciones de:
     * AppName, Controlador, Método y parámetros.
     * @return String Si el controlador existe y el método existe, retorna la ejecución de dicho método,
     */
    public function index() {
        try {
            // Capturo la URL.
            $url = $_SERVER["REQUEST_URI"];
            // Parseo la URL con el caracter /.
            $path = trim(parse_url($url, PHP_URL_PATH), "/");
            /*
             * Separo el AppName, el Controlador, el Método y los parámetros.
             * Ejemplo de URL:
             * localhost/MiChat/home/index/parm1/parm2/parm3
             * localhost/MiChat
            */
            @list($appname, $controlador, $metodo, $parametros) = explode("/", $path, 4);
            @$parametros = (explode("/", $parametros));
            // Si no viene un controlador en la URL, asigno el controlador por defecto.
            if ($controlador == null) {
                $controlador = $this->controlador;
            }
            // Si no viene un método en la URL, asigno el método por defecto.
            if ($metodo == null) {
                $metodo = $this->metodo;
            }
            // Verifico si el controlador existe como archivo.
            $controlador = ucfirst(strtolower($controlador));
            if (file_exists("controladores/" . $controlador . ".php")) {
                // Si existe el controlador, lo incluyo.
                require_once ("controladores/" . $controlador . ".php");
                // Modifico el atributo controlador.
                $this->$controlador = $controlador;
                // Creo una instancia del controlador.
                $controller = new $controlador();
                // Verifico que el método exista en el controlador.
                if (method_exists($controller, $metodo)) {
                    // Si existe el método lo asigno al atributo.
                    $this->metodo = $metodo;
                    // Asigno los parámetros al atributo así vengan o no. (Array o null).
                    $this->parametros = $parametros;
                    // Al controlador le modifico los parámetros.
                    $controller->setParametros($parametros);
                    $stringMetodo = $this->metodo;
                    // Ejecuto el método indicado.
                    $controller->$stringMetodo();
                } 
                else echo "Método no existe";
            } 
            else echo "Controlador no existe";
        }
        catch(Exception $e) {
            $e->getMessage();
        }
    }
    
    public function index_cristian() {
        $url = $_SERVER["REQUEST_URI"];
        $path = trim(parse_url($url, PHP_URL_PATH), "/");
        try {
            @list($appname, $controlador, $metodo, $params) = explode("/", $path, 4);
            @$params = (explode('/', $params));
            //se utiliza el metodo creado anteriormente
            //para cargar el controlador
            if ($controlador == null) {
                $controlador = $this->controlador;
                $micontrolador = $this->cargarControlador($controlador);
            } 
            else {
                $micontrolador = $this->cargarControlador($controlador);
            }
            //asumimos que este metodo existe pues aun no ha sido creado
            
            if (!isset($params)) {
                $micontrolador->setParametros($params);
            }
            //creamos una variable para almacenar el nombre
            //del metod de manera temporal
            if ($metodo != null) {
                $stringMetodo = $metodo;
            } 
            else {
                $stringMetodo = $this->metodo;
            }
            //ejecutamos el metodo desde el controlador
            $micontrolador->$stringMetodo();
        }
        catch(Exception $e) {
            $e->getMessage();
        }
    }
    
    public function _setControlador($controlador) {
        if (!is_null($controlador)) {
            $this->controlador = $controlador;
        }
    }
    
    public function _setMetodo($metodo) {
        if (!is_null($metodo)) {
            $this->metodo = $metodo;
        }
    }
    
    public function _setParams($params) {
        if (!is_null($params)) {
            $this->params = $params;
        }
    }
    
    public function _getControlador() {
        return $this->controlador;
    }
    
    public function _getMetodo() {
        return $this->metodo;
    }
    
    public function _getParams() {
        return $this->params;
    }
    
    function cargarControlador($controlador) {
        //ponemos en mayuscula el primer caracter
        //y el resto en minuscula
        $controlador = ucfirst(strtolower($controlador));
        //Creamos una URL donde se buscara el controlador.
        $urlFile = 'controladores/' . $controlador . '.php';
        //Verificamos si el archivo existe.
        if (file_exists($urlFile)) {
            //incluimos ese archivo
            include $urlFile;
            //El nombre del archivo
            //debe ser el mismo nombre de clase
            $class = $controlador;
            $controller = new $class();
            //retornamos la instancia
            return $controller;
        } 
        else {
            return null;
        }
    }
}
$frontController = new FrontController();
$frontController->index();
?>