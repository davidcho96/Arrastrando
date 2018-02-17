/*------------------------Variables-------------------------------------------------------------------------------------*/
let inputs_list = document.getElementById('list-inputs');
let btn_add = document.getElementById('add-li');
var arr_notas = [...document.querySelectorAll('.input-nota')];
let arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];
var promedio = 0;
/*------------------------Funciones-------------------------------------------------------------------------------------*/
btn_add.addEventListener ('click', function(){
	console.log(arr_notas);
	let html_li = '<div class="row"><label for="" class="col-form-label col-3">Nota '+(arr_notas.length + 1)+'</label><div class="form-group col-3 col p-1" ><input type="text" id="'+(arr_notas.length - 1)+'" class="input-nota form-control" value="0" placeholder="Nota"></div><label for="" class="col-form-label col-1"> = </label><div class="form-group col-3 col p-1" ><input type="text" id="'+ (arr_porcentaje.length - 1) +'" class="input-porcentaje form-control" value="0" placeholder="Ingresa un porcentaje"></div><label for="" class="col-form-label col-1"> % </label></div>';
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