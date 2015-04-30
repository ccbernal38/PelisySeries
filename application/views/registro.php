<?php 
	require_once 'header.php';
?>
		<section id="inicioSesion" >
			<section id="bd">
				<p class="destacados">Registrarse</p>
				<form class="formRegistro" action="#" method="POST">
					<p>
						<label for="nombre">Nombre: </label>
						<input id="nombre" type="text">
					</p>
					<p>
						<label for="apellido">Apellido: </label>
						<input id="apellido" type="text">
					</p>
					<p>
						<label for="correo">E-mail: </label>
						<input id="correo" type="email">
					</p>
					<p>
						<label for="usuario">Nombre de usuario: </label>
						<input id="usuario" type="text">
					</p>
					<p>
						<label for="password">Contraseña: </label>
						<input id="password" type="password">
					</p>
					<p>
						<label for="confirmarPassword">Confirmar contraseña: </label>
						<input id="confirmarPassword" type="password">
					</p>
					<p><input id="botonRegistro" type="submit" value="Registrarse"></p>
				</form>			
				
			</section>
					
		</section>

	</body>
</html>