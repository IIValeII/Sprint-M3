import {
    cuentaRegresiva,
    validarNumero,
    parrafo,
    ventana
  } from './funciones.js'; 

  let form3 = document.getElementById("form3");

  //se asigna un evento de escucha al elemento (formulario)
  //en este caso es el evento submit, cuando ocurre lo asigna a la función,
  // el método preventDefault evita que se envíe el formulario por defecto.
  form3.addEventListener("submit", function (event) {
    event.preventDefault()
  
  // se obtiene el valor del número ingresado por el usuario por su id 
  //se valida y se invoca la función que realiza la cuenta regresiva
    var inputNumero3 = document.getElementById('numero3');
      var numero3 = inputNumero3.value;
    
      validarNumero(numero3);
    
      if (validarNumero(numero3)) {
        
        if(numero3 > 1 && numero3 < 100){
          
            var resultado3 = cuentaRegresiva(numero3);
       
             parrafo.innerHTML = `Cuenta regresiva de ${numero3} es ${resultado3}`;
             ventana.show();
            }else {
                parrafo.innerHTML = `Ingrese número entre 1 y 100`;
                ventana.show();
        
            }
        
      }
  
  });