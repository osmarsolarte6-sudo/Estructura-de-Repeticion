function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primos = [];
for (let i = 2; i <= 1000; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}
console.log("Números primos entre 2 y 1000:", primos);