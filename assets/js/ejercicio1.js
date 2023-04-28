import {
    sumaNumeros,
    validarNumero,
    parrafo,
    ventana
  } from './funciones.js';

  //obtenemos el elemento form del DOM por su "id" y lo 
//asignamos a la variable form
let form = document.getElementById("form");

//se asigna un evento de escucha al elemento (formulario)
//en este caso es el evento submit, cuando ocurre lo asigna a la función,
// el método preventDefault evita que se envíe el formulario por defecto.
form.addEventListener("submit", function (event) {
  event.preventDefault()

  // se obtiene el valor del número ingresado por el usuario por su id 
  //se valida y se invoca la función que realiza la suma
  var inputNumero1 = document.getElementById('numero1');
  var numero1 = inputNumero1.value;

  validarNumero(numero1);

  if (validarNumero(numero1)) {

    if(numero1 > 1 && numero1 < 100){
    var resultado = sumaNumeros(numero1);

    parrafo.innerHTML = `La sumatoria de 1 hasta ${numero1} es ${resultado}`;
    ventana.show();
    }else {
        parrafo.innerHTML = `Ingrese número entre 1 y 100`;
        ventana.show();

    }

}

});