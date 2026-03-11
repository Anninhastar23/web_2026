const numberx: number[] = [11,22,7,30,1,2,3,4,5];

//ordena de forma lexicograficamente, todos números com 1,depois 2,...
//numberx.sort();
numberx.sort((a, b) => a- b); // crescente
// numberx.sor((a, b) => b-a); descrescente
console.log(numberx);

const arquivos: string[] = [" item10.png", "item01.png", "item09.png", "item20.png"];
arquivos.sort((a,b) =>a.localeCompare(b));
console.log(arquivos);

"jubas".localeCompare("JUBASS", undefined, {numeric:true, sensitivity: 'base'});




