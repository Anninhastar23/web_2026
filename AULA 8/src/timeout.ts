console.log("Antes do setTimeout")
setTimeout(() => console.log("Executando o setTimeout."), 2000)
console.log("Depois do setTimeout")

let frase= "Rodando o setTimeout"

const timeout = setTimeout(() => console.log ("Rodando o setTimenout"), 2000);

frase = "Rodando o clearTimeout";

if(frase !== "Rodando o setTimeout"){
    clearTimeout (timeout);
    console.log(frase);
}
console.log("Depois do setTimeout")