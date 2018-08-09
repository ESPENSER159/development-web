
function funcion(){
	var d = new Date();
	var hora = d.getHours();
	var minutos = d.getMinutes();
	var segundos = d.getSeconds();

	document.getElementById("js").innerHTML = hora +":"+ minutos +":"+ segundos;
}
setInterval(funcion, 1000)