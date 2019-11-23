import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  //declaracion de variables
  BusquedaProd : any[]=[];

  constructor(private router:ActivatedRoute, private ProductsSvc:ProductsService, private router2:Router)
  {
    this.router.params.subscribe(params=>
      {
        console.log('EL CRITERIO ES:', params['criterio']);
        this.ProductsSvc.getByCriterio(params['criterio']).subscribe((result: any[])=>
        {
            this.BusquedaProd=result;
        })
      })

  }


  ngOnInit() {
  }

}
