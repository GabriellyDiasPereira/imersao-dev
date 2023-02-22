var xander = {
    nome: 'Xander',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
};

var gaby = {
    nome: 'Gaby',
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos:0
};

var major = {
    nome: 'Major',
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos:0
};

var noturno = {
    nome: 'Noturno',
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos:0
};

var elementoTabela = document.getElementById('tabelaJogadores');

exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${xander.nome}</td>
            <td>${xander.vitoria}</td>
            <td>${xander.empate}</td>
            <td>${xander.derrota}</td>
            <td>${xander.pontos}</td>
            <td><button onClick="adicionarVitoria(xander)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(xander)">Empate</button></td>
            <td><button onClick="adicionarDerrota(xander)">Derrota</button></td>
        </tr>
    `;
}


function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
}
function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    exibirNaTela();
}
function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirNaTela();
}