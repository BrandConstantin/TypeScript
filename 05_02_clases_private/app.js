var Rectangulo = /** @class */ (function () {
    function Rectangulo(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    Rectangulo.prototype.area = function () {
        return this.ancho * this.alto;
    };
    Rectangulo.prototype.perimetro = function () {
        return this.ancho * 2 + this.alto * 2;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(10, 13);
var r2 = new Rectangulo(5, 8);
console.log(r1.area() + " / " + r2.perimetro());
