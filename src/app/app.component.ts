import { Component } from '@angular/core';
import { Salesperson } from './models/salesperson';
import { SalespersonService } from './_services/salesperson.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  salesPerson:Salesperson;

  constructor(private _salespersonService:SalespersonService){
    
  }
  ngOnInit(){

    //localStorage.setItem("userType",this.userType);
    this.getSalesPersonById();
    
  }

  getSalesPersonById(){

    // this._salespersonService.getSalesPersonById().subscribe(data=>{
    //   this.salesPerson=data;
    //   localStorage.setItem('salesperson',JSON.stringify(data));
    //   console.log(data)
    //   localStorage.setItem('name',this.salesPerson.salesPersonName);
    //   localStorage.setItem('email',this.salesPerson.salesPersonEmail);
    //   localStorage.setItem('targets',JSON.stringify(this.salesPerson.targetList));

    //   console.log(this.salesPerson.salesPersonName);
      
    // })

  }

  
}
