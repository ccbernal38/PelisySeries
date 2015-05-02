
<script type="text/javascript">

$(function(){
$("#formRegister").validate({
        rules: {
            name: { required: true, minlength: 2},
            lastname: { required: true, minlength: 2},
            email: { required:true, email: true},
            username: { minlength: 2, maxlength: 15},
            pwd: { required: true, minlength: 6},
            pwd2: { required:true, equalTo: "#pwd"}
        },
        messages: {
            name: "Debe introducir su nombre.",
            lastname: "Debe introducir su apellido.",
            email : "Debe introducir un email válido.",
            username : "El nombre de usuario no es valido",
            pwd : "Ingrese una contraseña valida (minimo 6 caracteres)",
            pwd2 : "la contraseña no coincide",
        }
    });
});
</script>
<div class="container top-buffer">
<div class="row">
<div class="col-md-10 col-md-offset-1">
  <h2>Registrarse</h2>
  <form role="form" id="formRegister" method="POST" action="../user/registration">
    <div class="form-group">
      <label for="name" class="label">Nombre:</label>
      <input type="text" id="name"class="form-control" name="name" placeholder="Ingresa tu nombre">
    </div>
    <div class="form-group">
      <label for="lastname" class="label">Apellido:</label>
      <input type="text" id="lastname" class="form-control" name="lastname" placeholder="Ingresa tu apellido">
    </div>
    <div class="form-group">
      <label for="email" class="label">Correo:</label>
      <input type="email" id="email" class="form-control" name="email" placeholder="Ingresa tu correo">
    </div>
    <div class="form-group">
      <label for="username" class="label">Usuario:</label>
      <input type="text" id="username" class="form-control" name="username" placeholder="Ingresa tu usuario">
    </div>
    <div class="form-group">
      <label for="pwd" class="label">Password:</label>
      <input type="password" id="pwd" class="form-control" name="pwd" placeholder="Ingresa tu password">
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