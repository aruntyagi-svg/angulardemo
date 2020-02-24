import { Injectable } from '@angular/core';
import { SPHistory } from '../models/sphistory';

@Injectable({
  providedIn: 'root'
})
export class SPHistoryService {

  HISTORIES: SPHistory[] = [
    { name: "Ram", address: "gwalior",  membership_price: 3000, date: new Date },
    { name: "Shyam", address: "indore", membership_price: 5000, date: new Date },
    { name: "Mohan", address: "delhi",  membership_price: 6000, date: new Date },
    { name: "Sohan", address: "gurgaon",membership_price: 4500, date: new Date },
    { name: "abc", address: "gwalior",  membership_price: 3000, date: new Date },
    { name: "Sumit", address: "indore", membership_price: 5000, date: new Date },
    { name: "Amit", address: "delhi",   membership_price: 6000, date: new Date },
    { name: "Rakesh",address: "gurgaon",membership_price: 4500, date: new Date }
  ]

  constructor() { }

  getAllHistory(): SPHistory[] {
    return this.HISTORIES
  }
}
