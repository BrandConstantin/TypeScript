interface Geometria{
    lados: number;
    pintar(): void;
}

interface Triangulo extends Geometria{
    base: number;
    altura: number;
}

interface Cuadrado extends Geometria{
    lado: number;
}

function procesar(g: Geometria){
    if(g.lados == 4){
        let cuadrado = g as Cuadrado;
        cuadrado.lado = 2;
    } else if (g.lados == 3){
        let triangulo = g as Triangulo;
        triangulo.base = 2;
    }
}

//otro tipo de casteo
function esUnCuadrado(x: any): x is Cuadrado{
    return x.lados && x.pintar && x.lado;
}