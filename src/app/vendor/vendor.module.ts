import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { AddGym1Component } from './add-gym/add-gym1/add-gym1.component';
import { AddGym2Component } from './add-gym/add-gym2/add-gym2.component';
import { GymProfileComponent } from './gym-profile/gym-profile.component';
import { ManageGymComponent } from './manage-gym/manage-gym.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    VendorComponent,
    AddGym1Component,
    AddGym2Component,
    GymProfileComponent,
    ManageGymComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
