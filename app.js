let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    amigos.push(nomeAmigo); // Adiciona o nome ao array
    console.log(amigos); // Exibe o array atualizado no console

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Seleciona o elemento da lista de amigos e adiciona o novo amigo
    let listaAmigos = document.getElementById("listaAmigos");
    let itemLista = document.createElement("li"); // Cria um novo item de lista
    itemLista.textContent = nomeAmigo; // Define o texto do item como o nome do amigo
    listaAmigos.appendChild(itemLista); // Adiciona o item à lista de amigos

    // Exibe um resultado na lista "resultado"
    let resultado = document.getElementById("resultado");
    let itemResultado = document.createElement("li");
    itemResultado.textContent = "Amigo adicionado: " + nomeAmigo;
    resultado.appendChild(itemResultado); // Adiciona o resultado à lista de resultados
}

