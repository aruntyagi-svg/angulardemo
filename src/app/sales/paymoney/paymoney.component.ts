import { Component, OnInit } from '@angular/core';
import { VendorsService} from 'src/app/_services/vendors.service';
import { Vendor } from 'src/app/models/vendor';
import { Wallet} from 'src/app/models/wallet'
import { SalespersonService } from 'src/app/_services/salesperson.service';
import { Salesperson } from 'src/app/models/salesperson';
import { WalletService } from 'src/app/_services/wallet.service';

@Component({
  selector: 'app-paymoney',
  templateUrl: './paymoney.component.html',
  styleUrls: ['./paymoney.component.css']
})
export class PaymoneyComponent implements OnInit {

  phone:string ;
  amount:number;
  vendorWallet:Wallet =new Wallet();
  vendor:Vendor=new Vendor();

  salesPersonWallet:Wallet=new Wallet();
  salesPerson:Salesperson =new Salesperson();


  
  constructor(private _vendorService:VendorsService,private _salespersonService:SalespersonService,private _walletService:WalletService) { }

  ngOnInit(): void {

    
  }
  doPayment(){
    

    this._salespersonService.getSalePersonById(localStorage.getItem('salespersonid')).subscribe(data=>{

      this.salesPerson.wallet=data.wallet;
      //console.log(data)
      this.salesPersonWallet=data.wallet;
    });
    
    this._vendorService.getVendorByPhone(this.phone).subscribe(data=>{


      this.vendor.walletDto=data.walletDto;
      //console.log(data);
      this.vendorWallet=data.walletDto;
      

    });

  
    if(this.salesPerson.wallet.walletAmount>this.amount){
      
      this.salesPerson.wallet.walletAmount=this.salesPerson.wallet.walletAmount-this.amount;
      this.vendor.walletDto.walletAmount=+this.amount;
      console.log(this.salesPerson.wallet);
      console.log(this.vendor.walletDto); 
      this._walletService.updateWallet(this.vendor.walletDto).subscribe(data=>{
        console.log(data);
      });
      this._walletService.updateWallet(this.salesPerson.wallet).subscribe(data=>{
        console.log(data);
      });
      localStorage.setItem('wallet',JSON.stringify(this.salesPerson.wallet));
      
    }
    else{
      alert("Insufficient Wallet Amount!!!");
    }
    this._salespersonService.addVendor(this.vendor);
    this.initializeValue();
    

  }
  initializeValue(){
    this.vendorWallet=new Wallet();
    this.salesPersonWallet=new Wallet();
    this.amount=0;
    this.salesPerson=new Salesperson();
    this.vendor=new Vendor();
  }

}
