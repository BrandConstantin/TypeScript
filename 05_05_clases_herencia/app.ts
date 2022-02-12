class Vehiculo{
    fabricante: string;

    constructor(fabricante: string){
        this.fabricante = fabricante;
    }

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se esta moviendo`);
    }
}

class VehiculoTerrestre extends Vehiculo{
    private tipo: string;

    constructor(tipo: string, fabricante: string){
        super(fabricante);
        this.tipo = tipo;
    }

    moverse(): void {
        super.moverse();
        console.log("El vehiculo esta moviendo sus 4 ruedas");
    }
}

class VehiculoAereo extends Vehiculo{
    moverse(): void {
        super.moverse();
    }
}

class VehiculoMaritimo extends Vehiculo{

}

let v1 = new Vehiculo("Ford");
v1.moverse();
let v2 = new VehiculoTerrestre("VW", "Golf");
v2.moverse();
let v3 = new VehiculoAereo("Airbus");
v3.moverse();