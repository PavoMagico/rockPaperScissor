// Lógica
const MOVES = ["piedra", "papel", "tijera"];
const VENCE_A = { piedra: "tijera", papel: "piedra", tijera: "papel" };

function jugadaMaquina() {
    const n = Math.floor(Math.random() * 3); // 0..2
    return MOVES[n];
}