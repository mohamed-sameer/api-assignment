import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //  api logic

  constructor(private _HttpClient: HttpClient) {}

  getProducs(): Observable<any> {
    // to be able to subscribe you need to return the response
    return this._HttpClient.get('https://api.escuelajs.co/api/v1/products');
  }
}
