import { Component, OnInit } from '@angular/core';
import { VendorsService } from 'src/app/_services/vendors.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vendor } from 'src/app/models/vendor';
import { SalespersonService } from 'src/app/_services/salesperson.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {

  vendorForm:FormGroup;
  vendor:Vendor =new Vendor();

  
  heading:string="";
    
  constructor( private fb:FormBuilder,private _salespersonService:SalespersonService) { }

  ngOnInit(): void {

    this.vendorForm=this.fb.group({
      name:['',[Validators.required,]],
      email:['',[Validators.required]],
      gender: ['', [Validators.required,]],
      address: ['', [Validators.required,]],
      phone:['',[Validators.pattern('[6-9]\\d{9}')]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      aadhaar:['',[Validators.required]],
      pan:['',[Validators.required]],
      totalGym:['',[Validators.required]],

    });
  }
  saveVendor(){
   
    this.vendor.vendorId='vendor_'+this.getRandomInt(10);
    console.log(this.vendor);
    
    this._salespersonService.addVendor(this.vendor).subscribe(data=>{
      //alert('Rakesh sir');
    },
    error=>{
      alert('error');
    })

  }

   getRandomInt(max):number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
