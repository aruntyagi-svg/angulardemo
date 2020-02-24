


import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { Login } from '../models/login';
import { SalespersonService } from '../_services/salesperson.service';
import { Salesperson } from '../models/salesperson';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loginData=new  Login();
	
	salesPerson:Salesperson;
	constructor(
		private router: Router, 
		private _loginService: LoginService,
		private _salespersonService:SalespersonService) {
	}

	ngOnInit() {

		//this.checkMethod();
	}

	// checkMethod(){
		
	// 	this.loginData.password="8770748685";
	// 	this.loginData.phone="8770748685";
	// 	console.log(this.loginData.password);
	// 	console.log(this.loginData.phone);
	// 	this._loginService.login(this.loginData).subscribe(data=>{
	// 		console.log(data);
	// 	})
	// }
	doLogin(phone: string, password: string): boolean {

		// alert("phone="+phone+"pass="+password);
		this.loginData.password=password;
		this.loginData.phone=phone;
		this._loginService.login(this.loginData).subscribe(data => {
			this.loginData = data;
			//  alert("data avail===>"+this.loginData.loginId);
			//  alert("data avail===>"+this.loginData.phone);
			console.log(data)

			if (this.loginData.loginId!=0) {

				//alert("IF block"+this.loginData.phone);
				this._salespersonService.getSalesPersonByPhone(this.loginData.phone).subscribe(data=>{
	
					this.salesPerson=data;
	
					//localStorage.setItem('loginId', this.loginData.loginId.toString());
					localStorage.setItem('wallet',JSON.stringify(this.salesPerson.wallet));
					localStorage.setItem('name', this.salesPerson.salesPersonName);
					localStorage.setItem('email',this.salesPerson.salesPersonEmail);
					localStorage.setItem('salespersonid',this.salesPerson.salesPersonId);
					localStorage.setItem('targets',JSON.stringify(this.salesPerson.targetList));
					console.log(this.salesPerson);
					console.log(this.salesPerson.targetList);
					//localStorage.setItem('password', this.loginData.password);
					//localStorage.setItem('category', this.loginData.category);
					this.router.navigate(['/sp/history']);
	
					return true;
				
	
				});
				
	
				
			}
			else {
				// localStorage.setItem('loginId', '');
				// localStorage.setItem('username', '');
				// localStorage.setItem('password', '');
				// localStorage.setItem('category', '');
				// this.router.navigate(['/login']);
				return false;
			}

		},
		error=>{
			alert('error from login rest ');
		}
		
	
		
		
		);


		

	return false;	

	}

}

