function sorteia() {
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {
    var segredos = [];

    var numero = 1;
    while(numero <= quantidade) {
        var numeroAleatorio = sorteia();

        if(numeroAleatorio !== 0) {
            var achou = false;

            for(var posicao = 0; posicao < segredos.length; posicao++) {
                if(segredos[posicao == numeroAleatorio]) {
                achou = true;
                break;
            };
        }

            if(achou == false) {
                segredos.push(sorteia(numeroAleatorio));
                numero++;
        }
        }
    }

    return segredos;
}

var segredos = sorteiaNumeros(3);

var input = document.querySelector("input");
input.focus();

function verifica() {
    var achou = false;

    for(var posicao = 0; posicao < segredos.length; posicao++) {
        if(input.value == segredos[posicao]) {
            alert("Você acertouu !!");
            achou = true;
            break;
        }
    }
    if(achou == false) {
        alert("Você errouu !!")
    }

    input.value = "";
    input.focus();
}

var button = document.querySelector("button");
button.onclick = verifica;

