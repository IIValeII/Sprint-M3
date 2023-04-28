import {
    primo,
    validarNumero,
    parrafo,
    ventana
  } from './funciones.js'; 

  let form2 = document.getElementById("form2");

  //se asigna un evento de escucha al elemento (formulario)
  //en este caso es el evento submit, cuando ocurre lo asigna a la función,
  // el método preventDefault evita que se envíe el formulario por defecto.
  form2.addEventListener("submit", function (event) {
    event.preventDefault()
  
  // se obtiene el valor del número ingresado por el usuario por su id 
  //se valida y se invoca la función que verifica si el número es primo
    var inputNumero2 = document.getElementById('numero2');
      var numero2 = inputNumero2.value;
    
      validarNumero(numero2);
    
      if (validarNumero(numero2)) {
        
        var mensaje = `, no es primo`;
        var resultadoPrimo = primo(numero2);
    
        if (resultadoPrimo) {
          mensaje = `, es primo`;
        }
    
        parrafo.innerHTML = `El número ingresado ${numero2} ${mensaje}`;
        ventana.show();
    
      }
  
  });