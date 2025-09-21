// Lógica
const MOVES = ["piedra", "papel", "tijera"];
const VENCE_A = { piedra: "tijera", papel: "piedra", tijera: "papel" };

function jugadaMaquina() {
    const n = Math.floor(Math.random() * 3); // 0..2
    return MOVES[n];
}

function resultadoRonda(jugador, maquina) {
    if (jugador === maquina) return "empate";
    if (VENCE_A[jugador] === maquina) return "ganas!";
    return "perdiste!";
}

// Estado Interfaz de usuario o Marcador

const controles = document.getElementById("controles");
const elJugador = document.getElementById("jugada-jugador");
const elMaquina = document.getElementById("resultados");
const elResultado = document.getElementById("score-jugador");
const elScoreJ = document.getElementById("score-jugador");
const elScoreM = document.getElementById("score-maquina");
const btnReset = document.getElementById("reset");

let scoreJ = 0;
let scoreM = 0;

function ActualizarUI(jugador, maquina, res) {
    elJugador.textContent = jugador;
    elMaquina.textContent = maquina;
    elResultado.textContent = res;

    if (res === "ganas") scoreJ++;
    else if (res === "pierdes") scoreM++;
}

function reiniciar() {
    scoreJ = 0;
    scoreM = 0;
    elScoreJ.textContent = "0";
    elScoreM.textContent = "0";
    elJugador.textContent = "-";
    elMaquina.textContent = "-";
    elResultado.textContent = "-";
}