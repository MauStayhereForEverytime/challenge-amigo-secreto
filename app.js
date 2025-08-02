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
        mostrarAmigos(); // Llama a la función para actualizar la lista en el HTML
    } else {
        if (!nombre) {
            alert('Por favor inserte un nombre.');
        } else {
            alert('El nombre ya está en la lista.');
        }
    }
}

function mostrarAmigos() {
    var lista = document.getElementById('listaAmigos');
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

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    // Generar un índice aleatorio
    var indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    // Obtener el nombre sorteado
    var amigoSorteado = listaDeAmigos[indiceAleatorio];
    // Mostrar el resultado
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
    // Funcion para sortear amigos mas compleja
    // Validar que haya al menos dos amigos en la lista
    /* if (listaDeAmigos.length < 2) {
        alert('Necesitas al menos dos amigos para hacer un sorteo.');
        return;
    }  
    var amigosSorteados = [...listaDeAmigos]; // Copiar la lista de amigos
    var resultados = {};
    amigosSorteados.forEach(amigo => {
        // Filtrar la lista de amigos para excluir al amigo actual
        var posiblesAmigos = amigosSorteados.filter(a => a !== amigo);
        // Seleccionar un amigo al azar de los posibles
        var amigoSorteado = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
        // Asignar el amigo sorteado al amigo actual
        resultados[amigo] = amigoSorteado;
        // Mostrar el resultado en el html
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '';
        for (var key in resultados) {
            var p = document.createElement('p');
            p.textContent = key + ' ha sacado a ' + resultados[key];
            resultadoDiv.appendChild(p);
        }   
    });  */
    // 
    mostrarAmigos(); // Actualizar la lista en el HTML
}
