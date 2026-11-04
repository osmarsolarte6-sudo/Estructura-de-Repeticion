
let sumaFor = 0;
for (let i = 1; i <= 100; i++) {
    sumaFor += i;
}
console.log("Suma (for):", sumaFor);


let sumaWhile = 0;
let j = 1;
while (j <= 100) {
    sumaWhile += j;
    j++;
}
console.log("Suma (while):", sumaWhile);


let sumaDoWhile = 0;
let k = 1;
do {
    sumaDoWhile += k;
    k++;
} while (k <= 100);
console.log("Suma (do-while):", sumaDoWhile);