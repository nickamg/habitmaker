/*
function inicializarCalendario() {
  var dia1 = new Date();
  dia1.setDate(1);
  var diaSemana = dia1.getDay();
  document.getElementById("dia" + diaSemana).innerHTML = "1";
  for(var i = diaSemana + 1; i < 28; i++) {
    
    document.getElementById("dia" + i).innerHTML = i;
  }
}
  
function mesActual() {
  var fecha = new Date();
  fecha.setDate(1);
  var fechaCompleta = [fecha.getDay(), fecha.getDate(), fecha.getMonth(), fecha.getFullYear()];
  return fechaCompleta;
}
*/

var diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var fechasMesActual = [];
var fechasMesAnterior = [];
var fechasMesSiguiente = [];
var mesActual;
var mesAnterior;
var mesSiguiente;

function inicializarMesActual() {
  var fechaActual = new Date();
  for(var i = 0; i < diasMeses[fechaActual.getMonth()]; i++) {
    fechasMesActual[i] = new Date();
    fechasMesActual[i].setDate(i + 1);
  }
}

function inicializarMesAnterior() {
  var fechaActual = new Date();
  for(var i = 0; i < diasMeses[fechaActual.getMonth() - 1]; i++) {
    fechasMesAnterior[i] = new Date();
    fechasMesAnterior[i].setMonth(fechaActual.getMonth() - 1);
    fechasMesAnterior[i].setDate(i + 1);
  }
}

function inicializarMesSiguiente() {
  var fechaActual = new Date();
  for(var i = 0; i < diasMeses[fechaActual.getMonth() + 1]; i++) {
    fechasMesSiguiente[i] = new Date();
    fechasMesSiguiente[i].setMonth(fechaActual.getMonth() + 1);
    fechasMesSiguiente[i].setDate(i + 1);
  }
}

function inicializarCalendario() {
  inicializarMesActual();
  inicializarMesAnterior();
  inicializarMesSiguiente();
  var dia = 0;
  for(var i = fechasMesActual[0].getDay(); i <= (diasMeses[fechasMesActual[0].getMonth()] + (fechasMesActual[0].getDay() - 1)); i++) {
    document.getElementById("dia" + i).innerHTML = fechasMesActual[dia].getDate();
    document.getElementById("dia" + i).value = fechasMesActual[dia].getDate() + " " + fechasMesActual[dia].getMonth() + " " + fechasMesActual[dia].getFullYear();
    dia++;
  }
  dia = fechasMesAnterior[fechasMesAnterior.length - 2].getDate();
  for(var j = fechasMesActual[0].getDay() - 1; j > 0; j--) {
    document.getElementById("dia" + j).innerHTML = fechasMesAnterior[dia].getDate();
    document.getElementById("dia" + j).value = fechasMesAnterior[dia].getDate() + " " + fechasMesAnterior[dia].getMonth() + " " + fechasMesAnterior[dia].getFullYear();
    dia--;
  }
  dia = 0;
  for(var k = fechasMesActual[0].getDay() + fechasMesActual[fechasMesActual.length - 1].getDate(); k <= 42; k++) {
    document.getElementById("dia" + k).innerHTML = fechasMesSiguiente[dia].getDate();
    document.getElementById("dia" + k).value = fechasMesSiguiente[dia].getDate() + " " + fechasMesSiguiente[dia].getMonth() + " " + fechasMesSiguiente[dia].getFullYear();
    dia++;
  }
}

function clickDia(diaSeleccionado) {
  var fecha = diaSeleccionado.split(" ");
  document.getElementById("texto").innerHTML = "Dia " + fecha[0] + " de " + nombresMeses[fecha[1]] + " de " + fecha[2]; 
}