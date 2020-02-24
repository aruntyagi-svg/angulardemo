import { Component, OnInit } from '@angular/core';
import { SPTargetsService } from 'src/app/_services/sptargets.service';
import { Target } from 'src/app/models/target';
import { Targets } from 'src/app/models/targets';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})

export class TargetsComponent implements OnInit {

  targets:Targets = new Targets;
  currentTarget:Targets;
  remaining:number;
  extra:number;
 
  constructor(private _spTargetsService:SPTargetsService)
  {
    
  }

  ngOnInit(): void {

  this.targets.totalTargets=20;
  this.remaining=10;
  this.targets.completeTarget=10;
 
  }

}
