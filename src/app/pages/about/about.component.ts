import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

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
