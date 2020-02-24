import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salesperson } from 'src/app/models/salesperson';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-spwallet',
  templateUrl: './spwallet.component.html',
  styleUrls: ['./spwallet.component.css']
})
export class SpwalletComponent implements OnInit {

  salesPerson:Salesperson;
  wallet:Wallet;
  

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.wallet=JSON.parse(localStorage.getItem('wallet'));    
    
  }
  payToVendor(){

    //alert("clicked...");
    this.router.navigate(['sp/paymoney']);
  }

}
