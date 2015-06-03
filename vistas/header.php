<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="/pelisyseries/recursos/js/jquery-2.1.3.js"></script>
	<script src="/pelisyseries/recursos/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/pelisyseries/recursos/css/bootstrap.css">
	<link rel="stylesheet" href="/pelisyseries/recursos/css/nuevo.css">
	<script src="/pelisyseries/recursos/js/tmdb.js"></script>
	<script src="/pelisyseries/recursos/js/spa.js" async></script>	
	<script src="/pelisyseries/recursos/js/jqueryvalidation.js"></script>
	<script src="/pelisyseries/recursos/js/basic.js"></script>
	
	<?php 
		session_start();
		include('/libs/facebook/app/start.php'); 
	?>
	<title>Informacion de peliculas y series</title>
</head>
<body>	
	<header id="main-header">
		<div class = "navbar navbar-default navbar-fixed-top navbar-inverse">
			<div class = "container">
			<div class="navbar-header">
					<button id="button_menu" class = "navbar-toggle navbar-left" data-toggle = "collapse" data-target = "#collapsed">
						<span class = "icon-bar"></span>
						<span class = "icon-bar"></span>
						<span class = "icon-bar"></span>
					</button>
					<a id="logo" href = "" class = "navbar-brand">
						<img  src="/pelisyseries//pelisyseries/recursos/img/logo.png" class="media-heading img-responsive" alt="PelisySeries">
					</a>
				</div>
				<div class = "collapse navbar-collapse" id="collapsed">
					<ul class = "nav nav-pills navbar-right visible-md visible-lg">
						<li id="principal" class = "active"><a href = "">Principal</a></li>
						<li id="peliculas"><a  href = "">Peliculas</a></li>
						<li id="series" ><a href = "">Series</a></li>
						<?php if (!isset($_SESSION['facebook'] ) && !isset($_COOKIE["user"]))
						{
							
							?>
						<li id="login"><a href="">Login</a></li>
						<li id="registrarse"><a href="">Registrarse</a></li>
						<?php } else
						{
							?><li id="usuario"><a href="" class="btn-success" title="">
							<?php if (isset($_SESSION['facebook'] ))
						{ 
							echo $facebook_user->getName();
						}
						else
						{
							echo $_COOKIE["user"];
						} ?></a></li>
							
							 <li id="cerrarSesion"><a href="">Cerrar sesión</a></li>
						<?php } ?>
						
						
					</ul>
					<ul class = "nav navbar-nav navbar-right visible-sm visible-xs">
						<li id="principal_movil" class = "active"><a href = "#">Principal</a></li>
						<li id="peliculas_movil"><a  href = "">Peliculas</a></li>
						<li id="series_movil" ><a href = "">Series</a></li>
						<?php if (!isset($_SESSION['facebook']) && !isset($_COOKIE["user"]))
						{ 
							?>
						<li id="login_movil"><a href="">Login</a></li>
						<li id="registrarse_movil"><a href="">Registrarse</a></li>
						<?php } 
						else
							{ ?>
						<li id="usuario_movil"><a href="" class="btn-success" title=""
						><?php if (isset($_SESSION['facebook'] ))
						{ 
							echo $facebook_user->getName();
						}
						else
						{
							echo $_COOKIE["user"];
							} ?></a></li>
						<li id="cerrarSesion_movil"><a href="">Cerrar sesión</a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
	</header>
	<section class="fondo col-xs-12">
