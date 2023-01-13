let qtdCard = prompt("Quantas cartas quer jogar?(de 4 a 14 APENAS)");
let verificador = 1;
let cont = 0;

while(verificador != 0){
    if((qtdCard < 4) || (qtdCard >14) || (qtdCard%2!=0)){
        alert('Quantidade inválida')
        qtdCard = prompt("Quantas cartas quer jogar?(de 4 a 14 APENAS)");
        verificador++;
    }else{
        verificador = 0;
    }
}

//const baralho = [];
const baralho = document.querySelectorAll('.card');

function puzzle(){
    for(let i = 0 ; i < qtdCard; i++){
        //let baralhoEmbaralhado = parseInt(Math.random() * qtdCard);
        baralho[cont].classList.remove('escondido');
        cont++;
    }
}
puzzle();