var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function fechaActual() {
  var fecha = new Date()
  return fecha;
}

function fechaSeleccionada(mes) {
  var fecha = fechaActual();
  fecha.setMonth(fecha.getMonth() + mes);
  return fecha;
}

function escribirCalendario(dia, fecha) {
  document.getElementById("dia" + dia).innerHTML = fecha.getDate();
  document.getElementById("dia" + dia).value = fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear();
}

function obtenerFechas(fecha) {
  fecha.setDate(1);
  var desfase;
  if(fecha.getDay() != 0) {
    desfase = fecha.getDay()
  } else {
    desfase = 7;
  }
  fecha.setDate(fecha.getDate() - desfase);
  for(var i = 0; i < 42; i++) {
    fecha.setDate(fecha.getDate() + 1);
    escribirCalendario((i + 1), fecha);
  }
}

function clickDia(diaSeleccionado) {
  var fecha = diaSeleccionado.split(" ");
  document.getElementById("texto").innerHTML = "Dia " + fecha[0] + " de " + nombresMeses[fecha[1]] + " de " + fecha[2]; 
}