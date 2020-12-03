import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
})
export class ZapatillasComponent implements OnInit {
  public titulo = 'Zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public miMarca: string;

  constructor() {
    this.zapatillas = [
      new Zapatilla('flores', 40, 'nike', true),
      new Zapatilla('lunares', 30, 'adidas', false),
      new Zapatilla('rayas', 90, 'adidas', true),
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  // tslint:disable-next-line: typedef
  getMarcas() {
    this.marcas = new Array();
    this.zapatillas.forEach((item, index) => {
      // busca en el array marcas....si la marca no existe ya en el array se pushea al array marca, para eso tiene que existir el array :)
      if (this.marcas.indexOf(item.marca) < 0) {
        console.log(index, item.marca);
        this.marcas.push(item.marca);
        console.log(this.marcas);
      }
    });
  }

  public getMiMarca(): any {
    alert(this.miMarca);
  }
  public addMiMarca(): any {
    if (this.marcas.indexOf(this.miMarca) < 0) {
      this.marcas.push(this.miMarca);
    }
  }
  public deleteMiMarca(marca): any {
    const marcaIndex = this.marcas.indexOf(marca);
    console.log(marcaIndex);
    this.marcas.splice(marcaIndex, 1);
  }
}
