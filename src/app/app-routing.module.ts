import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './sales/history/history.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { VendorComponent } from './vendor/vendor.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  {path:'sp',component:DashboardComponent,canActivate:[AuthGuard]},
  //{path:'sp',component:SalesComponent},
 // {path:'vendor',component:VendorComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
