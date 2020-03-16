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

