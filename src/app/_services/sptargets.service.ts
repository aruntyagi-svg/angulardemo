import { Injectable } from '@angular/core';
import { Target } from '../models/target';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SPTargetsService {


  TARGETS:Target={
    total:100,
    achived:30,
    remaining:70,
   // money:10230
  }


  constructor() { }

  getTargets()
  {
    return this.TARGETS;
  }
}
