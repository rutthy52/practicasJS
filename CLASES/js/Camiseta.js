class Camiseta {
   color = "color"
   talla = "talla"
   modelo = "manga corta"
   precio = 0

   setColor = (newColor)=>{
     this.color = newColor
   }
   getColor = ()=>{
     return this.color
   }
}

// clase hija 
class Sudadera extends Camiseta {
  capucha = true;
    setCapucha = (capucha) => {
      this.capucha = capucha;
    };
    getCapucha = () => {
      return this.capucha;
    };
}

var miCamiseta = new Camiseta();
miCamiseta.color="red"
miCamiseta.talla="XL"
miCamiseta.modelo="manga larga"
miCamiseta.precio=20


console.log(miCamiseta)

miCamiseta.setColor("blue")
console.log(miCamiseta, miCamiseta.getColor())

var miSudadera = new Sudadera();
miSudadera.color="green"
miSudadera.capucha = false
miSudadera.setCapucha = true
miSudadera.capucha = miSudadera.getCapucha()

console.log(miSudadera)




