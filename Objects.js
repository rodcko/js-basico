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