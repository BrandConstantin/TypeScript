var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante) {
        this.fabricante = fabricante;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("El vehiculo ".concat(this.fabricante, " se esta moviendo"));
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(tipo, fabricante) {
        var _this = _super.call(this, fabricante) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.moverse = function () {
        _super.prototype.moverse.call(this);
        console.log("El vehiculo esta moviendo sus 4 ruedas");
    };
    VehiculoTerrestre.prototype.reparar = function () {
        console.log("Me voy a leer las instrucciones de ".concat(this.fabricante));
    };
    VehiculoTerrestre.prototype.llevarTaller = function () { };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoAereo.prototype.moverse = function () {
        _super.prototype.moverse.call(this);
    };
    return VehiculoAereo;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehiculoMaritimo;
}(Vehiculo));
// let v1 = new Vehiculo("Ford"); // con abstract no se puede llamar directamente a la clase padre
// v1.moverse();
var v1 = new VehiculoMaritimo("Ocean Sea");
v1.moverse();
var v2 = new VehiculoTerrestre("VW", "Golf");
v2.moverse();
var v3 = new VehiculoAereo("Airbus");
v3.moverse();
