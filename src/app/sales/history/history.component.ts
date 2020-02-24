import { Component, OnInit } from '@angular/core';
import { SPHistoryService } from 'src/app/_services/sphistory.service';
import { SPHistory } from 'src/app/models/sphistory';
import { SalespersonService } from 'src/app/_services/salesperson.service';
import { element } from 'protractor';
import { Salespersonrecord } from 'src/app/models/salespersonrecord';
import { SalesPersonHistory } from 'src/app/models/salesPersonHistory';
import { VendorsService } from 'src/app/_services/vendors.service';
import { Data } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { Vendor } from 'src/app/models/vendor';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  // heading:string="";
  histories:SPHistory[];
  currentDate:string;
  recordList:Salespersonrecord[];
  historyList:SalesPersonHistory[] =new Array();
  history:SalesPersonHistory=new SalesPersonHistory();
  vendorList:Vendor[] =new Array();
  initialValue:number=0;
  constructor(private _spHistoryService:SPHistoryService, private _salespersonService:SalespersonService,private _vendorService:VendorsService) { }

  ngOnInit(): void {

    localStorage.setItem("heading","History");
    //this.heading=localStorage.getItem("heading");
    // this.currentDate=new Date().getDate().toString();
    this.histories=this._spHistoryService.getAllHistory();
    // this._salespersonService.getSalesPersonHistory(localStorage.getItem('salespersonid')).subscribe(data=>{
    //   this.recordList=data;
    //   localStorage.setItem('salespersonrecord',JSON.stringify(data));
    //   console.log(this.recordList);
    //   this.recordList.forEach(element=>{

    //     this._vendorService.getVendorByVendorId(element.vendorId).subscribe(data=>{
          
    //       this.history.name=data.vendorName;
    //       this.history.phone=data.vendorPhone;
    //       this.history.maxPrice=0;
    //       this.history.date=this.currentDate;
    //       this.history.address=data.vendorAddress;
    //     });

    //     this.historyList.push(this.history);
    //   })
    // })
    // console.log(this.recordList)
    // console.log(this.historyList);
    this.getHistoryData();
  }
getHistoryData(){

  this.currentDate=new Date().getDate().toString();
this._salespersonService.getSalesPersonHistory(localStorage.getItem('salespersonid')).subscribe(data=>{
  console.log(data);
  data.forEach(record=>{

    console.log(record.date.toString());
    this._vendorService.getVendorByVendorId(record.vendorId).subscribe(data=>{
      this.history.address=data.vendorAddress;
      this.history.date=record.date.toString();
      this.history.maxPrice=data.walletDto.walletAmount;
      this.history.name=data.vendorName;
      this.history.phone=data.vendorPhone;

      console.log(data);
      this.vendorList.push(data);
      this.historyList.push(this.history);
      this.history=new SalesPersonHistory();
      
    });

  })
  console.log(this.vendorList);
  console.log(this.historyList);

});

}

}
