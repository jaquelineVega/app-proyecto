import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {
  //variables de entrada y salida
  @Input() productsList: any []=[];
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  verDetalle(codigo:string)
  {
    this.router.navigate(['product',codigo]);
  }
  
}
