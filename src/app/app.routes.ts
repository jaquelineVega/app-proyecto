//Imports Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
//Imports Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { PaisesComponent} from './pages/paises/paises.component';
import { CarritoComponent} from './pages/carrito/carrito.component';
//Se crea este componente en caso de que no exista el que se busca
import {PagesNotFoundComponent} from './pages/pages-not-found/pages-not-found.component';
import { SearchComponent } from './pages/search/search.component';
import { from } from 'rxjs';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'params', component: SearchComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'paises', component: PaisesComponent},
    { path: 'carrito', component: CarritoComponent},
    { path: 'product/:codigo', component: ProductComponent},
    { path: 'search/:criterio', component: SearchComponent},
    { path: '', redirectTo:'/home', pathMatch:'full'},
    { path: '**', component: PagesNotFoundComponent },
   
    
];

@NgModule({
    //ForRoot es para manejo de rutas standard
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
