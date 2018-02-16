/*------------------------Variables-------------------------------------------------------------------------------------*/
let inputs_list = document.getElementById('list-inputs');
let btn_add = document.getElementById('add-li');
var arr_notas = [...document.querySelectorAll('.input-nota')];
let arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];
var promedio = 0;
/*------------------------Funciones-------------------------------------------------------------------------------------*/
btn_add.addEventListener ('click', function(){
	let html_li = '<li> <input type="text" id="input-nota'+(arr_notas.length + 1)+'" class="input-nota" value="0" placeholder="Ingresa una nota"> <input type="text" id="input-porcentaje'+(arr_porcentaje.length + 1)+'" class="input-porcentaje" value="0" placeholder="Ingresa un porcentaje"> </li>';
	
	inputs_list.insertAdjacentHTML('beforeend', html_li);
	
	arr_notas = [...document.querySelectorAll('.input-nota')];
	arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];

	calcular();
});
/*----------------------------------------------------------------------------------------------------------------------*/
calcular();
/*----------------------------------------------------------------------------------------------------------------------*/
function calcular(){
	arr_notas.forEach(function(element1, index){
		events(element1);
	});
	arr_porcentaje.forEach(function(element2, index2){
		events(element2);
	});
}
/*----------------------------------------------------------------------------------------------------------------------*/
function events(elementos){
	elementos.addEventListener ('blur', function(){
		if(elementos.value == '' || isNaN(elementos.value) ){
			elementos.value = 0;
		}else{
			 	obtenerPromedio();
		}
	});

	elementos.addEventListener ('focus', function(){
		if(elementos.value == 0){
			elementos.value = "";
		}
	});
	
	elementos.addEventListener ('keyup', function(){
		if(isNaN(elementos.value) || elementos.value == ""){
			console.log('Ingresa valores correctos');
		}else{
			obtenerPromedio();
		}
	});
}

/*----------------------------------------------------------------------------------------------------------------------*/
function obtenerPromedio(){
	promedio = 0;
	var porcentaje_total = 0;
		for (var i = 0; i<=arr_porcentaje.length - 1 ; i++) {
			porcentaje_total += parseInt(arr_porcentaje[i].value);
		}
			if(porcentaje_total !== 0){
				arr_notas.forEach(function(w, ind){
					promedio += parseInt(arr_notas[ind].value) * parseInt(arr_porcentaje[ind].value) / porcentaje_total;
				});
					document.getElementById('pro').textContent = promedio.toFixed(1);
			}
}