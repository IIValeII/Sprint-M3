import {
  Persona,
  validaTexto,
  limpiar,
  activarCargas,
  desactivarCargas,
  activarFecha,
  desactivarFecha,
  currencyFormatter
} from "./funciones.js"

desactivarCargas();
desactivarFecha();

//se deactivan checkbok de cargas familiares y
//trabajador activo
document.getElementById('cargas').checked = false;
document.getElementById('activo').checked = false;
//función que activa y desactiva los elementos de
//cargas familiares y trabajador activo cuando 
//ocurre el evento click en el checkbok
let cargas = document.getElementById('cargas');
let activo = document.getElementById('activo');

cargas.addEventListener('click', function () {

  if (cargas.checked) {
    activarCargas();

  } else {
    desactivarCargas();
  }
});

activo.addEventListener('click', function () {

  if (activo.checked) {
    activarFecha();

  } else {
    desactivarFecha();
  }
});

//se crea una variable tipo arreglo 
var datos = [];

//obtenemos el elemento form del DOM por su "id" y lo 
//asignamos a la variable form
let form = document.getElementById("form");

//se asigna un evento de escucha al elemento (formulario)
//en este caso es el evento submit, cuando ocurre lo asigna a la funcion,
// el metodo preventDefault evita que se envie el formulario por defecto.
form.addEventListener("submit", function (event) {
  event.preventDefault()
  //se definen la variables con los datos capturados del formulario
  let nombre = document.getElementById('input_nombre').value,
    apellido = document.getElementById('input_apellido').value,
    fechaNac = document.getElementById('input_nacimiento').value,
    activo = document.getElementById('activo').checked,
    fechaIngreso = document.getElementById('input_ingreso').value,
    sueldoActual = parseInt(document.getElementById('inputSueldoActual').value),
    sueldoAnterior = document.getElementById('inputSueldoAnterior').value,
    cargaFamiliar = document.getElementById('cargas').checked,
    numeroCargas = parseInt(document.getElementById('inputCargas').value);

  //analizar si el checkbok es seleccionado
  cargaFamiliar = false;
  if (cargas.checked) {
    cargaFamiliar = true;
  } else {
    numeroCargas = 0;
  }

  //validación de textos ingresados
  if (validaTexto(nombre) && validaTexto(apellido)) {
    //se crea una instancia del objeto Afiliado y se le agregan los datos capturados
    //por el formulario

    let nuevaPersona = new Persona(nombre, apellido, fechaNac, activo, fechaIngreso, sueldoActual, sueldoAnterior, cargaFamiliar, numeroCargas);

    //se agrega el nuevo afiliado a un arreglo con nuevos datos como el valor
    //de la carga familiar y el sueldo final

    datos.push({
      nombre: nuevaPersona.nombre,
      apellido: nuevaPersona.apellido,
      activo: nuevaPersona.activo,
      sueldoActual: currencyFormatter({
        currency: "CLP",
        value: nuevaPersona.sueldoActual
      }),
      valorCarga: currencyFormatter({
        currency: "CLP",
        value: nuevaPersona.asignacionFamiliar()
      }),
      sueldoFinal: currencyFormatter({
        currency: "CLP",
        value: (nuevaPersona.sueldoActual + nuevaPersona.asignacionFamiliar() * nuevaPersona.numCargas)
      })
    });
    //se limpia el formulario
    limpiar();
    desactivarCargas();
    desactivarFecha();


    //se muestran los datos en una tabla
    $('#myTabla').DataTable({
      paging: false,
      searching: false,
      data: datos,
      "columns": [{
          title: "Nombre",
          "data": "nombre",

        },
        {
          title: "Apellido",
          "data": "apellido"
        },

        {
          title: "Activo",
          "data": "activo"
        },

        {
          title: "Sueldo",
          "data": "sueldoActual",
        },
        {
          title: "Valor C.Fam.",
          "data": "valorCarga",
        },
        {
          title: "Sueldo Final",
          "data": "sueldoFinal",
        },
        {
          title: "Accion",
          "defaultContent": "<button>Ficha</button>",
        },

      ],
      "bDestroy": true
    });

  }
});