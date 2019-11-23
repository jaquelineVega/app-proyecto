import { Injectable } from '@angular/core';
import { ProductModel} from '../models/models';
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import { from, Observable } from 'rxjs';
import { ProductsComponent } from '../pages/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
//declaracion de variables

private subject: BehaviorSubject<ProductModel[]> = new BehaviorSubject([])
private ItemCarrito : ProductModel[]=[];

  constructor()
   { 
    this.subject.subscribe(data => this.ItemCarrito = data);
   }
    /**
   * addCarrito
   * @param producto
   */
   AgregarCarrito( producto: ProductModel)
   {
    // return new Observable (observer =>
     // {
        this.subject.next([...this.ItemCarrito, producto])//.subscribe((result: any[])=>
       // {
         //   const agregar = result;
          //  return observer.next(result)
       // })
      //})
   // this.subject.next([...this.ItemCarrito, this.)
   

   }
  
   LimpiarCarrito()
   {
      this.subject.next(null);
   }
   GetCarrito ()
   {
    return this.subject;
   }
   GetTotal()
   {
     //return this.ItemCarrito.reduce()
   }
}
