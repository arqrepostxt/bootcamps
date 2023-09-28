const state = {
  score: {
    playerWinScore:0,
    playerLoseScore:100,
    heroName: "Hero",
    heroRank: "Ferro",
    heroExperience: 0,
    scoreBox: document.getElementById("score-points"),
    rankBox: document.getElementById("score-rank"),
  },
  enemiesSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  spellSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldSpells: {
    player: document.getElementById("player-field-card"),
    enemy: document.getElementById("computer-field-card"),
  },
  actions: {
    button:document.getElementById("next-duel"),
  },
  gameCards : {
    player1: "player-cards",
    player1Ref: document.querySelector("#player-cards"),
    computer: "computer-cards",
    enemyRef: document.querySelector("#computer-cards"),
  }
};

const pathImages = "./assets/icons/";

const enemyData = [
  {
    id: 0,
    name : "The Water Slime",
    type: "Water",
    img: `${pathImages}enemy.png`,
    LoseOf: [0],
    WinOf: [1]
  },
  {
    id: 1,
    name : "The Emerald Slime",
    type: "Earth",
    img: `${pathImages}emerald.png`,
    LoseOf: [1],
    WinOf: [0]
  },
]

const spellData = [
  {
    id: 0,
    name: "Fire Ball",
    type: "Fire",
    img: `${pathImages}spell.png`,
    WinAgainst: [0],
    LoseAgainst: [1],
  },
  {
    id: 1,
    name: "Iron Ball",
    type: "Earth",
    img: `${pathImages}spell2.png`,
    WinAgainst: [1],
    LoseAgainst: [0],
  },
]

async function removeAllCardsImages() {
  let {enemyRef, player1Ref} = state.gameCards;

  // remove all spells of the player1
  let imgElements = player1Ref.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());

  // remove all spells of the enemy
  imgElements = enemyRef.querySelectorAll("img");
  imgElements.forEach((img) => img.remove());
}

async function setCardsField(spellId) {

  // remove all game cards
  await removeAllCardsImages();

  // remove enemy
  let enemyTypeId = await getRandomEnemy();
  state.fieldSpells.enemy.style.display = "block";
  state.fieldSpells.enemy.src = enemyData[enemyTypeId].img;

  let duelResults = await checkDuelResults(spellId, enemyTypeId);

  await updateScore();
  await drawButton(duelResults);
}

async function updateScore() {
  state.score.scoreBox.innerText = `Win: ${state.score.playerWinScore} | Health: ${state.score.playerLoseScore}`;
  state.score.rankBox.innerText = `${state.score.heroRank} - ${state.score.heroExperience} XP`;
}

async function drawButton(text){
  state.actions.button.innerText = text.toUpperCase();
  state.actions.button.style.display = "block";
}

async function increaseExp() {

  let multiplier = 1;
  let amountExp = (state.score.playerWinScore + 1)*500; 

  if (state.score.playerLoseScore <= 90 && state.score.playerLoseScore > 80) {
    multiplier = 20;
  }
  if (state.score.playerLoseScore <= 80) {
    multiplier = 100;
  }

    state.score.heroExperience = amountExp * multiplier;
}

async function updateRank() {
  let currentExp = state.score.heroExperience;
  state.score.heroRank = checkRank(currentExp);
}

async function checkDuelResults(spellId, enemyTypeId) {
  let duelResults = "DRAW";
  let currentPlayerCard = spellData[spellId];

  if(currentPlayerCard.WinAgainst.includes(enemyTypeId)){
    duelResults = "win";
    state.score.playerWinScore++;
    increaseExp();
    updateRank();
  } 
  
  if(currentPlayerCard.LoseAgainst.includes(enemyTypeId)){
    duelResults = "lose";
    state.score.playerLoseScore--;
  }
  
  return duelResults;

}

async function getRandomSpell() {
  const randomIndex = Math.floor(Math.random() * spellData.length);
  return spellData[randomIndex].id;
}

async function getRandomEnemy() {
  const randomIndex = Math.floor(Math.random() * enemyData.length);
  return enemyData[randomIndex].id;
}

async function loadMagics(spellsQuantity, side) {
  for(let i = 0; i < spellsQuantity; i++) {
    const randomIdSpell = await getRandomSpell();
    const cardImage = await createCardImage(randomIdSpell, side);
    document.getElementById(side).appendChild(cardImage);
  }
}

async function createCardImage(IdSpell, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./assets/icons/card-back.png");
  cardImage.setAttribute("data-id", IdSpell);
  cardImage.classList.add("card");

  if(fieldSide === state.gameCards.player1) {
    cardImage.addEventListener("click", ()=>{
      setCardsField(cardImage.getAttribute("data-id"));
    });
  }

  cardImage.addEventListener("mouseover", ()=>{
    drawSelectCard(IdSpell);
  });

  return cardImage;
  
}

async function drawSelectCard(index) {
  state.spellSprites.avatar.src = spellData[index].img;
  state.spellSprites.name.innerText = spellData[index].name;
  state.spellSprites.type.innerText = "Attribute : " + spellData[index].type;
}

async function resetDuel(){
  state.spellSprites.avatar.src = "";
  state.actions.button.style.display = "none";

  state.fieldSpells.enemy.style.display = "none";

  startMatch();
}

function checkRank(xp) {
  if ( xp <= 1000 ) {
    return "Ferro";
  } else if ( xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if ( xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if ( xp >= 5001 && xp <= 7000 ) {
    return "Ouro";
  } else if ( xp >= 7001 && xp <= 8000 ) {
    return "Platina";
  } else if ( xp >= 8001 && xp <= 9000 ) {
    return "Ascendente";
  } else if ( xp >= 9001 && xp <= 10000 ) {
    return "Imortal";
  } else if ( xp > 10001 ) {
    return "Radiante";
  }
}

function startMatch() {
  loadMagics(4, state.gameCards.player1);
}

function init() {
  startMatch();
}

init();

