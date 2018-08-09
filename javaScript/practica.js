
function hora(){
	var t = new Date();
	var horas = t.getHours();
	var minutos = t.getMinutes();
	var segundos = t.getSeconds();

	var tiempo = setInterval(function(){ hora() }, 1000);

	var r = document.getElementById("h");
	r.innerHTML = horas+":"+minutos+":"+segundos;
}

var boton = document.getElementById("fondo");
var el = document.getElementById("cuerpo");
el.bgColor = "blue";

boton.onclick = function(){
	var el = document.getElementById("cuerpo");
	el.bgColor = "dodgerblue";
	console.log("boton 1");
}

function fondo2(){
	var a = document.getElementById("cuerpo");
	a.bgColor = "tomato";
	console.log("boton 2");
}