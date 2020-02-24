import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../models/vendor';
import { Observable } from 'rxjs';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService{

    constructor(private http:HttpClient){

    }
    updateWallet(updateWallet:Wallet):Observable<Wallet>{
        return this.http.put<Wallet>('http://localhost:8080/wallet/update',updateWallet);
      }
}