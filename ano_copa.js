function pulaLinha() {
    document.write("<br>");
    document.write("<br>")
}

function mostra(texto) {
    document.write("<big>" + texto + "</big>");
    pulaLinha();
}

var limite = parseInt(prompt("Entre com uma data limite: "))
var anoCopa = 1930;

while(anoCopa <= limite) {
    mostra("Teve copa em: " + anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("FIMM!!!");   