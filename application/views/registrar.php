
<script type="text/javascript">

$(function(){
$("#formRegister").validate({
        rules: {
            nombre: { required: true, minlength: 2},
            apellido: { required: true, minlength: 2},
            correo: { required:true, email: true},
            usuario: { minlength: 2, maxlength: 15},
            pwd: { required: true},
            pwd2: { required:true, minlength: 2}
        },
        messages: {
            nombre: "Debe introducir su nombre.",
            apellido: "Debe introducir su apellido.",
            correo : "Debe introducir un email válido.",
            usuario : "El nombre de usuario no es valido",
            pwd : "Debe introducir solo números.",
            pwd2 : "Debe repetir la contraseña",
        }
    });
});
</script>
<div class="container top-buffer">
<div class="row">
<div class="col-md-10 col-md-offset-1">
  <h2>Registrarse</h2>
  <form role="form" id="formRegister" method="POST" action="">
    <div class="form-group">
      <label for="nombre" class="label">Nombre:</label>
      <input type="text" class="form-control" name="nombre" placeholder="Ingresa tu nombre">
    </div>
    <div class="form-group">
      <label for="apellido" class="label">Apellido:</label>
      <input type="text" class="form-control" name="apellido" placeholder="Ingresa tu apellido">
    </div>
    <div class="form-group">
      <label for="correo" class="label">Correo:</label>
      <input type="email" class="form-control" name="correo" placeholder="Ingresa tu correo">
    </div>
    <div class="form-group">
      <label for="usuario" class="label">Usuario:</label>
      <input type="text" class="form-control" name="usuario" placeholder="Ingresa tu usuario">
    </div>
    <div class="form-group">
      <label for="pwd" class="label">Password:</label>
      <input type="password" class="form-control" name="pwd" placeholder="Ingresa tu password">
    </div>
     <div class="form-group">
      <label for="pwd2" class="label">Repite la contraseña:</label>
      <input type="password" class="form-control" name="pwd2" placeholder="Re-ingresa tu password">
    </div>
    <button type="submit" class="btn btn-primary col-md-2 col-md-offset-5">Registro</button>
  </form>
  </div>
  </div>
</div>
</body>
</html>