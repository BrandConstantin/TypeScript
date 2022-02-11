let restar:(m: number, n:number)=>number = function(m: number, n:number):number{
    let resta = m - n;
    console.log(`${m} - ${n} = ${resta}`);
    return resta;
}

// v2
let multiplicar: (m: number, n:number)=>number;
multiplicar = (m, n) => m * n;

let restado = restar(4, 1);
let multiplicado = multiplicar(2, 5);