function validateForm() {
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var emilio = document.getElementById("input-email").value;
var seleccion = document.getElementsByTagName("select")[0].selectedIndex;
var regexEmilio = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexNombreApellido = !/^[A-Z][a-z]*$/g;
var mensaje = "";
var err = true;
	if (!regexNombreApellido.test(nombre)) {
		mensaje += "Nombre solo letras, primera letra mayúscula; \n";
		err = false;
	}
	if (!regexNombreApellido.test(apellido)) {
		mensaje += "Nombre solo letras, primera letra mayúscula; \n";
		err = false;
	}
	if (!regexEmilio.test(emilio)) {
		mensaje += "Correo inválido; \n";
		return false;
		err = false;
	}
	if (!err) {
		alert (mensaje);
	}
	return err; 
}; //fin de la función opcion 2

//(err es falso o verdadero, cuando hubo un error err se volvió falso, si no hubo ningún error, err se asignó desde un momento como verdadero)

