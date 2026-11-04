
let sumaParesFor = 0;
for (let i = 1; i <= 30; i++) {
    sumaParesFor += 2 * i;
}
console.log("Suma pares (for):", sumaParesFor);


let sumaParesWhile = 0;
let contador = 1;
while (contador <= 30) {
    sumaParesWhile += 2 * contador;
    contador++;
}
console.log("Suma pares (while):", sumaParesWhile);