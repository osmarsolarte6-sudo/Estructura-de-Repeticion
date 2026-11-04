let m = 3; // Filas
let n = 4; // Columnas
let caracter = "*";

console.log("Tabla con bucle for:");
for (let i = 0; i < m; i++) {
    console.log((caracter + " ").repeat(n));
}

console.log("Tabla con bucle while:");
let fila = 0;
while (fila < m) {
    console.log((caracter + " ").repeat(n));
    fila++;
}
