
let ul = document.getElementById('list-inputs');

let btn = document.getElementById('add-li');

let arr_notas = [...document.querySelectorAll('.input-nota')];

let arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];

let promedio = 0;

btn.addEventListener ('click', function(){

	let html = '<li> <input type="text" id="input-nota'+(arr_notas.length + 1)+'" class="input-nota" value="0" placeholder="Ingresa una nota"> <input type="text" id="input-porcentaje'+(arr_porcentaje.length + 1)+'" class="input-porcentaje" value="0" placeholder="Ingresa un porcentaje"> </li>';

	ul.insertAdjacentHTML('beforeend', html);

	arr_notas = [...document.querySelectorAll('.input-nota')];
	
	arr_porcentaje = [...document.querySelectorAll('.input-porcentaje')];

	console.log(arr_notas.textContent);

	console.log(arr_porcentaje);
});

arr_notas.forEach(function(elem, index){
	elem.addEventListener ('blur', function(){
		console.log('hola');
		obt_promedio();
	});
});

function obt_promedio() {
	for(let i=0;i<=arr_notas.length;i++){
		for (let j=0;j<=arr_porcentaje.length;j++){
			if (i == j){
				promedio = parseInt(arr_notas[i])*parseInt(arr_porcentaje[j]);
				console.log(promedio);
			}
		}
	}
}