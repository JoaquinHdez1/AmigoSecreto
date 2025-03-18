// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración del array de amigos
let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() === "") {
        alert("Por favor, ingresa un nombre.");
    } else if (!isNaN(nombreAmigo)) {
        alert("Por favor, ingresa un nombre válido (no numérico).");
    } else {
        // Reiniciar el juego si ya se realizó el sorteo
        if (amigos.length > 0 && document.getElementById("resultado").innerHTML !== "") {
            amigos = []; // Limpiar el array de amigos
            document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista de nombres
            document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado
            document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista
        }

        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        document.getElementById("amigo").value = "";
    }
}
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

  // Recorrer el array de amigos y agregar cada nombre como un elemento de lista
  amigos.forEach(amigo => {
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo);
  });
}
function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Necesitas al menos 2 amigos para el sorteo");
            return;
        }
    
        const listaAmigos = document.getElementById("listaAmigos");
        const resultado = document.getElementById("resultado");
    
        // Ocultar la lista de amigos
        listaAmigos.style.display = "none";
    
        // Elegir un amigo aleatorio
        const amigoIndex = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[amigoIndex];
    
        // Mostrar el resultado
        resultado.innerHTML = ""; // Limpiar resultados anteriores
        const nuevoResultado = document.createElement("li");
        nuevoResultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
        resultado.appendChild(nuevoResultado);

        listaAmigos.classList.add("oculto");
    }

