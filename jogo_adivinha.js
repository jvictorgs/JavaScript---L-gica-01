function pulaLinha() {
    document.write("<br>");
    document.write("<br>")
}

function mostra(texto) {
    document.write("<big>" + texto + "</big>");
    pulaLinha();
}

var tentativas = 1;
var numeroPensado = Math.round(Math.random() * 10);

while(tentativas <= 3) {
    var chute = parseInt(prompt("Digite seu chute: "));
    if (chute == numeroPensado) {
        mostra("Você acertou, o número pensado era: " + numeroPensado);
        break;
    } else {
        mostra("Você errou !!");
    }
    tentativas++;
}

mostra("FIMM !!")


