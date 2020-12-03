import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';

@NgModule({
  declarations: [
    SaludoComponent,
    ArticuloComponent,
    CursosComponent,
    ZapatillasComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [HomeComponent],
})
export class AppModule {}
