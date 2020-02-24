import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../models/vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorsService{
    constructor(private http:HttpClient){

    }

    getVendorByVendorId(vendorId:string):Observable<Vendor>{
      return this.http.get<Vendor>('http://localhost:8080/vendor/'+vendorId);
    }

    getVendorByPhone(phone:string):Observable<Vendor>{
      return this.http.get<Vendor>('http://localhost:8080/vendor/getVendor/'+phone);
    }

   

    
}