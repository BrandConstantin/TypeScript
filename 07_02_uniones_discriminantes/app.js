function operar(op) {
    if (op.tipo == 'suma') {
        return op.num1 + op.num2;
    }
    else if (op.tipo == 'dividir') {
        op.num1 / op.num2;
    }
}
