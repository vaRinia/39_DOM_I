//document.querySelector("h2").innerHTML = "Por favor inicia sesión"; //(también funciona así)
     document.getElementsByTagName("h2")[0].innerHTML = "Por favor inicia sesión";
      document.getElementById("inputEmail").setAttribute("placeholder","Correo electrónico");
      document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");
      document.querySelector("span").innerHTML = "Recordar datos";
      document.getElementsByClassName("submit-btn")[0].innerHTML = "Iniciar sesión";