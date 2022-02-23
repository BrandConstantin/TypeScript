type OperacionSuma = {
    num1: number,
    num2: number,
    tipo: 'suma'
}

type OperacionDividir = {
    num1: number,
    num2: number,
    tipo: 'dividir'
}

type Operacion = OperacionSuma | OperacionDividir;

function operar(op: Operacion){
    if(op.tipo == 'suma'){
        return op.num1 + op.num2;
    }else if(op.tipo == 'dividir'){
        op.num1 / op.num2;
    }
}