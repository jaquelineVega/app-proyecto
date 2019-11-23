import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  //declaracion de variables
  DatosProducto: any = {};

  constructor(private router:ActivatedRoute, private productSvc:ProductsService) 
  {
      this.router.params.subscribe(params =>
        {
          console.log('EL CODIGO LEIDO ES', params['codigo']);
        
          this.productSvc.getBycode(params['codigo']).subscribe(result=>
            {
              this.DatosProducto = result;
              console.log('LOS DATOS DEL PRODUCTO SON:', this.DatosProducto);
            })
        });
  }

  ngOnInit() {
  }

}
