import "./style.css";

type SalaCine = number[][];

// Estado de la aplicación
let sala: SalaCine = Array.from({ length: 8 }, () => Array(10).fill(0));

const mapaContainer = document.getElementById('mapa-asientos')!;
const logs = document.getElementById('logs')!;

/**
 * Muestra el estado actual de la sala en la consola.
 * Requisito: X para ocupados, L para libres + números de fila/columna.
 */
function imprimirMatrizConsola(sala: SalaCine): void {
    console.clear();
    console.log("%cCINE INDEPENDIENTE - ESTADO DE SALA", "color: #818cf8; font-weight: bold;");
    
    // Encabezado de columnas
    let encabezado = "    ";
    for (let i = 0; i < 10; i++) encabezado += i + " ";
    console.log(encabezado);
    console.log("   " + "-".repeat(21));

    sala.forEach((fila, index) => {
        const filaTexto = fila.map(asiento => (asiento === 0 ? "L" : "X")).join(" ");
        console.log(`F${index} | ${filaTexto}`);
    });
}

/**
 * Cuenta y devuelve cuántos asientos están ocupados y disponibles.
 */
function obtenerConteo(sala: SalaCine) {
    let ocupados = 0;
    let libres = 0;
    sala.forEach(fila => {
        fila.forEach(asiento => (asiento === 1 ? ocupados++ : libres++));
    });
    return { ocupados, libres };
}

// --- FUNCIONES CORE ---

function renderizarSala() {
    mapaContainer.innerHTML = '';
    const { libres, ocupados } = obtenerConteo(sala);

    sala.forEach((fila, fIndex) => {
        fila.forEach((asiento, cIndex) => {
            const btn = document.createElement('button');
            btn.className = `w-8 h-8 rounded-t-lg transition-all transform hover:scale-110 ${
                asiento === 0 ? 'bg-slate-600 hover:bg-green-500' : 'bg-red-600 cursor-not-allowed'
            }`;
            
            btn.title = `Fila ${fIndex}, Col ${cIndex}`;
            btn.onclick = () => intentarReservar(fIndex, cIndex);
            mapaContainer.appendChild(btn);
        });
    });

    document.getElementById('contador-libres')!.innerText = `Libres: ${libres}`;
    document.getElementById('contador-ocupados')!.innerText = `Ocupados: ${ocupados}`;
    
    // Llamada a la consola para cumplir con la evaluación
    imprimirMatrizConsola(sala);
    console.log(`Resumen: [Ocupados: ${ocupados}] - [Libres: ${libres}]`);
}

function intentarReservar(f: number, c: number) {
    if (sala[f][c] === 1) {
        const msgError = `⚠️ El asiento en Fila ${f}, Columna ${c} ya está ocupado.`;
        logs.innerText = "❌ Este asiento ya está ocupado";
        logs.classList.add('text-red-400');
        console.warn(msgError);
        return;
    }

    sala[f][c] = 1;
    const msgExito = `✅ Reserva confirmada: Fila ${f}, Asiento ${c}`;
    logs.innerText = msgExito;
    logs.classList.remove('text-red-400');
    console.log(msgExito);
    renderizarSala();
}

function sugerirPareja() {
    console.log("Buscando asientos contiguos...");
    for (let f = 0; f < sala.length; f++) {
        for (let c = 0; c < sala[f].length - 1; c++) {
            if (sala[f][c] === 0 && sala[f][c + 1] === 0) {
                const msg = `✨ Asientos contiguos encontrados: Fila ${f}, Asientos ${c} y ${c + 1}`;
                logs.innerText = `✨ Pareja sugerida: Fila ${f}, Cols ${c}-${c+1}`;
                console.log(msg);
                return;
            }
        }
    }
    const msgFallo = "🚫 No se encontraron asientos contiguos disponibles.";
    logs.innerText = msgFallo;
    console.error(msgFallo);
}

// --- INICIALIZACIÓN ---
document.getElementById('btn-sugerir')?.addEventListener('click', sugerirPareja);

// Prueba inicial: Sala vacía
console.log("Iniciando sistema con sala vacía...");
renderizarSala();

