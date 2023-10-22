//identificação do participante
const nome = prompt("Qual é o seu nome?");

const pais = prompt("Qual o seu pais?");

const querJogar = confirm(`${nome} de ${pais}, "Você quer jogar um jogo?`);

//condições necessárias para jogar
const podeJogar = 
    (nome.length >1) && 
    (pais === "Brasil" || pais === "Portugal") && 
    (querJogar === true);

//Perguntas
if (podeJogar) {
    let atual = 1;
    let questao ;
    let respostaCorreta;
    let respostaUsuario;
    let premio = 0;
    let errou = false
    
//Estrutura de repetição
//VERIFICAR O LOOP INFINITO
    while (!errou && atual <= 3) {
         if (atual === 1) {
        questao = "Qual a capital do Brasil?";
        respostaCorreta = "brasília";
        respostaUsuario = prompt(questao);
         } else if (atual === 2){
        questao = "Em que ano o Brasil foi descoberto?";
        respostaCorreta = "1500";
        respostaUsuario = prompt(questao);
         } else if (atual ===3){
        questao = "Quanto é 5+5?";
        respostaCorreta = "10";
        respostaUsuario = prompt(questao);
        }
    

         if (respostaUsuario === respostaCorreta) {
        alert("Você acertou! :D ")
        premio += 100;
        atual++;

        } else {
        alert("Você errou! :( ")
        errou = true;
        }

        alert(`Prêmio acumulado: R$ ${premio}`);
    }
    if(!errou) {
        alert("Parabéns, você acertou todas as perguntas!")
    }
} else {
    alert("Não podemos jogar");
}


