//se crea instancia de ventana modal
export var ventana = bootstrap.Modal.getOrCreateInstance(myModal);
//se declara una variable con el texto del cuerpo de la modal
export var parrafo = document.getElementById("txt");

//funcion que suma n números
export const sumaNumeros = numero => {
  let suma = 0;

  for (let i = 1; i <= numero; i++) {
    suma += i;
  }
  return suma;
}
//funcion que determina si un número es primo
export const primo = numero => {
  if (numero <= 1) return false;

  // Comprobamos si el número es divisible por algún número menor que él mismo
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  // Si no ha sido divisible por ningún número es primo
  return true
}

//funcion que valida numero ingresado
export const validarNumero = (numero) => {

  if (isNaN(numero) || numero === "" || numero.length === 0) {
    parrafo.innerHTML = `Ingrese numero valido`;
    ventana.show();
    return false;
  } else {
    return true;
  }
}
//función que obtiene la cuenta regresiva de un número dado
export const cuentaRegresiva = (n) => {

  var cuenta = [];
  for (let i = n; i >= 1; i--) {
    cuenta.push(i);
  }
  return cuenta;
}

// función que suma sólo los números pares 
//de un rango desde 12 hasta n
export const sumaPares = (num4) => {
  let suma2 = 0;
  for (let i = 12; i <= num4; i = i + 2) {

    suma2 = suma2 + i;
  }
  return suma2;
}

//función que obtiene la tabla de multiplicar hasta 12
//de un número ingresado por el usuario
export const tablaMultiplicar = (num5) => {
  var tabla = [];
  for (let i = 1; i <= 12; i++) {
    let resultado = i * num5;
    tabla.push([
      [`${i}*${num5}=${resultado}`],
    ])
  }
  return tabla;
}