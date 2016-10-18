function validateForm() {
	var correo = document.getElementById("input-email").value;
	var expr = /^([a-zA-Z0-9_\.\])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!expr.test(correo)) {
		alert("Error: La dirección de correo " + correo + " es incorrecta.");
	}
	var contra = document.getElementById("input-password").value;
	if (contra.length < 5) {
		alert("Contraseña debe ser mínimo 6 caracteres");
	} else if (contra == "123456" || contra == "password" || contra == "098754") {
		alert("Escriba otra contraseña");
	}
	if (document.getElementsByTagName("select")[0].value == 0) {
		alert("Selecciona tu tipo de Bici Loca");
	}
}