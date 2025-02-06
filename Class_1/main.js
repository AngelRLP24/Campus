console.log("Hello word");
// Tipo de dato primitibo
let name = "Ivan";
let age = 23;
let eresMayordeEdad = true;
let saldo;
let cuenta = null;
let id = Symbol("id");
let numeroGrande = 46464644646464789987654321;
// Tipo de dato primitibo con typeof
console.log(typeof name);
console.log(typeof age);
console.log(typeof eresMayordeEdad);
console.log(typeof saldo);
console.log(typeof cuenta);
console.log(typeof id);
console.log(typeof numeroGrande);
// Tipo de dato primitibo con una salida normal
console.log(name);
console.log(age);
console.log(eresMayordeEdad);
console.log(saldo);
console.log(cuenta);
console.log(id);
console.log(numeroGrande);
// Tipo de dato objeto
let person = {
    name:"Angel",
    age:18,
    genero:"Masculino"
}

console.log(person.age);
// Array
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[1]);
// fuction
let suma = function suma(a, b) {
    return a + b;
}

console.log(suma(2,3));
// Fecha
let fecha = new Date();

console.log(fecha);