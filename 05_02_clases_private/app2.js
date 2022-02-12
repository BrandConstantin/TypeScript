var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangulo_ancho, _Rectangulo_alto;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(alto, ancho) {
        _Rectangulo_ancho.set(this, void 0);
        _Rectangulo_alto.set(this, void 0);
        __classPrivateFieldSet(this, _Rectangulo_alto, alto, "f");
        __classPrivateFieldSet(this, _Rectangulo_ancho, ancho, "f");
    }
    Rectangulo.prototype.area = function () {
        return __classPrivateFieldGet(this, _Rectangulo_ancho, "f") * __classPrivateFieldGet(this, _Rectangulo_alto, "f");
    };
    Rectangulo.prototype.perimetro = function () {
        return __classPrivateFieldGet(this, _Rectangulo_ancho, "f") * 2 + __classPrivateFieldGet(this, _Rectangulo_alto, "f") * 2;
    };
    return Rectangulo;
}());
_Rectangulo_ancho = new WeakMap(), _Rectangulo_alto = new WeakMap();
var r1 = new Rectangulo(5, 8);
var r2 = new Rectangulo(10, 13);
console.log(r1.area() + " / " + r2.perimetro());
