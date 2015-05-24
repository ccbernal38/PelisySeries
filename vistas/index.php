<?php
	require_once 'header.php';
	require_once('/libs/facebook/app/start.php');
	$facebook= $helper->getLoginUrl($config['scopes']); 
	setcookie("fb", "$facebook", time()+3600, "/");
?>
	<div id="contenedor" class="container">

<?php 
	require_once 'vistas/principal.php';
?>

