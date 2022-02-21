function convertir(valor: string | number){}

convertir("montaña");
convertir(4);

type A ={
    uno: boolean,
    dos: boolean
}
type B ={
    tres: boolean
}
// let valor: A|B = {tres: boolean}  // coge los valores o de uno o de otro
let valor: A|B = {uno: true, dos: false}