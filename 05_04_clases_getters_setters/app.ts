class Rectangulo{
    readonly ancho: number; // es equivalente en java con finally
    private readonly alto: number;

    constructor(alto:number, ancho:number){
        this.alto = alto;
        this.ancho = ancho;
    }

    // getters
    get area(): number{
        return this.ancho * this.alto;
    }
    get perimetro(): number{
        return this.ancho * 2 + this.alto * 2;
    }

    // setters
    set area(value: number){
        this.area = value;
    }
    set perimetro(value: number){
        this.perimetro = value;
    }
}

let r1 = new Rectangulo(10, 13);
r1.area = 199;
let r2 = new Rectangulo(5, 8);
r2.perimetro = 999;
console.log(r1.area + " / " + r2.perimetro);