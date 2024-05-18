
function scrollToAnchor(anchorID) {
  var target = document.querySelector(anchorID);
  var menuHeight = document.querySelector('.ulMenu').offsetHeight; // Cambia '.menu' al selector correcto de tu menú

  if (target) {
    window.scrollTo({
      top: target.offsetTop - menuHeight,
      behavior: 'smooth' // Esta propiedad activa el desplazamiento suave
    });
  }
}










var cont = 0;
let nombres = [];
let mensajes = [];



$("#enviar").on("click",function(event){
  event.preventDefault();
  // resto de tu codigo
});

function mostrarDatos() {
  nombres[cont] = document.getElementById("Nombre").value;
  mensajes[cont] = document.getElementById("messageText").value;

  var mensajeError = document.getElementById("nombreError");
  var mensajeError2 = document.getElementById("mensajeError");

  mensajeError.textContent = "";
  mensajeError2.textContent = "";


  if (nombres[cont] != "" && mensajes[cont] != "" && mensajes[cont].length < 301) {
    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = datosMostrados.innerHTML + "<h4><strong style='color: red;'>Mensaje numero: " + (cont + 1) + "</strong>" + "<h4><strong>Nombre:</strong> " + nombres[cont] + "</h4>" +
      "<h4><strong>Mensaje:</strong> " + mensajes[cont] + "\n" + "</h4>";

    cont++;
    document.getElementById("Nombre").value = "";
    document.getElementById("messageText").value = "";
  }
  if (nombres[cont] == "") {
    var mensajeError = document.getElementById("nombreError");
    mensajeError.textContent = "El nombre del remitente no puede estar vacio";
  }
  if (mensajes[cont] == "") {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "el mensaje no puede estar vacio";
  }
  if (mensajes[cont].length > 300) {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "El texto del mensaje no debe superar los 300 caracteres";
  }

  return false;
}




































       function redireccionar(url) {
       window.location.href = url;
       }
