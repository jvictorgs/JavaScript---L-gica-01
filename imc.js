function pulaLinha() {
    document.write("<br>");
    document.write("<br>")
}

function mostra(texto) {
    document.write("<big>" + texto + "</big>");
    pulaLinha();
}

function imc(peso, altura) {
    return peso / (altura * altura);
}

var nome = prompt("Informe o seu nome: ");
var pesoInformado = prompt(nome + ", informe o seu peso: ");
var alturaInformada = prompt(nome + ", informe a sua altura: ");

var imcInformado = imc(pesoInformado, alturaInformada);

mostra(nome + ", o seu IMC é: " + Math.round(imcInformado));

if (imcInformado < 18.5) {
    mostra("Você está abaixo do recomendado.")
}

if (imcInformado > 35) {
    mostra("Você está acima do recomendado.")
}

if (imcInformado >=18.5 && imcInformado <=35) {
    mostra("Seu IMC está excelente!")
}