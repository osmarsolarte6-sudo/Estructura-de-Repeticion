let n = 5; // Mitad de la altura
let totalFilas = 2 * n - 1;

for (let i = 1; i <= totalFilas; i++) {
    let filasEfectivas = i <= n ? i : 2 * n - i;
    let espacios = " ".repeat(n - filasEfectivas);
    let asteriscos = "*".repeat(2 * filasEfectivas - 1);
    console.log(espacios + asteriscos);
}
