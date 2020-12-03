import { Component } from '@angular/core';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent extends ArticuloComponent {
  private nombre: string;
  public texto: string;

  public setNombre(nombre: string): string {
    this.nombre = nombre;
    return this.nombre;
  }
}
