// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];




function limpiarCampo(elemntoID){
    document.querySelector(elemntoID).value = "";
}

function agregarAmigo(){
    let conta;
    let amiguito = document.getElementById("amigo").value;
    if(amiguito === ""){
        alert("Por favor, ingrese un nombre");
    }else{
        amigos.push(amiguito);
        console.log(amigos);
    }
    limpiarCampo("#amigo");
    actualizarLista(amigos);
    return;

}

function actualizarLista(arrayAmigos){
    let lista = document.getElementById("listaAmigos");
    let nuevoLi = "";
    let largo = arrayAmigos.length - 1;
    for (let i = largo; i < arrayAmigos.length; i++) {
        nuevoLi = `<li>${arrayAmigos[i]}</li>`;
    }
    lista.innerHTML += nuevoLi;
    return;
}

function resetear(){
    document.getElementById("listaAmigos").innerHTML = "";

}

function sortearAmigo(){
    let numGanador = 0;
    let ganador = "";
    let largo = amigos.length;
    console.log(largo);
    if(amigos.length == 0){
        alert("Por favor, ingrese a alguien para sortear");
    }else{
        resetear();
        numGanador = Math.floor(Math.random()*largo);
        console.log(numGanador);
                
        ganador = amigos[numGanador];

        document.getElementById("resultado").innerHTML = `El ganador es: ${ganador}`;


    }
    amigos = [];

    return;
}
