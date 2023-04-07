function pulaLinha() {
    document.write("<br>");
    document.write("<br>")
}

function mostra(texto) {
    document.write(texto);
    pulaLinha();
}

var vitorias = parseInt(prompt("Insira o número de vitórias do seu time."));
var empates = parseInt(prompt("Insira o número de empates do seu time."));
var pontos = vitorias * 3 + empates;
mostra("O total de pontos do seu time é: " + pontos);

if (pontos > 28) {
    mostra("Seu time está melhor do que no ano passado.")
}

if (pontos < 28) {
    mostra("Seu time está pior do que no ano passado.")
}

if (pontos == 28) {
    mostra("Seu time está igual ao ano passado.")
}

mostra("Fim!!")