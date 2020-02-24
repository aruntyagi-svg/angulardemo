import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userType:string="sales";
  constructor() { }

  ngOnInit(): void {

    // if(localStorage.getItem("userType")==="vendor")
    // {


    //   this.userType="Vendor";
    //   alert(this.userType);
    // }
    // else if(localStorage.getItem("userType")==="salesperson")
    // {
    //   this.userType="Sales";
    //   alert("header "+this.userType);
    // }

  }

}
