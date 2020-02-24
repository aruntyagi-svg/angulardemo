import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageGymComponent } from './manage-gym/manage-gym.component';
import { AddGym1Component } from './add-gym/add-gym1/add-gym1.component';
import { AddGym2Component } from './add-gym/add-gym2/add-gym2.component';
import { WalletComponent } from './wallet/wallet.component';
import { GymProfileComponent } from './gym-profile/gym-profile.component';
import { VendorComponent } from './vendor.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'vendor', component: VendorComponent,
     children: [
      { path: 'manage-gym', component: ManageGymComponent },
      { path: 'add-gym1', component: AddGym1Component },
      { path: 'add-gym2', component: AddGym2Component },
      { path: 'wallet', component: WalletComponent },
      { path: 'gym-details', component: GymProfileComponent },
     // {path: '**', component: PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
