// Lógica
const MOVES = ["piedra", "papel", "tijera"];
const VENCE_A = { piedra: "tijera", papel: "piedra", tijera: "papel" };

function jugadaMaquina() {
    const n = Math.floor(Math.random() * 3); // 0..2
    return MOVES[n];
}

function resultadoRonda(jugador, maquina) {
    if (jugador === maquina) return "empate";
    if (VENCE_A[jugador] === maquina) return "ganas";
    return "pierdes";
}

// Estado Interfaz de usuario o Marcador

const controles = document.getElementById("controles");
const elJugador = document.getElementById("jugada-jugador");
const elMaquina = document.getElementById("jugada-maquina");
const elResultado = document.getElementById("resultado");
const elScoreJ = document.getElementById("score-jugador");
const elScoreM = document.getElementById("score-maquina");
const btnReset = document.getElementById("reset");

let scoreJ = 0;
let scoreM = 0;

function actualizarUI(jugador, maquina, res) {
    elJugador.textContent = jugador;
    elMaquina.textContent = maquina;
    elResultado.textContent = res;

    if (res === "ganas") scoreJ++;
    else if (res === "pierdes") scoreM++;

    elScoreJ.textContent = String(scoreJ);
    elScoreM.textContent = String(scoreM);
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

// EVENT LISTENER BUTTONS
controles.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || !btn.dataset.move) return;

    const jugador = btn.dataset.move; // para piedra, papel, tijera
    const maquina = jugadaMaquina();
    const res = resultadoRonda(jugador, maquina);
    actualizarUI(jugador, maquina, res);
});

btnReset.addEventListener("click", reiniciar);

console.log("Juego Listo");