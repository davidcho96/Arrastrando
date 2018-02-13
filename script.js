 var arr_notas = [...document.querySelectorAll('.input-nota')];
 var arr_porc = [...document.querySelectorAll('.input-porcentaje')];
 var formulario = document.getElementById('form-prom');
 var suma_notas = 0;
 let suma_porc = 0;

  arr_notas.forEach(function(elem, index){
	elem.addEventListener('blur', function(){
	 	if (this.value == ''){
	 		this.value = 0;
	 	}
	 	promediar(elem.value);
	 	console.log(index);
	 });
 });

 function promediar(elem){
 	suma_notas += parseInt(elem);
 	console.log(suma_notas);
 }

 arr_porc.forEach(function(elem, index){
 	elem.addEventListener('blur', function(){
 		if(this.value == ''){
 			this.value == 0;
 		}
 		porcentajes(elem.value);
 	});
 });

 function porcentajes(elem){
 	suma_porc += parseInt(elem);
 	if (suma_porc > 100) {
 		elem.value = 0 ;
 	}
 	console.log(suma_porc);
 }


// promediar();
