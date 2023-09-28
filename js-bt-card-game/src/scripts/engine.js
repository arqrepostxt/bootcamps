const state = {
  score: {
    playerScore:0,
    computerScore:0,
    scoreBox: document.getElementById("score-points")
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button:document.getElementById("next-duel"),
  },
  playerSides : {
    player1: "player-cards",
    player1Ref: document.querySelector("#player-cards"),
    computer: "computer-cards",
    computerRef: document.querySelector("#computer-cards"),
  }
};


const pathImages = "./assets/icons/";

const cardData = [
  {
    id: 0,
    name: "Dark Magician",
    type: "Paper",
    img: `${pathImages}magician.png`,
    WinOf: [1],
    LoseOf: [2],
  },
  {
    id: 1,
    name: "Exodia",
    type: "Rock",
    img: `${pathImages}exodia.png`,
    WinOf: [2],
    LoseOf: [0],
  },
  {
    id: 2,
    name: "Blue Eyes White Dragon",
    type: "Scisor",
    img: `${pathImages}dragon.png`,
    WinOf: [0],
    LoseOf: [1],
  },
]

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./assets/icons/card-back.png");
  cardImage.setAttribute("data-id", IdCard);
  cardImage.classList.add("card");

  if(fieldSide === state.playerSides.player1) {
    cardImage.addEventListener("click", ()=>{
      console.log("Clicked");
      setCardsField(cardImage.getAttribute("data-id"));
    });
  }

  cardImage.addEventListener("mouseover", ()=>{
    drawSelectCard(IdCard);
  });

  return cardImage;
  
}

async function setCardsField(cardId) {
  await removeAllCardsImages();

  let computerCardId = await getRandomCardId();

  state.fieldCards.player.style.display = "block";
  state.fieldCards.computer.style.display = "block";

  state.fieldCards.player.src = cardData[cardId].img;
  state.fieldCards.computer.src = cardData[computerCardId].img;

  let duelResults = await checkDuelResults(cardId, computerCardId);

  await updateScore();
  await drawButton(duelResults);
}

async function drawButton(text){
  state.actions.button.innerText = text.toUpperCase();
  state.actions.button.style.display = "block";
}

async function updateScore() {
  state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function checkDuelResults(playerCardId, computerCardId) {
  let duelResults = "DRAW";
  let currentPlayerCard = cardData[playerCardId];

  if(currentPlayerCard.WinOf.includes(computerCardId)){
    duelResults = "win";
    state.score.playerScore++;
  } 
  
  if(currentPlayerCard.LoseOf.includes(computerCardId)){
    duelResults = "lose";
    state.score.computerScore++;
  }
  
  await playAudio(duelResults);


  return duelResults;

}

async function removeAllCardsImages() {
  let {computerRef, player1Ref} = state.playerSides;
  let imgElements = computerRef.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());

   imgElements = player1Ref.querySelectorAll("img");
   imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index) {
  state.cardSprites.avatar.src = cardData[index].img;
  state.cardSprites.name.innerText = cardData[index].name;
  state.cardSprites.type.innerText = "Attribute : " + cardData[index].type;
}
 
async function drawCards(cardNumbers, fieldSide) {
  for(let i = 0; i < cardNumbers; i++) {
    const randomIdCard = await getRandomCardId();
    const cardImage = await createCardImage(
      randomIdCard, fieldSide);

      document.getElementById(
        fieldSide)
        .appendChild(cardImage);
  }
}

async function resetDuel(){
  state.cardSprites.avatar.src = "";
  state.actions.button.style.display = "none";

  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none";

  startMatch();
}

function startMatch() {
  drawCards(5, state.playerSides.player1);
  drawCards(5, state.playerSides.computer);
}

async function playAudio(status) {
  const audio = new Audio(`./assets/audios/${status}.wav`);
  try {
    audio.play();
  } catch {
    
  }
}

function init() {
  startMatch();
  const bgm = document.getElementById("bgm");
  bgm.play();
}

init();