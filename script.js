let html = '<li> <input type="text" id="input-nota" class="input-nota" value="0" placeholder="Ingresa una nota"> <input type="text" id="input-porcentaje" class="input-porcentaje" value="0" placeholder="Ingresa un porcentaje"> </li>';

let ul = document.getElementById('list-inputs');

let btn = document.getElementById('add-li');

btn.addEventListener ('click', function(){
	ul.insertAdjacentHTML('beforeend', html);
});