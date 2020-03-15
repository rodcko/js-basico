var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

// Agregar nuevo elemento al array al final
var masFrutas = frutas.push("Uvas");

// Eliminar un elemento del array al final
var ultimo = frutas.pop("Uvas");

// Agregar nuevo elemento al array al principio
var nuevaLongitud = frutas.unshift("Uvas");

// Eliminar un elemento del array al principio
var borrarFruta = frutas.shift("Uvas");

// Buscar index de algun elemento del array
var posicion = frutas.indexOf("Cereza");