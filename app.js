//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesSecretos = [];
let nomesSorteados = [];
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

function sortearAmigo() {
    if (nomesSecretos.length < 2) {
        alert("Adicione pelo menos 2 nomes!");
        return;
    }

    if (nomesSorteados.length === nomesSecretos.length) {
        alert("Todos os nomes já foram sorteados! Reinicie para começar de novo.");
        return;
    }

    let nomeSorteado;
    while (true) {
        let indiceAleatorio = Math.floor(Math.random() * nomesSecretos.length);
        let candidato = nomesSecretos[indiceAleatorio];
        if (!nomesSorteados.includes(candidato)) {
            nomeSorteado = candidato; 
            break; 
        }
    }

    nomesSorteados.push(nomeSorteado);
    resultado.innerHTML = `O nome sorteado da vez foi: <strong>${nomeSorteado}</strong>`;
}

function reiniciar(){
    nomesSecretos = [];
    lista.innerHTML = "";
}