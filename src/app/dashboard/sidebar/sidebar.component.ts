import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name:string;
  email:string;

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.name=localStorage.getItem('name');
    this.email=localStorage.getItem('email');
    //console.log("Name"+this.name);


  }

  logout(){
    alert("Logout");
    localStorage.clear();
    this.router.navigate(['/login']);

  }

}
