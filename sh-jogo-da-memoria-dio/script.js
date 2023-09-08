const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;


var gameIsRunning = false;
var GameAutoStart = true;
var secondsBeforeAutoStart = 30;
var GameRestart = false;

var minutesTimeLimit = 3;
var countDownDate =minutesTimeLimit*60000; // 1000 = 1 segundo;

var numErros = 0;
var numAcertos = 0;
var score = 0;
var bonus = 0;

var seePoints = false;


// O valor 1000 representa 1000 milisegundos, que é equivalente a 1 segundo
// var timerInterval = setInterval(timerCountdown2, 1000);
var timerIntervalNewGame = setInterval(CountdownNewGame, 1000);
var timerIntervalBeforeStart = setInterval(AutoStartTimer, 1000);

// counterDeveloperSigns aumenta de acordo com a Tecla Control(Ctrl) e zera após atingir o valor 3
var counterDeveloperSigns = 0;


var textInstruction = "Para revelar uma carta clique sobre ela. \n Ao revelar 2 cartas em sequência, se forem diferentes as cartas são novamente viradas para baixo. \n Para vencer o desafio você precisa revelar as cartas antes do tempo esgotar. \n Os pontos são calculados de acordo com tempo, pontos de acertos e número de erros";

document.getElementById("button-new-game").addEventListener("click", startNewGame);
document.getElementById("button-start-game").addEventListener("click", startNow);
document.getElementById("button-how-to-play").addEventListener("click", showInfo);


window.addEventListener("keydown", function(event) {
   

    if(event.key == 'F12') {
        this.alert("Solução para desenvolvedores: Pressione a tecla Ctrl três vezes para revelar as cartas");
    }
    if(event.key == 'Control'){
        if(counterDeveloperSigns <3 ){
            counterDeveloperSigns = counterDeveloperSigns + 1;
        }
    }
    if(counterDeveloperSigns == 3){
        finish();
    }
 
  }, true);



  // StartNow - Começa o jogo manualmente

  function startNow() {
    startGame();
    startNewGame();
  }
  // AutoStart - Inicío do jogo automaticamente
setTimeout(function() {
    if(GameAutoStart == true){
        startGame();
        startNewGame();
    }
       }, secondsBeforeAutoStart*1000);

// AutoStartTimer é a função para exibir o contador no elemento time-before-start
  function AutoStartTimer() {

 
        secondsBeforeAutoStart = secondsBeforeAutoStart - 1;
    

    if (secondsBeforeAutoStart < 10) { 
        secondsBeforeAutoStart = "0" + secondsBeforeAutoStart;
    }

    // var countDownDate = countDownDate - 1000;
    if(secondsBeforeAutoStart >0 ){
        document.getElementById("time-before-start").innerHTML = secondsBeforeAutoStart;
    }
    // Output the result in an element with id="demo"
      
    // If the count down is over, write some text 
    if (secondsBeforeAutoStart <= 0) {
        clearInterval(timerIntervalBeforeStart);

    }      
  }


// Função para fazer contagem regressiva e calcular o tempo. 
function CountdownNewGame() {

    if(GameRestart == true){

      
        countDownDate = countDownDate - 1000;
        var distance = countDownDate;
    
        // Cálculo de tempo para minutos e segundos
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) { 
            seconds = "0" + seconds;
        }
    
        // var countDownDate = countDownDate - 1000;
    if (distance > 0){
        document.getElementById("timer").innerHTML = "0" + minutes + ":"+ seconds;
    }
        // Output the result in an element with id="demo"
          
        // If the count down is over, write some text 
        if (distance == 0) {
          clearInterval(timerIntervalNewGame);
          document.getElementById("timer").innerHTML = "FIM DE JOGO";
          stopGame();
          GameRestart == false;
          showScore();
        }

    }

}


//função para virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        numAcertos= numAcertos + 1;
        showScore();
        return;
    }
    else {
        numErros = numErros +1;
    }
    unflipCards();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

//funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

//função que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let randomPositionGenerate = Math.floor(Math.random() * 12);
        card.style.order = randomPositionGenerate;
    })
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});




// Função começar partida
function startGame() { 
    if (gameIsRunning == false) {
           document.getElementById("brief").style.display = 'none';
           document.getElementById("quadro-principal").style.display = 'flex';
           document.getElementById("quadro-ranking").style.display = 'block';
           gameIsRunning = true;
           console.log("Started");  
       }
}

// Função parar jogo
function stopGame() {
    if(gameIsRunning){
        gameIsRunning = false;
        cards.forEach((card) => {
            card.removeEventListener('click', flipCard);
        });
        return;
    }
};

// Função reiniciar jogo
function startNewGame() {
    resetBoard();
    numAcertos = 0;
    numErros = 0;
    score = 0;

    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
       // Oculta as cartas virando-as para baixo
        card.classList.remove('flip');


       // Embaralha as cartas com delay para evitar descobrir as cartas por acidente
        setTimeout(function() {
            card.style.order = randomPosition;
        }, 800);
        setTimeout(function() {
            card.style.order = randomPosition;
            card.addEventListener('click', flipCard);
        }, 1600);
    });
    countDownDate = minutesTimeLimit*60000;
    GameRestart = true;
    console.log("Game Restart" + GameRestart + " IS" + gameIsRunning);
    CountdownNewGame();
    // let timerRestart = setInterval(CountdownNewGame, 1000);
    
    
   
}



// Função para mostrar instruções através de uma caixa de diálogo
function showInfo() {
    alert(textInstruction);
}


// Após acabar o tempo ou após acertar os pares deve abrir a caixa de pontuação
// Função mostrar caixa de diálogo com pontuação
function showScore() {
    if(seePoints == false) {
        seePoints = true;
        bonus = (3*countDownDate/1000)-(7*numErros);
        score = (numAcertos*10) + bonus;
        console.log("Chamado");
    
        // Define que 0 será o menor valor para score
        if(score <= 0){
            score = 0;
        }
    
        if(countDownDate == 0 || numAcertos == 6 ){
            gameIsRunning = false;
    
                let text = "O tempo se esgotou!\n Pontos "+ score + " \n Deseja iniciar um novo jogo?";
                if (confirm(text) == true) {
                    startNewGame();
                } else {
                    console.log(score);
                    stopGame();
                }
         
        }
    }
   

  }


  // Para completar o desafio no desenvolvimento 
function finish() {

    if(gameIsRunning){
        cards.forEach((card) => {
            card.classList.remove('flip');
            card.classList.add('flip');
        })
        setTimeout(function() {
            numAcertos = 6;
            stopGame();
            showScore();
        }, 1600);
    }
}
