import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { AddvendorComponent } from './addvendor/addvendor.component';

import { HistoryComponent } from './history/history.component';
import { PaymoneyComponent } from './paymoney/paymoney.component';
import { SpwalletComponent } from './spwallet/spwallet.component';
import { TargetsComponent } from './targets/targets.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from '../directive/highlight.directive';

@NgModule({
  declarations: [
    SalesComponent,
    AddvendorComponent,
    CalculatorComponent,
    HistoryComponent,
    PaymoneyComponent,
    SpwalletComponent,
    TargetsComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ]
})
export class SalesModule { }
