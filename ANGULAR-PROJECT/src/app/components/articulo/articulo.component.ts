import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { saludoPrincipal } from '../../models/configuracion';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit, DoCheck, OnDestroy {
  public color = 'no definido';
  public precio = 0;
  public texto: string;
  public config;
  public vistArticulo = false;

  public setColor(color: string): string {
    this.color = color;
    return this.color;
  }
  public setPrecio(precio: number): number {
    this.precio = precio;
    return this.precio;
  }
  public mostrarArticulo(valor: boolean): boolean {
    this.vistArticulo = valor;
    return this.vistArticulo;
  }

  constructor() {
    this.config = saludoPrincipal;
    this.texto = saludoPrincipal.saludo;
  }

  ngOnInit(): void {
    console.log('on init ejecutado');
  }
  ngDoCheck(): void {
    console.log('on check ejecutado');
  }
  ngOnDestroy(): void {
    console.log('on destroy ejecutado');
  }
}
