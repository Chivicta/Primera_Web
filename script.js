// let nombre = 'Sebastian';
// console.log(nombre);

//Metodos de 'document'
let titulo = document.querySelector("header nav ul #inicio")
console.log(titulo);
titulo.innerHTML = "Fin";

//Condicionales
let contenidoTitulo = titulo.innerText;
console.log(titulo.innerHTML);
if (titulo.innerHTML != "Inicio") {
    titulo.innerHTML = "Casita";
} else console.log("Sin problemas.")

//Funciones
let parrafo = document.querySelector(".parrafo-2");
function cambiarParrafo(nombre, pais, accion) {
    let contenido = `Mi nombre es ${nombre} (o GarethDev para los causitas 😃). Vivo en ${pais}, y soy un apasionado por la programación y el gym 🏋️‍♀️. Me gusta ${accion} y jugar en mis ratos libres y disfruto de todo tipo de música. Cuento con bastante experiencia en el mundo de las bases de datos, programación orientada a objetos y el uso de casi todo el paquete de Office 🤓.`;
    return contenido;
}

parrafo.innerHTML = cambiarParrafo("Chivi","Canadá", "correr")