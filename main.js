var jogadorAtual = null;
var jogadorSelecionado = document.getElementById('jogadorSelecionado');

mudarJogador('X');

function escolherQuadrado(posic){
    console.log("Clicou!" + posic);

    var quadrado = document.getElementById(posic);

    if(quadrado.innerHTML != ' ')
        return

    quadrado.innerHTML = jogadorAtual;    

    if(jogadorAtual === 'X'){
        jogadorAtual = 'O'
    }
    else{
        jogadorAtual = 'X'
    }
    mudarJogador(jogadorAtual)
}

function mudarJogador(player){
    jogadorAtual = player;
    jogadorSelecionado.innerHTML = jogadorAtual;
}