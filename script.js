let qtdCard = prompt("Quantas cartas quer jogar?(de 4 a 14 APENAS)");
let verificador = 1;
let cont = 0;
const baralhoPronto = [];
const baralho = document.querySelectorAll('.card.tres, .card.um, .card.quatro, .card.dois, .card.sete, .card.cinco, .card.seis');
const baralho1 = document.querySelectorAll('.card.um');
const baralho2 = document.querySelectorAll('.card.dois');
const baralhoo = baralho1 + baralho2;
let qualcarta;
let verifi = 0;
let ultimaCarta1 = [];
let ultimaCarta2 = [];
let armaze = 0;
let oi = 0;

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

function viraCard(recebe, recebeClass){
    if(qualcarta === recebeClass){
        verifi = 0;
        alert('MermaCarta')
        //qualcarta = recebeClass;
        const cartaViradaGif = recebe.querySelector('.escondido');
        console.log(cartaViradaGif);
        cartaViradaGif.classList.remove('escondido');
        console.log(recebe);
        const cartaVirada = recebe.querySelector('.atras');
        console.log(cartaVirada);
        cartaVirada.classList.add('escondido');
        oi++;
        armaze++;
    } else{
        qualcarta = recebeClass;
        ultimaCarta1[armaze] = recebe.querySelector('.escondido');
        ultimaCarta2[armaze] = recebe.querySelector('.atras');
        const cartaViradaGif = recebe.querySelector('.escondido');
        console.log(cartaViradaGif);
        cartaViradaGif.classList.remove('escondido');
        console.log(recebe);
        const cartaVirada = recebe.querySelector('.atras');
        console.log(cartaVirada);
        cartaVirada.classList.add('escondido');
        verifi++;
        armaze++;
        oi++;
    }
    if(verifi == 2){
        setTimeout(Espera, 1000);
    }
}

function erou(){
    alert('Errooou');
}


function Espera(){   
    verifi = 0;
    oi = oi - 2;
    ultimaCarta1[oi].classList.add('escondido');
    ultimaCarta2[oi].classList.remove('escondido');
    oi++;
    ultimaCarta1[oi].classList.add('escondido');
    ultimaCarta2[oi].classList.remove('escondido');
    oi++;
    qualcarta = '';
}



nodetoarr();
baralhoPronto.sort(comparador);
puzzle();