// Ejemplo 1 (For)
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){ 
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// Ejemplo 2 (For..of)
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// Ejemplo 3 (While)
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}