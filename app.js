//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesSecretos = [];
lista = document.getElementById("listaAmigos")

document.getElementById("amigo").addEventListener('keydown', function(evento){
    if(evento.key === 'Enter'){
        adicionarAmigo();
    }
});

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;

    if (nome == "") {
        alert("Digite algum nome!");
    }
    if (nomesSecretos.includes(nome)) {
        alert("Nome Já pertence a lista!");
    }
    else{
    nomesSecretos.push(nome);
    
    lista.innerHTML = nomesSecretos.join('<br>');
    document.getElementById('amigo').value = ''
    }
}

function sortearAmigo (){
    const indiceAleatorio = Math.floor(Math.random() * nomesSecretos.length);
    const nomeSorteado = nomesSecretos[indiceAleatorio];
    
    lista.innerHTML = (`O nome sorteado foi ${nomeSorteado}`)
}

function reiniciar(){
    nomesSecretos = [];
    lista.innerHTML = "";
}