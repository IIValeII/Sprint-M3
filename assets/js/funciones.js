//se crea instancias de ventana modal
export var ventana = bootstrap.Modal.getOrCreateInstance(myModal);
// export var ventanaTabla = bootstrap.Modal.getOrCreateInstance(myModal2);
//se declara variables con el texto del cuerpo de la modal
export var parrafo = document.getElementById("txt");
// export var parrafoTabla = document.getElementById("txt2");

//funcion que formatea los valores numericos
export function currencyFormatter({ currency, value}) {
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      minimumFractionDigits: 0,
      currency
    }) 
    return formatter.format(value)
}
//se crea la función constructora del objeto Afiliado
export function Persona( nombre, apellido, fechaNac, activo, fechaIngreso, sueldoActual, sueldoSemAnt, cargaFam, numCargas ){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.activo = activo;
    this.fechaIngreso = fechaIngreso;
    this.sueldoActual = sueldoActual;
    this.sueldoSemAnt = sueldoSemAnt;
    this.cargaFam = cargaFam;
    this.numCargas = numCargas;

  //método que calcula el valos de la asignación familiar, 
  //dependiendo del sueldo del semestre anterior
    this.asignacionFamiliar = function(){
        let valorCarga=0;
        if( this.cargaFam ){
            if(sueldoSemAnt <= 429899 ){
                valorCarga = 16828;
                return  valorCarga;
            }else if( sueldoSemAnt > 429899 && sueldoSemAnt <= 627913 ){
                valorCarga = 10327;
                return  valorCarga;
            }else if( sueldoSemAnt > 627913 && sueldoSemAnt <= 979330 ){
                valorCarga = 3264;
                return  valorCarga;
            }
        }
        return valorCarga;
    }
    
}

//función que valida input tipo texto
export const validaTexto = (texto) => {
if( texto == null || texto.length == 0 || /^\s+$/.test(texto) ) { 
    parrafo.innerHTML = "Ingrese datos válidos";
    ventana.show();
    return false;
    }else {
    return true;
    }
}

//función que valida input tipo numérico
export const validaNumero = (numero) => {
if( numero == null || numero.length == 0 || /^\s+$/.test(numero) ) { return false;}
}
//funcion que limpia el formulario
export const limpiar = () => {
   document.getElementById('input_nombre').value=""; 
   document.getElementById('input_apellido').value="";
   document.getElementById('input_nacimiento').value="";
   document.getElementById('activo').checked=false;
   document.getElementById('input_ingreso').value=""; 
   document.getElementById('inputSueldoActual').value="";
   document.getElementById('inputSueldoAnterior').value="";
   document.getElementById('cargas').checked=false;
   document.getElementById('inputCargas').value="";
}

//se desactivan los elementos de cantidad cargas familiares
 export const desactivarCargas = () => {
   document.getElementById("inputCargas").style.display = "none";
 }

 //función que habilita los input de ingreso para el trabajador activo
 export const activarCargas = () => {
    document.getElementById("inputCargas").style.display = "block";
  }
 
//se desactivan los elementos de cantidad cargas familiares
export const desactivarFecha = () => {
    document.getElementById("input_ingreso").style.display = "none";
    document.getElementById("labelIngreso").style.display = "none";
  }
 
  //función que habilita los input de ingreso para el trabajador activo
export const activarFecha = () => {
     document.getElementById("input_ingreso").style.display = "block";
     document.getElementById("labelIngreso").style.display = "block";  
  }   