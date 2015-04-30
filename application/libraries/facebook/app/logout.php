<?php 

session_start();
unset($_SESSION['facebook']);
header('Location: ../../../vistas/index.php');