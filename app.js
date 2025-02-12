// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreAmigo = "";

function guardarAmigo(){
    const nombreAmigo = document.getElementById("amigo").value;
        if (nombreAmigo == ""){
            alert("Por favor, inserta un nombre valido");
        }
        else {
            listaAmigos.push(nombreAmigo);
            document.getElementById("amigo").value = "";
            actualizarLista();
        }

}

function listaDeAmigos(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    })

    }
