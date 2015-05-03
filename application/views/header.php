<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="/pelisyseries/js/jquery-2.1.3.js"></script>
	<script src="/pelisyseries/js/bootstrap.js"></script>
	<link rel="stylesheet" href="/pelisyseries/css/bootstrap.css">
	<link rel="stylesheet" href="/pelisyseries/css/nuevo.css">
	<script src="/pelisyseries/js/tmdb.js"></script>
	<script src="/pelisyseries/js/basic.js"></script>
	<script src="/pelisyseries/js/spa.js" async></script>
	<script src="/pelisyseries/js/jqueryvalidation.js"></script>
	<?php
	include 'application/libraries/facebook/app/start.php';
	?>
	<script src="/pelisyseries/js/principal.js" type="text/javascript"></script>
	<title>Informacion de peliculas y series</title>
</head>
<body>	
	<header id="main-header">
		<div class = "navbar navbar-default navbar-fixed-top navbar-inverse">
			<div class = "container">
				<div class="navbar-header">
					<button class = "navbar-toggle navbar-left" data-toggle = "collapse" data-target = "#collapsed">
						<span class = "icon-bar"></span>
						<span class = "icon-bar"></span>
						<span class = "icon-bar"></span>
					</button>
					<a id="logo" href = "#" class = "navbar-brand">
						<img  src="/pelisyseries/img/logo.png" class="media-heading img-responsive" alt="PelisySeries">
					</a>
				</div>
				<div class = "collapse navbar-collapse" id="collapsed">
					<ul class = "nav nav-pills navbar-right visible-md visible-lg">
						<li id="principal" class = "active"><a href = "">Principal</a></li>
						<li id="peliculas"><a  href = "">Peliculas</a></li>
						<li id="series" ><a href = "">Series</a></li>
						<?php if (!isset($_SESSION['facebook'])): ?>
						<li id="login"><a href="">Login</a></li>
						<li id="registrarse"><a href="">Registrarse</a></li>
						<?php else: ?>
						<li id="usuario"><a href="" class="btn-success" title=""><?php echo $facebook_user->getName();?></a></li>
						<li id="cerrarSesion"><a href="">Cerrar sesión</a></li>
						<?php endif; ?>
					</ul>
					<ul class = "nav navbar-nav navbar-right visible-ms visible-xs">
						<li class = "active"><a href = "#">Principal</a></li>
						<li id="peliculas"><a  href = "">Peliculas</a></li>
						<li id="series" ><a href = "">Series</a></li>
						<?php if (!isset($_SESSION['facebook'])): ?>
						<li id="login"><a href="">Login</a></li>
						<li id="registrarse"><a href="">Registrarse</a></li>
						<?php else: ?>
						<li id="usuario"><a href="" class="btn-success" title=""><?php echo $facebook_user->getName();?></a></li>
						<li id="cerrarSesion"><a href="">Cerrar sesión</a></li>
						<?php endif; ?>
					</ul>
				</div>
			</div>
		</div>
	</header>
