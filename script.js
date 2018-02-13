
let ul = document.getElementById('list-inputs');

let btn = document.getElementById('add-li');

let arr_notas = [...document.querySelectorAll('.input-nota')];

let arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];

btn.addEventListener ('click', function(){

	let html = '<li> <input type="text" id="input-nota'+(arr_notas.length + 1)+'" class="input-nota" value="0" placeholder="Ingresa una nota"> <input type="text" id="input-porcentaje'+(arr_porcentaje.length + 1)+'" class="input-porcentaje" value="0" placeholder="Ingresa un porcentaje"> </li>';

	ul.insertAdjacentHTML('beforeend', html);

	arr_notas = [...document.querySelectorAll('.input-nota')];
	
	arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];

	console.log(arr_notas);
	console.log(arr_porcentaje);
});