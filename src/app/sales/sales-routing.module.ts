import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
//import { CalculatorComponent } from '../calculator/calculator.component';
import { TargetsComponent } from './targets/targets.component';
import { SpwalletComponent } from './spwallet/spwallet.component';
import { PaymoneyComponent } from './paymoney/paymoney.component';
import { SalesComponent } from './sales.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [

  {
    path: 'sp',component:SalesComponent,
    children: [
      // { path: 'history', component: HistoryComponent },
      // { path: 'add-vendor', component: AddvendorComponent },
      // { path: 'calculator', component: CalculatorComponent },
      // { path: 'targets', component: TargetsComponent },
      // { path: 'wallet', component: SpwalletComponent },
      // { path: 'paymoney', component: PaymoneyComponent },
      //{path: '**', component: PageNotFoundComponent}
      // { path: 'paymoney', component: PaymoneyComponent, canDeactivate:[PageleaveGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
