import {
  tablaMultiplicar,
  validarNumero,
  parrafo,
  ventana
} from './funciones.js';

let form5 = document.getElementById("form5");

//se asigna un evento de escucha al elemento (formulario)
//en este caso es el evento submit, cuando ocurre lo asigna a la función,
// el método preventDefault evita que se envíe el formulario por defecto.
form5.addEventListener("submit", function (event) {
  event.preventDefault()

  //se obtiene el valor del número ingresado por el usuario por su id 
  //se valida y se invoca la función que realiza la tabla de multiplicar
 // se envían los datas a una datatable anidada en una modal
  var inputNumero5 = document.getElementById('numero5');
  var numero5 = inputNumero5.value;

  validarNumero(numero5);

  if (validarNumero(numero5)) {

    if (numero5 > 0 && numero5 < 100) {

      $(function () {
        $('#myTabla').DataTable({
          paging: false,
          searching: false,
          data: tablaMultiplicar(numero5),
          columns: [
            {title: 'Tabla'}
             
          ],
          "bDestroy": true
        });
        clearInterval

      });
      parrafo.innerHTML = `La tabla de multiplicar del número ${numero5} es`;
      ventana.show();
    } else {
      parrafo.innerHTML = `Ingrese número entre 1 y 99`;
      ventana.show();

    }
  }

});