import { Heroi } from '../models/Heroi.js';

const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');

function insertMessage(character) {
  let menssagem = `o ${character.tipo} atacou usando ${character.ataque}`;
  const newMessage = document.createElement('p');
  newMessage.textContent = menssagem;
  modalMessage.appendChild(newMessage);
  modal.style.display = 'block'; 
}

function init() {
  const veigar = new Heroi("Veigar", "1500", "mago");
  const garen = new Heroi("Garen", "30", "guerreiro");
  veigar.atacar();
  garen.atacar();
  insertMessage(veigar);
  insertMessage(garen);
}

init();