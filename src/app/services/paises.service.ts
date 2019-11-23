import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//declaracion de variable de URL
const URL_PAISES = 'https://restcountries.eu/rest/v2/all';

@Injectable({  providedIn: 'root'})


export class PaisesService {

  constructor(private http:HttpClient) 
  {

  }
  getPaises()
  {
    return this.http.get(URL_PAISES);
    
  }
}
