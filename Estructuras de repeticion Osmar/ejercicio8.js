let n = 5; 

for (let i = 1; i <= n; i++) {
    let espacios = " ".repeat(n - i);
    let ascendente = "";
    for (let j = 1; j <= i; j++) ascendente += j;
    let descendente = "";
    for (let j = i - 1; j >= 1; j--) descendente += j;
    
    console.log(espacios + ascendente + descendente);
}