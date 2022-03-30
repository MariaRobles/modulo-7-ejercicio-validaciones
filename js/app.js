/**************** VALIDAR IBAN ****************/

 //Caso 1

/*
const pattern = /^[A-Za-z]{2}\d{22}$/;

const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

values.forEach(value =>{
  console.log("Regexp match with " + value + " ? ->", pattern.test(value));
});
*/


 //Caso 2

/*
const pattern = /^[A-Za-z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;

const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

values.forEach(value =>{
  console.log("Regexp match with " + value + " ? ->", pattern.test(value));
});
*/



// Caso 3

/*
const pattern = /^([A-Za-z]{2})(\d{2})\s?(\d{4}\s?){4}\d{4}$/;

const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

values.forEach(value =>{
  console.log( pattern.test(value));
  var result = (value.match(pattern));
  console.log ("Codigo País: " + result[1] + " Codigo Control: " + result[2])
});
*/



/**************** VALIDAR MATRÍCULAS ****************/

// Caso 1

/*
const pattern = /^\d{4}(-|\s)?[A-Za-z]{3}$/;

const values = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

values.forEach(value =>{
  console.log("Regexp match with " + value + " ? ->", pattern.test(value));
});
*/

//Caso 2

/*
const pattern = /^(\d{4})(-|\s)?([A-Za-z]{3})$/;

const values = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

values.forEach(value =>{
  console.log( pattern.test(value));
  var result = (value.match(pattern));
  console.log ("Números: " + result[1] + " Letras: " + result[3])
});
*/


/**************** VALIDAR IMAGEN SRC ****************/

// Caso 2

/*
const pattern = /^(https:\/\/)(.*\.)([a-z]{2,3})(\/.*\.)(jpg|png)$/;

var valueImagen1 = document.getElementById("imagen").src;
var valueImagen2 = document.getElementById("imagen2").src;
let srcValue = [valueImagen1, valueImagen2]

srcValue.forEach(value =>{
  console.log("Regexp match with " + value + " ? ->", pattern.test(value));
  console.log(pattern.exec(value))
});
*/

/**************** VALIDAR TARJETAS DE CRÉDITO ****************/

const pattern = /^(5[0-5]\d{2})(((-|\s)?\d{4}){3})$/;

const values = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

values.forEach(value =>{
  console.log( pattern.test(value));
  var result = (value.match(pattern));
  console.log (result[1]+result[2])
})








