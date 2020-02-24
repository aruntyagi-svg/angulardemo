import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  price: any;
  calculatorForm: FormGroup;

  membership: number = 15;
  activities: number = 4;
  trainer: number = 0;
  equipment: number = 4;
  unisex: number = 7;

  totalPercentage: number;


  constructor() { }

  ngOnInit() {
  }
  getPrice() {
    this.membership = this.activities + this.trainer + this.equipment + this.unisex;

    this.totalPercentage = this.membership + (this.activities * 2) + this.trainer + (this.equipment * 2) + this.unisex;
    //alert("total % : " + this.totalPercentage + " %");

    this.price = this.totalPercentage * 120 - 1000;

    //alert("total Price : " + this.price);


    this.price = (Math.floor(this.price / 500)) * 500;

  }
  changeActivities(event: any) {
    //alert(event.target.value);
    if (event.target.value === "onlygym") {
      this.activities = 4;
    }
    else if (event.target.value === "gymplustwo") {
      this.activities = 7;
    }
    else if (event.target.value === "morethantwo") {
      this.activities = 10;
    }

  }


  changeEquipments(event: any) {
    //alert(event.target.value);
    if (event.target.value === "marginal") {
      this.equipment = 4;
    }
    else if (event.target.value === "enough") {
      this.equipment = 7;
    }
    else if (event.target.value === "full") {
      this.equipment = 10;
    }
  }

  changeTrainer(event: any) {
    // alert(event.target.value);
    if (event.target.value === "notrainer") {
      this.trainer = 0;
    }
    else if (event.target.value === "notcertified") {
      this.trainer = 7;
    }
    else if (event.target.value === "certified") {
      this.trainer = 10;
    }
  }

  changeUnisex(event: any) {
    //alert(event.target.value);
    if (event.target.value === "no") {
      this.unisex = 7;
    }
    else if (event.target.value === "yes") {
      this.unisex = 10;
    }


  }


}
