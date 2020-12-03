var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorador : añade funcionalidad extra a la clase a la que se le aplica
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            // void para que función no tiene respuesta
            console.log("camiseta estampada con el logo: " + logo);
        };
    };
}
//clase
var Articulo = /** @class */ (function () {
    //para inicializar un objeto pasándole los datos
    function Articulo(tipo, color, marca, cantidad, precio, oferta, talla) {
        this.tipo = tipo;
        this.color = color;
        this.marca = marca;
        this.cantidad = cantidad;
        this.precio = precio;
        this.oferta = oferta;
        this.talla = talla;
    }
    //métodos
    Articulo.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Articulo.prototype.getTipo = function () {
        return this.tipo;
    };
    Articulo.prototype.setColor = function (color) {
        this.color = color;
    };
    Articulo.prototype.getColor = function () {
        return this.color;
    };
    Articulo = __decorate([
        estampar("mi logo")
    ], Articulo);
    return Articulo;
}());
//herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //method
    Sudadera.prototype.setCapucha = function (valor) {
        this.capucha = valor;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Articulo));
var camiseta = new Articulo("camiseta", "red", "nike", 205, 45, false, 45);
var playera = new Articulo("playera", "green", "nike", 205, 45, false, 45);
var sudadera = new Sudadera("sudadera", "green", "nike", 205, 45, false, 45);
camiseta.setColor("blue");
//método del decorador
camiseta.estampacion();
console.log(camiseta);
console.log(camiseta, playera, " camiseta nuevo color " + camiseta.getColor());
sudadera.setCapucha(true);
console.log(sudadera);
