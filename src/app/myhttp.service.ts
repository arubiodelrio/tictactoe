import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  constructor(private httpCliente:HttpClient) {

   }

  getSavedGame(){
    return this.httpCliente.get("https://api.myjson.com/bins/rbnwf");
    //return this.httpCliente.get("https://api.myjson.com/bins/i216a");
  }
}
