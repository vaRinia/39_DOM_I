function validateForm() 
{
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var emilio = document.getElementById("input-email").value;
	var contra = document.getElementById("input-password").value;
	var seleccion = document.getElementsByTagName("select")[0].selectedIndex;
	var regexEmilio = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var regexNombreApellido = /^[ÑA-Za-z _]*[ÑA-Za-z][ñA-Za-z _]*$/;
	var mensaje = "";
	var err = true;

	if (nombre == null || nombre == "" || !regexNombreApellido.test(nombre)) {
		mensaje += "Ingresa nombre, debe contener solo letras, primera letra mayúscula; \n";
		err = false;
	}
	if (apellido == null || apellido == "" || !regexNombreApellido.test(apellido)) {
		mensaje += "Ingresa apellido, solo letras, primera letra mayúscula; \n";
		err = false;
	}
	if (!regexEmilio.test(emilio)) {
		mensaje += "Correo inválido; \n";
		err = false;
	}
	if (contra.length < 6 ) {
		mensaje += "La contraseña debe tener al menos 6 caracteres; \n";
		err = false;	
	} else if (contra == "123456" || contra == "password" || contra == "098754") {
		mensaje += "Ingresa otra contraseña; \n";
		err = false;
	}
	if (seleccion == 0 || seleccion == null) {
		mensaje += "Elige tu Bici Loca; \n";
		err = false;	
	}
	if (!err) {
		alert (mensaje);
	}
	return err; 
}; //fin de la función opcion 2

//(err es falso o verdadero, cuando hubo un error err se volvió falso, si no hubo ningún error, err se asignó desde un momento como verdadero)
