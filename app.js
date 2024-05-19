let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let camnpo = document.querySelector(tag);
camnpo.innerHTML = texto;
}
function exibirMensagemIniciar(){
    exibirTextoNaTela("h1", "Jogo do Nº Secreto");
    exibirTextoNaTela("p", `escolha um número entre 1 e ${numeroMaximo}`);
}
exibirMensagemIniciar();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroMaximo + 1);
}


function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
       if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número é menor");
       } else {
        exibirTextoNaTela("p","O número é maior");
       }
       tentativas++;
       limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIniciar();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
