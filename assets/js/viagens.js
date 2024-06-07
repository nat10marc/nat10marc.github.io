
function carregarViagens() {
    const viagens = JSON.parse(localStorage.getItem('viagens')) || [];
    return viagens;
}


function exibirViagens(viagens) {
    const viagensList = document.getElementById('viagens-list');
    viagensList.innerHTML = '';

    viagens.forEach((viagem, index) => {
        const li = document.createElement('li');
        li.className = 'viagem';
        li.innerHTML = `
            <div>
                <h3>${viagem.nome}</h3>
                <p>Descrição: ${viagem.descricao}</p>
                <p>Data de Partida: ${viagem.inicio}</p>
                <p>Data de Retorno: ${viagem.saida}</p>
                <p>Número de Tripulantes: ${viagem.tripulantes}</p>
                <p>Meta de Resíduos: ${viagem.meta} toneladas</p>
                <p>Local: ${viagem.regiao}</p>
            </div>
            <button onclick="excluirViagem(${index})">Excluir</button>
        `;
        viagensList.appendChild(li);
    });
}


function excluirViagem(index) {
    let viagens = carregarViagens();
    viagens.splice(index, 1);
    localStorage.setItem('viagens', JSON.stringify(viagens));
    exibirViagens(viagens);
}


function buscarViagens() {
    const termoBusca = document.getElementById('busca-input').value.toLowerCase();
    const viagens = carregarViagens();
    const viagensFiltradas = viagens.filter(viagem => 
        viagem.nome.toLowerCase().includes(termoBusca) ||
        viagem.descricao.toLowerCase().includes(termoBusca) ||
        viagem.regiao.toLowerCase().includes(termoBusca)
    );
    exibirViagens(viagensFiltradas);
}


document.addEventListener('DOMContentLoaded', () => {
    const viagens = carregarViagens();
    exibirViagens(viagens);
});


document.getElementById('botao-buscar').addEventListener('click', buscarViagens);
