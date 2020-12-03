//interface  => obligatorio en la clase dónde se implementa
interface ArticuloBase {
  setColor(color);
  getColor();
}

//decorador : añade funcionalidad extra a la clase a la que se le aplica
function estampar(logo: string) {
  return function (target: Function) {
    target.prototype.estampacion = function (): void {
      // void para que función no tiene respuesta
      console.log("camiseta estampada con el logo: " + logo);
    };
  };
}
//clase

@estampar("mi logo")
class Articulo implements ArticuloBase {
  //propiedades
  private tipo: string;
  private color: string;
  private marca: string;
  private cantidad: number;
  private precio: number;
  private oferta: boolean;
  private talla: string | number;

  //para inicializar un objeto pasándole los datos
  constructor(tipo, color, marca, cantidad, precio, oferta, talla) {
    this.tipo = tipo;
    this.color = color;
    this.marca = marca;
    this.cantidad = cantidad;
    this.precio = precio;
    this.oferta = oferta;
    this.talla = talla;
  }

  //métodos

  public setTipo(tipo: string) {
    this.tipo = tipo;
  }
  public getTipo() {
    return this.tipo;
  }

  public setColor(color) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }
}

//herencia

class Sudadera extends Articulo {
  private capucha: boolean;

  //method

  public setCapucha(valor: boolean) {
    this.capucha = valor;
  }

  public getCapucha(): boolean {
    return this.capucha;
  }
}

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
