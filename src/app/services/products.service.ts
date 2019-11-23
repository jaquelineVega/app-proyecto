import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { ProductModel } from '../models/models';

//Variable donde se guarda la URL de json o bd
//const ENDPOINT_URL_PRODUCTS ='assets/data/productos.json';
const ENDPOINT_URL_PRODUCTS ='https://mi-proyecto-873d7.firebaseio.com/.json'

@Injectable({providedIn: 'root'})
export class ProductsService {
  //declaracion de variables
  product: ProductModel = {};
  //dentro del constructor hacemos llamar lo que vamos a necesitar
  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get(ENDPOINT_URL_PRODUCTS);
    
  }
  getBycode(codigo: string)
  {
    return new Observable (observer =>
      {
        this.getAll().subscribe((result: any[]) =>
          {
           const filtro = result.filter(item=> item.codigo == codigo);
           return observer.next(filtro);

          });
      })

  }
  getCategory(category:string)
  {
    return new Observable(observer =>
      {
        this.http.get(ENDPOINT_URL_PRODUCTS).subscribe((data:ProductModel[])=>
        {
          const filter = data.filter(item => item.categoria ==category || item.categoria.indexOf(category) >= 0);
           observer.next(filter);
        });
      });
    
  }
  getByCriterio(criterio:string)
  {
    return new Observable(observer =>
      {
        this.http.get(ENDPOINT_URL_PRODUCTS).subscribe((data:ProductModel[])=>
        {
          const busqueda = data.filter(item => item.descripcion.toLocaleLowerCase().includes(criterio.toLocaleLowerCase()) );
          return observer.next(busqueda);
          
        });
      });
    
  }
}
