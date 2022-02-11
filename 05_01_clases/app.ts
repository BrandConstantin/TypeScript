class Rectangulo{
    ancho: number;
    alto: number;

    constructor(alto:number, ancho:number){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        return this.ancho * this.alto;
    }
    perimetro(){
        return this.ancho * 2 + this.alto * 2;
    }
}

let r1 = new Rectangulo(10, 13);
let r2 = new Rectangulo(5, 8);
console.log(r1.area + " / " + r2.perimetro);