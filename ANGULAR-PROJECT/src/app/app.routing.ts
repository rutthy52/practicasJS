// importar módulos del router de angular y componentes
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';

// creamos array de las rutas
const appRoutes: Routes = [
  { path: '', component: SaludoComponent },
  { path: 'saludo', component: SaludoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'articulos', component: ArticuloComponent },
  { path: '**', component: SaludoComponent },
];
// exportamos el modulo provider del router e importamos en nuestro modulo.test
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
