// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
function agregarAmigo() {
    // Obtener el valor del input por su id
    var input = document.getElementById('amigo');
    var nombre = input.value.trim();

    // Validar que el nombre no esté vacío y que no sea repetido
    if (nombre && !listaDeAmigos.includes(nombre)) {
        listaDeAmigos.push(nombre);
        input.value = ''; // Limpiar el input
    } else {
        if (!nombre) {
            alert('Estás enviando un dato vacío.');
        } else {
            alert('El nombre ya está en la lista.');
        }
    }
}