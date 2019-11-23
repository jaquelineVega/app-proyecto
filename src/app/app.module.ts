//Modulos de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
//App components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { PagesNotFoundComponent } from './pages/pages-not-found/pages-not-found.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoryComponent } from './pages/products/category/category.component';
import { CardsComponent } from './components/cards/cards.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { CarritoComponent } from './pages/carrito/carrito.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ProductsComponent,
    PagesNotFoundComponent,
    SearchComponent,
    CategoryComponent,
    CardsComponent,
    PaisesComponent,
    CarritoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
