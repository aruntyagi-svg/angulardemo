import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salesperson } from '../models/salesperson';
import { Observable } from 'rxjs';
import { Vendor } from '../models/vendor';
import { Salespersonrecord } from '../models/salespersonrecord';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  constructor(private http:HttpClient) { }

  getSalesPersonById():Observable<Salesperson>{
    return this.http.get<Salesperson>('http://localhost:8080/sales/sale_1');
  }
  getSalePersonById(saleId:string):Observable<Salesperson>{
    return this.http.get<Salesperson>('http://localhost:8080/sales/'+saleId);
  }
  getSalesPersonByPhone(phone:string):Observable<Salesperson>{
    return this.http.get<Salesperson>('http://localhost:8080/sales/getSalesPerson/'+phone);
  }
  addVendor(vendor:Vendor):Observable<Vendor>{
    return this.http.put<Vendor>('http://localhost:8080/sales/addVendor/'+localStorage.getItem('salespersonid'),vendor);

  }
  getSalesPersonHistory(saleId:string):Observable<Salespersonrecord[]>{
    return  this.http.get<Salespersonrecord[]>('http://localhost:8080/sales/getHistory/'+saleId);
  }
 
}
