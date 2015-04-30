<?php 
	require_once 'header.php';
?>
		<section id="inicioSesion" >
			<section id="fb">
				<p class="destacados">Inicio de sesi&oacuten</p>
				<p class="registrar"> Iniciar sesi&oacuten con facebook :</p>
				<a href="<?php echo $helper->getLoginUrl($config['scopes']);?>">
					<input  id="fb" class="imgFb" type="image"src="img/fb.png" type="padding-left: 0px;"></input>
				</a>
			</section>
			<section id="bd">
				<p class="registrar">Inicia de sesi&oacuten con tu usuario:</p>
				<form class="formInicio" action="#">
					
					<p>
						<label for="usuario">Nombre de usuario</label>
					</p>
					<p>
						<input id="usuario" type="text">
					</p>
					<p>
						<label for="password">Contraseña</label>
					</p>
					<p>
						<input id="password" type="password">
					</p>
					<p><input id="botonInicioSesion" type="submit" value="Iniciar"></p>
					<p>
						<a href="">Recuperar contraseña</a>
					</p>
				</form>			
				
			</section>
					
		</section>

</body>
</html>