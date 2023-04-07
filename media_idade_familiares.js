function pulaLinha() {
    document.write("<br>");
    document.write("<br>")
}

function mostra(texto) {
    document.write("<big>" + texto + "</big>");
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));
var numero = 1;
var totalIdades = 0;

while(numero <= totalFamiliares) {
    var idade = parseInt(prompt("Informe a idade do familiar: "));
    totalIdades = totalIdades + idade;
    numero++
}

var mediaIdades = totalIdades / totalFamiliares;
mostra("A média das idades dos familiares é: " + Math.round(mediaIdades));

mostra("FIMM!!!")
