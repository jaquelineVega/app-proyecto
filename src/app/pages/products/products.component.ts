import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  productsList: any[]=[];
  constructor(private productsSvc:ProductsService, private router:Router) 
  {
    this.productsSvc.getAll().subscribe((result:any)=>
      {
        this.productsList=result;
      }
      )
  }

  ngOnInit() {
  }

}
