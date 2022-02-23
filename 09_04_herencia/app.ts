interface Vehiculo{
    fabricante: string,
    arrancar(): void,
    repostar(): void,
    detener(): void
}

interface VehiculoTerrestre extends Vehiculo{
    conducir(): void
}

interface VehiculoMaritimo extends Vehiculo{
    sonarSirena(): void
}

class Opel implements VehiculoTerrestre{
    conducir(): void {
        console.log("Conduzco un opel");
    }
    fabricante: string = "Opel";
    arrancar(): void {
        console.log("brum brum");
    }
    repostar(): void {
        console.log("Llenando tanque gasolina");
    }
    detener(): void {
        console.log("Motor parado");
    }
}

function procesar(v: Vehiculo){
    v.arrancar();
}

procesar(new Opel());