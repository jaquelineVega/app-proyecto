import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: []
})
export class PaisesComponent implements OnInit {

  //declaracion de variables
  paises : any;
  
  constructor(private PaisesSvc: PaisesService) 
  {
      this.PaisesSvc.getPaises().subscribe((data:any)=>
      {
        this.paises = data;
      })
  }

  ngOnInit() {
  }

}
