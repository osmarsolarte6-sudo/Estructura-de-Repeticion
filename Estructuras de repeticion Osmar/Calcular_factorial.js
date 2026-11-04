let num = 5; // Número de ejemplo

// Con for
let factorialFor = 1;
for (let i = 1; i <= num; i++) {
    factorialFor *= i;
}
console.log(`Factorial de ${num} (for):`, factorialFor);

// Con while
let factorialWhile = 1;
let temp = num;
while (temp > 1) {
    factorialWhile *= temp;
    temp--;
}
console.log(`Factorial de ${num} (while):`, factorialWhile);
