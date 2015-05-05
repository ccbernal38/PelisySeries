
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
  <div id="login" class="container top-buffer bottom-buffer">
    <section class="col-xs-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
        <h1>Registrarse</h1>
        <div class="col-md-12 col-xs-12">
          <form role="form" class="col-md-12" id="formRegister" method="POST" action="index/index/registro">
            <div class="form-group">
              <label for="name" >Nombre:</label>
              <input type="text" id="name"class="form-control" name="name" placeholder="Ingresa tu nombre">
            </div>
            <div class="form-group">
              <label for="lastname" >Apellido:</label>
              <input type="text" id="lastname" class="form-control" name="lastname" placeholder="Ingresa tu apellido">
            </div>
            <div class="form-group">
              <label for="email" >Correo:</label>
              <input type="email" id="email" class="form-control" name="email" placeholder="Ingresa tu correo">
            </div>
            <div class="form-group">
              <label for="username" >Usuario:</label>
              <input type="text" id="username" class="form-control" name="username" placeholder="Ingresa tu usuario">
            </div>
            <div class="form-group">
              <label for="pwd" >Password:</label>
              <input type="password" id="pwd" class="form-control" name="pwd" placeholder="Ingresa tu password">
            </div>
             <div class="form-group">
              <label for="pwd2" >Repite la contraseña:</label>
              <input type="password" class="form-control" name="pwd2" placeholder="Re-ingresa tu password">
            </div>
            <div class="col-md-3 col-md-offset-9">
            <input type="submit" class="btn btn-success" style="width: 100%;" value="Registro"/>
          </div>  
          </form>
          <div id="resutl">
            
          </div>
      </div>
    </section>
  </div>
</body>
</html>