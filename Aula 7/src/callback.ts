
function somar (a: number, b: number): void{
    var op = a + b;
    console.log("A operacap efetuada resultou em:" + op);
}

function imprimir ( value : any ) : void {
    console . log ("A operacao efetuada resultou em: " + value )
 } ;

 function concatenar ( a : string , b : string , callback :( param : string ) => void ) : void {
    var op = a + " " + b ;
    callback ( op ) ;
 }

