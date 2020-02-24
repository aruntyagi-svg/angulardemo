import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from '../sales/sales.component';
import { VendorComponent } from '../vendor/vendor.component';
import { DashboardComponent } from './dashboard.component';
import { HistoryComponent } from '../sales/history/history.component';
import { AddvendorComponent } from '../sales/addvendor/addvendor.component';

import { TargetsComponent } from '../sales/targets/targets.component';
import { SpwalletComponent } from '../sales/spwallet/spwallet.component';
import { PaymoneyComponent } from '../sales/paymoney/paymoney.component';
import { CalculatorComponent } from '../sales/calculator/calculator.component';
import { PageleaveGuard } from '../guards/pageleave.guard';
import { AuthGuard } from '../guards/auth.guard';
//import { CalculatorComponent } from '../sales/calculator/calculator.component';


const routes: Routes = [
  { path: '',redirectTo:'sp/history' ,pathMatch:'full' },
  {
    path: 'sp',component:DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: 'sp', component: SalesComponent ,canActivate:[AuthGuard]},
      { path: 'vendor', component: VendorComponent ,canActivate:[AuthGuard]},
      // Sales Person Module's Components
      { path: 'history', component: HistoryComponent ,canActivate:[AuthGuard]},
      { path: 'add-vendor', component: AddvendorComponent ,canActivate:[AuthGuard]},
      { path: 'calculator', component: CalculatorComponent ,canActivate:[AuthGuard]},
      { path: 'targets', component: TargetsComponent ,canActivate:[AuthGuard]},
      { path: 'wallet', component: SpwalletComponent ,canActivate:[AuthGuard]},
      { path: 'paymoney', component: PaymoneyComponent ,canActivate:[AuthGuard],canDeactivate:[PageleaveGuard]},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
