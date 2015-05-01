<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<script src="<?php echo base_url(); ?>js/jquery-2.1.3.js"></script>
	<script src="<?php echo base_url(); ?>js/bootstrap.js"></script>
	<link rel="stylesheet" href="<?php echo base_url(); ?>css/bootstrap.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>css/nuevo.css">
	<script src="<?php echo base_url(); ?>js/tmdb.js"></script>
	<script src="<?php echo base_url(); ?>js/basic.js"></script>
	<script src="<?php echo base_url(); ?>js/spa.js"></script>
	<?php
	//include '../libs/facebook/app/start.php';
	?>
	<title>Informacion de peliculas y series</title>
</head>
<body>	
	<header id="main-header">
		<div class="navbar navbar-default navbar-fixed-top navbar-inverse">
			<div class="container-fluid ">			
				<div class="navbar-header ">
					<div class="col-xs-3 col-xs-offset-1">
						<a id="logo" class="navbar-brand" >
							<img  src="<?php echo base_url(); ?>img/logo.png" class="media-heading img-responsive" alt="PelisySeries">
						</a>
					</div>			
					<div class="col-xs-3 col-xs-offset-1">
						<ul class="nav nav-pills">
							<li class="active"><a href="" id="principal">Principal</a></li>
							<li><a href="">Peliculas</a></li>
							<li><a href="">Series</a></li>
						</ul>
					</div>	
					<div class="col-xs-3">
						<?php if (!isset($_SESSION['facebook'])): ?>
						<ul class="nav nav-pills">
							<li>
								<a href="login.php">Login</a>
							</li>
							<li >
								<a  href="registro.php" id="registrarse">Registrarse</a>
							</li>
						</ul>
					<?php else: ?>
						<ul class="nav nav-pills">
							<li>
								<a href="#" class="btn-danger" title=""><?php echo $facebook_user->getName();?></a>								
							</li>
							<li>
								<a href="../libs/facebook/app/logout.php">Cerrar sesión</a>
							</li>
						</ul>
					<?php endif; ?>
					</div>
				</div>	
			</div>	
		</div>		
	</header><!-- /header -->