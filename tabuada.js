function pulaLinha() {
    document.write("<br>");
    document.write("<br>")
}

function mostra(texto) {
    document.write("<big>" + texto + "</big>");
    pulaLinha();
}

var multiplicador = 1;

while(multiplicador <= 10) {
    mostra(7 * multiplicador);
    multiplicador++
}

mostra("FIMM!!!")