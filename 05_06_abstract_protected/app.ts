abstract class Vehiculo{
    protected fabricante: string;

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

    reparar(){
        console.log(`Me voy a leer las instrucciones de ${this.fabricante}`)
    }

    protected llevarTaller(){}
}

class VehiculoAereo extends Vehiculo{
    moverse(): void {
        super.moverse();
    }
}

class VehiculoMaritimo extends Vehiculo{

}

// let v1 = new Vehiculo("Ford"); // con abstract no se puede llamar directamente a la clase padre
// v1.moverse();
let v1: Vehiculo = new VehiculoMaritimo("Ocean Sea");
v1.moverse();
let v2 = new VehiculoTerrestre("VW", "Golf");
v2.moverse();
let v3 = new VehiculoAereo("Airbus");
v3.moverse();