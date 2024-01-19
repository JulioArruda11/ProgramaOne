alert ("Boas vindas ao jogo do número secreto");
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entrei 1 e ${numeroMaximo}`);
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas = tentativas + 1;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

