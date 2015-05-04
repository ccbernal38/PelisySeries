<?php
	include 'header.php';
	include('/libs/facebook/app/start.php');
	$facebook= $helper->getLoginUrl($config['scopes']); 
	setcookie("fb", "$facebook", time()+3600, "");
?>
	<div id="contenedor" class="container">

<?php 
	include 'principal.php';
?>

