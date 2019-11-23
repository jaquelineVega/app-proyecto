import { Component, OnInit } from '@angular/core';
import { ProductModel} from 'src/app/models/models';
import { CarritoService} from 'src/app/services/carrito.service';
import { from, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  private carrtito: ProductModel[];
  private subscription: Subscription;
  private total: number;

  constructor(private carritoSvc: CarritoService) { }

  ngOnInit() 
  {
    //this.carritoSvc.AgregarCarrito().subscribe(data=>
      //{
        //console.log(data);
        //this.carrtito = data;
       // this.total = this.carritoSvc.GetTotal();
     // })
  }

}
