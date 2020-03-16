// Declaración de un objeto y sus propiedades y metodos (funciones)
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); // Metodo y "this" hace referencia al objeto
    }
};

// Obtener una propiedad
miAuto.marca;

// Obtener un metodo
miAuto.detalleDelAuto();

// Función constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo; 
    this.annio = annio;
}

// Crear una instancia de objeto a partir de la función constructora
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 =  new auto("Tesla", "Model X", 2018);

// Metodos de recorridos de Arrays
var articulos = [
    { nombre: "Bici", costo: 3000 }, 
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

// Metodo filter, no modifica el arreglo original, sino que crea uno nuevo y agrega los elementos del arreglo que cumplan con las condiciones que le pongamos
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Metodo map, mapea, no modifica el arreglo original, solo trae lo que nosotros le indiquemos (como traer un campo de una tabla nada más)
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});