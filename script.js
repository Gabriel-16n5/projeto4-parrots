let qtdCard = prompt("Quantas cartas quer jogar?(de 4 a 14 APENAS)");
let verificador = 1;
let cont = 0;
const baralhoPronto = [];
const baralho = document.querySelectorAll('.card.tres, .card.um, .card.quatro, .card.dois, .card.sete, .card.cinco, .card.seis');
const baralho2 = document.querySelectorAll('.card.um');


while(verificador != 0){
    if((qtdCard < 4) || (qtdCard >14) || (qtdCard%2!=0)){
        alert('Quantidade inválida')
        qtdCard = prompt("Quantas cartas quer jogar?(de 4 a 14 APENAS)");
        verificador++;
    }else{
        verificador = 0;
    }
}


function nodetoarr(){
    for(index = 0 ; index < 14 ; index++){
        baralhoPronto[index] = baralho[index];
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function puzzle(){
    for(let i = 0 ; i < qtdCard; i++){
        //let baralhoEmbaralhado = parseInt(Math.random() * qtdCard);
        baralhoPronto[i].classList.remove('escondido');
        //cont++;
    }
}

nodetoarr();
baralhoPronto.sort(comparador);
puzzle();