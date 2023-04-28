import {
    sumaPares,
    validarNumero,
    parrafo,
    ventana
  } from './funciones.js'; 

  let form4 = document.getElementById("form4");

  //se asigna un evento de escucha al elemento (formulario)
  //en este caso es el evento submit, cuando ocurre lo asigna a la función,
  // el método preventDefault evita que se envíe el formulario por defecto.
  form4.addEventListener("submit", function (event) {
    event.preventDefault()
  
  // se obtiene el valor del número ingresado por el usuario por su id 
  //se valida y se invoca la función que realiza la suma de números pares
    var inputNumero4 = document.getElementById('numero4');
      var numero4 = inputNumero4.value;
    
      validarNumero(numero4);
    
      if (validarNumero(numero4)) {
        
        if(numero4 > 10 && numero4 < 1000){

            var resultado4 = sumaPares(numero4);
        
             parrafo.innerHTML = `La suma de numeros pares hasta ${numero4} es ${resultado4}`;
             ventana.show();
            }else {
                parrafo.innerHTML = `Ingrese número entre 11 y 999`;
                ventana.show();
        
            }
        
      }
  
  });