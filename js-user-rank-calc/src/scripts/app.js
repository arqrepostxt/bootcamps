// JavaScript code to handle form submission and display modal
const form = document.getElementById('simpleForm');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');

function calcularSaldoVitorias() {
    let vitorias = document.getElementById('victories').value;
    let derrotas = document.getElementById('defeats').value;
    let saldo = vitorias - derrotas;
    return saldo;
}

function calcularRank(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo > 10 && saldo < 21) {
        return "Bronze";
    } else if (saldo > 20 && saldo < 51) {
        return "Prata";
    } else if (saldo > 50 && saldo < 81) {
        return "Ouro";
    } else if (saldo > 80 && saldo < 91) {
        return "Diamante";
    } else if (saldo > 90 && saldo < 101) {
        return "Lendário";
    } else if (saldo >= 101 ) {
        return "Imortal";
    }
}

function calculate() {
    let saldoVitorias = calcularSaldoVitorias();
    let nivel = calcularRank(saldoVitorias);
    let message = `O Herói tem de saldo ${saldoVitorias} está no nível de ${nivel}`;
    modalMessage.textContent = message;
    modal.style.display = 'block';
}