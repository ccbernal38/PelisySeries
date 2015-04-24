<?php
	require_once '/facebook/app/start.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Pelis y series</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script src="js/jquery-2.1.3.js"></script>
	<script src="js/tmdb.js"></script>
	<script src="js/basic.js"></script>
	
	
	<link rel="stylesheet" href="css/estilo.css">
</head>
<body onload="principal()">
	<section>
		<header>
			<section class="cuenta">
				
				<div class="login">
					<?php if (!isset($_SESSION['facebook'])): ?>
					<a href="login.php">Login</a>
					<a href="registro.php">Registrarse</a>	
					<?php else: ?>
					<p class="nombre">
						Bienvenido, <?php echo $facebook_user->getName();?>
					</p>
					<a href="facebook/app/logout.php">Cerrar sesión</a>
					<?php endif; ?>
				</div>

				<div class="search">
					<input type="search" placeholder="Search...">
				</div>			
			</section>
			<section class="menu">
				<img class="logo" src="img/logo.png">
				<nav>
					<ul>
						<li id="principal" class="paginaActual">
							<a href="index.php">Principal</a>
						</li>
						<li id="peliculasP" class="paginaInactiva">
							<a href="">Peliculas</a>
						</li>
						<li id="seriesP" class="paginaInactiva" onclick="series();">
							<a href="">Series</a>
						</li>
					</ul>
				</nav>
			</section>
		</header>