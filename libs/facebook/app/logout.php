<?php 

session_start();
unset($_SESSION['facebook']);
header('Location /pelisyseries2/index.php');