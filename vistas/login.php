
<div id="login" class="container top-buffer bottom-buffer">
	<section class="col-xs-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
		<h1>Inicio de Sesion</h1>
		<div class="col-md-12 col-xs-12">
			<h3>Inicia Sesion con tu correo</h3>
			<div class="col-md-12 col-xs-12">
				<form action="" id="formid" class="col-md-12" method="POST" accept-charset="utf-8">
					<div class="form-group">
						<label for="username">Username</label>
						<input id="username_login" class="form-control" placeholder="Ingrese su username" name="username"/>	
					</div>
					<div class="form-group top-buffer">
						<label for="password">Contraseña</label>
						<input id="password_login" type="password" class="form-control" placeholder="Ingrese su contraseña" name="pass">
					</div>
					<div class="col-md-4">
						<a href="">Recuperar tu contraseña</a>						
					</div>
					<div class="col-md-3 col-md-offset-5">
						<input type="button" id="btn_login" class="btn btn-success" style="width: 100%;" value="Iniciar Sesion">
					</div>					
				</form>

			</div>
		</div>
		<div class="col-md-12 col-xs-12 top-buffer bottom-buffer">
			<h3>Registrate / Inicia Sesion con tu Red Social</h3>
			<div class="col-md-8 col-xs-8 col-md-offset-1 col-xs-offset-1">
				<a href="<?php echo $_COOKIE['fb'] ?>">
					<input id="fb" class="imgFb" type="image"src="recursos/img/fb.png" type="padding-left: 0px;"></input>
				</a>
			</div>
		</div>
	</section>
</div>
</body>
</html>