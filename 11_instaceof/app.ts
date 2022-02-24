interface Coche{
    fabricante: string;
}

class CocheHonda implements Coche{
    fabricante: "Honda";
}

// instanceof no funciona con las interfaces
let newCar = new CocheHonda;
console.log(newCar instanceof CocheHonda);