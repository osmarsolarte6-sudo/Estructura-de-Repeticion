let n = 21; // Supongamos que n = 21

if (n > 6) {
    console.log(`Múltiplos de 3 entre 6 y ${n} (con for):`);
    let resultadoFor = "";
    for (let i = 6; i <= n; i += 3) {
        resultadoFor += i + " ";
    }
    console.log(resultadoFor);

    console.log(`Múltiplos de 3 entre 6 y ${n} (con while):`);
    let actual = 6;
    let resultadoWhile = "";
    while (actual <= n) {
        resultadoWhile += actual + " ";
        actual += 3;
    }
    console.log(resultadoWhile);
} else {
    console.log("El valor de n debe ser mayor a 6.");
}
