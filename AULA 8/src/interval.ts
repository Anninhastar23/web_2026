//setInterval(() => console.log("Executando o setInterval."), 1000)
//console.log("Depois do interrval")


let contador = 0
let interval = setInterval(() => {
    contador++;
    console.log("Rodando o setInterval");
    if (contador === 3){
        console.log ("Intervalo cancelado apos 3 execucoes.");
        clearInterval(interval);
    }
},700)
console.log("Depois do interval...") //sincrono, processado primeiro

