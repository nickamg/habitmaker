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
      $("#dia" + dia)
        .removeClass("dia_mes_diferente")
        .addClass("dia_mes_actual hoy")
        .html(fecha.getDate())
        .val(fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear());
    } else {
      $("#dia" + dia)
        .removeClass("hoy dia_mes_diferente")
        .addClass("dia_mes_actual")
        .html(fecha.getDate())
        .val(fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear());
    }
  } else {
    $("#dia" + dia)
      .removeClass("hoy dia_mes_actual")
      .addClass("dia_mes_diferente")
      .html(fecha.getDate())
      .val(fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear());
  }
}

function escribirNombreMes() {
  $("#nombre_mes").html(nombresMeses[fechaSeleccionada(fechaGlobal).getMonth()] + " " + fechaSeleccionada(fechaGlobal).getFullYear());
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
  $("#calendario_dias").html("<table id='tabla_dias'></table>");
  for(var i = 1; i <= 7; i++) {
    $("#tabla_dias").append("<tr id='fila" + i + "'></tr>");
    for(var j = 1; j <= 7; j++) {
      if(i == 1) {
        $("#fila" + i).append("<td class='dia_semana'>" + diasSemana[j - 1] + "</td>");
      } else {
        $("#fila" + i).append("<td><button id='dia" + dia + "'></button></td>");
        dia++;
      }
    }
  }
}

$(document).ready(function(){
  $("button").filter(function(){
    return this.id.match(/dia+[0-9]/);
  }).click(function(){
    var fecha = $(this).val().split(" ");
    $("#texto").html("Dia " + fecha[0] + " de " + nombresMeses[fecha[1]] + " de " + fecha[2]);
  });
});