var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var fechaGlobal = 0;

function crearCalendario() {
  escribirNombreMes();
  crearTablaCalendario();
  obtenerFechas();
}

function fechaActual() {
  var fecha = new Date()
  return fecha;
}

function modificarFecha(valor) {
  fechaGlobal += valor;
}

function fechaSeleccionada(mes) {
  var fecha = fechaActual();
  fecha.setMonth(fecha.getMonth() + mes);
  return fecha;
}

function escribirCalendario(dia, fecha) {
  if(fecha.getMonth() == fechaSeleccionada(fechaGlobal).getMonth()) {
    if(fecha.getDate() == fechaActual().getDate() && fecha.getMonth() == fechaActual().getMonth()) {
      document.getElementById("dia" + dia).className = "dia_mes_actual hoy";
      document.getElementById("dia" + dia).innerHTML = fecha.getDate();
      document.getElementById("dia" + dia).value = fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear();
    } else {
      document.getElementById("dia" + dia).className = "dia_mes_actual";
      document.getElementById("dia" + dia).innerHTML = fecha.getDate();
      document.getElementById("dia" + dia).value = fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear();
    }
  } else {
    document.getElementById("dia" + dia).className = "dia_mes_diferente";
    document.getElementById("dia" + dia).innerHTML = fecha.getDate();
    document.getElementById("dia" + dia).value = fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear();
  }
}

function escribirNombreMes() {
  document.getElementById("nombre_mes").innerHTML = nombresMeses[fechaSeleccionada(fechaGlobal).getMonth()] + " " + fechaSeleccionada(fechaGlobal).getFullYear();
}

function obtenerFechas() {
  var fecha = fechaSeleccionada(fechaGlobal);
  fecha.setDate(1);
  var desfase;
  if(fecha.getDay() != 0) {
    desfase = fecha.getDay()
  } else {
    desfase = 7;
  }
  fecha.setDate(fecha.getDate() - desfase);
  for(var i = 1; i <= 42; i++) {
    fecha.setDate(fecha.getDate() + 1);
    escribirCalendario(i, fecha);
  }
}

function crearTablaCalendario() {
  var diasSemana = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];
  var dia = 1;
  document.getElementById("calendario_dias").innerHTML = "<table id='tabla_dias'></table>";
  for(var i = 1; i <= 7; i++) {
    document.getElementById("tabla_dias").innerHTML += "<tr id='fila" + i + "'></tr>";
    for(var j = 1; j <= 7; j++) {
      if(i == 1) {
        document.getElementById("fila" + i).innerHTML += "<td class='dia_semana'>" + diasSemana[j - 1] + "</td>";
      } else {
        document.getElementById("fila" + i).innerHTML += "<td><button id='dia" + dia + "'onclick=\x22clickDia(document.getElementById(\x27dia" + dia + "\x27).value)\x22></button></td>";
        dia++;
      }
    }
  }
}

function clickDia(diaSeleccionado) {
  var fecha = diaSeleccionado.split(" ");
  document.getElementById("texto").innerHTML = "Dia " + fecha[0] + " de " + nombresMeses[fecha[1]] + " de " + fecha[2]; 
}