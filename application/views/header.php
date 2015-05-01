<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="<?php echo base_url(); ?>js/jquery-2.1.3.js"></script>
	<script src="<?php echo base_url(); ?>js/bootstrap.js"></script>
	<link rel="stylesheet" href="<?php echo base_url(); ?>css/bootstrap.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>css/nuevo.css">
	<script src="<?php echo base_url(); ?>js/tmdb.js"></script>
	<script src="<?php echo base_url(); ?>js/basic.js"></script>
	<script src="<?php echo base_url(); ?>js/spa.js"></script>
	<?php
	include 'application/libraries/facebook/app/start.php';
	?>
	<title>Informacion de peliculas y series</title>
</head>
<body>	

	<header id="main-header">
		<div class = "navbar navbar-default navbar-fixed-top navbar-inverse">
			<div class = "container">
				<a id="logo" href = "#" class = "navbar-brand">
					<img  src="<?php echo base_url(); ?>img/logo.png" class="media-heading img-responsive" alt="PelisySeries">
				</a>
				<button class = "navbar-toggle" data-toggle = "collapse" data-target = "#collapsed">
					<span class = "icon-bar"></span>
					<span class = "icon-bar"></span>
					<span class = "icon-bar"></span>
				</button>
                               
				<div class = "collapse navbar-collapse" id="collapsed">
					<ul class = "nav nav-pills navbar-right visible-md visible-lg">
						<li id="principal" class = "active"><a href = "">Principal</a></li>
						<li><a id="peliculas" href = "">Peliculas</a></li>
						<li><a id="series" href = "">Series</a></li>
                	<?php if (!isset($_SESSION['facebook'])): ?>
						
						<li>
							<a href="login.php">Login</a>
						</li>
						<li>
							<a href="registro.php">Registrarse</a>
						</li>
						

					<?php else: ?>
						
						<li>
							<a href="#" class="btn-success" title=""><?php echo $facebook_user->getName();?></a>								
						</li>
						<li>
							<a href="../libs/facebook/app/logout.php">Cerrar sesión</a>
						</li>
						
					<?php endif; ?>
                    </ul>
                    <ul class = "nav navbar-nav navbar-right visible-ms visible-xs">
						<li class = "active"><a href = "#">Principal</a></li>
						<li><a href = "#">Peliculas</a></li>
						<li><a href = "#">Series</a></li>
                	<?php if (!isset($_SESSION['facebook'])): ?>
						
						<li>
							<a id="login" href="">Login</a>
						</li>
						<li>
							<a id="registrar" href="">Registrarse</a>
						</li>
						
					<?php else: ?>
						
						<li>
							<a href="#" class="btn-success" title=""><?php echo $facebook_user->getName();?></a>								
						</li>
						<li>
							<a href="../libs/facebook/app/logout.php">Cerrar sesión</a>
						</li>
						
					<?php endif; ?>
                    </ul>
				</div>
			</div>
		</div>
	</header><!-- /header -->