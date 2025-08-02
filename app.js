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
            alert('Por favor inserte un nombre.');
        } else {
            alert('El nombre ya está en la lista.');
        }
    }
}

function mostrarAmigos() {
    var lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiar la lista antes de mostrar los amigos
    if (listaDeAmigos.length === 0) {
        lista.innerHTML = '<li>No hay amigos agregados.</li>';
    }
    // Recorrer el array y crear un elemento li por cada amigo usando forEach y una función anónima o Callback
    listaDeAmigos.forEach(function(amigo) {
        var li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    // Alternativamente, puedes usar una función flecha
    /* listaDeAmigos.forEach(amigo => {
    // Crear un elemento li por cada amigo
    var li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
}); */
}
