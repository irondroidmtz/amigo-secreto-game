// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
        if (nombre === ''){
            alert('Por favor, inserta un nombre valido');
            return;
        }
        else if(listaAmigos.includes(nombre)){
            alert('El nombre ya fue registrado');
            return;
        }else {
            listaAmigos.push(nombre);
            document.getElementById('amigo').value = '';
            listaDeAmigos();
        }
        

}

function listaDeAmigos(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });

    }

function sortearAmigos(){
    let numeroAleatorio = parseInt(Math.floor(Math.random() * listaAmigos.length));
    console.log("numeroAle:", numeroAleatorio);
    console.log("Resultado: ",listaAmigos[numeroAleatorio]);
    document.getElementById('resultado').innerHTML = listaAmigos[numeroAleatorio];

}
