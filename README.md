# challenge-amigo-secreto
Reto de Practica de lógica de programación by Alura / Alura Programming Logic Practice Challenge
Este proyecto cumple con la funcion de repasar los temas vistos en en el curso de logica de programacion de Alura Latam

### 1. agregarAmigo()
Permite agregar un nombre de amigo a la lista.  
- Obtiene el valor del input desde el HTML usando `document.getElementById`.
- Valida que el nombre no esté vacío y que no sea repetido.
- Si es válido, lo agrega al arreglo `listaDeAmigos` y actualiza la lista en pantalla.
- Si no es válido, muestra un mensaje de alerta.

### 2. mostrarAmigos()
Muestra la lista actual de amigos en el HTML.  
- Limpia el contenido previo del elemento `<ul>`.
- Si la lista está vacía, muestra un mensaje indicando que no hay amigos agregados.
- Si hay amigos, recorre el arreglo y crea un `<li>` por cada nombre usando `forEach`.

### 3. sortearAmigo()
Realiza el sorteo de un amigo al azar.  
- Valida que haya al menos un amigo en la lista.
- Genera un índice aleatorio usando `Math.random()` y `Math.floor()`.
- Obtiene el nombre sorteado y lo muestra en el HTML.

## Temas de lógica aplicados

- Manipulación de arreglos (`push`, `includes`, `forEach`)
- Validación de datos
- Interacción con el DOM (`getElementById`, `innerHTML`, `createElement`)
- Uso de funciones anónimas y flecha
- Generación de números aleatorios

## Estructura del proyecto

- `index.html`: Estructura principal y elementos de entrada/salida.
- `app.js`: Lógica de la aplicación y funciones JavaScript.
- `style.css`: Estilos visuales.

---

Este proyecto es ideal para practicar lógica básica, manipulación de arreglos y DOM en JavaScript.