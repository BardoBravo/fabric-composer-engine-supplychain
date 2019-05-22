/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { EngineComponent } from './Engine/Engine.component';
import { CarComponent } from './Car/Car.component';

import { MemberComponent } from './Member/Member.component';
import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { MerchantComponent } from './Merchant/Merchant.component';

import { EngineMerchantTransferComponent } from './EngineMerchantTransfer/EngineMerchantTransfer.component';
import { EngineCarInstallationComponent } from './EngineCarInstallation/EngineCarInstallation.component';
import { EngineCreationComponent } from './EngineCreation/EngineCreation.component';
import { CarCreationComponent } from './CarCreation/CarCreation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Engine', component: EngineComponent },
  { path: 'Car', component: CarComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Merchant', component: MerchantComponent },
  { path: 'EngineMerchantTransfer', component: EngineMerchantTransferComponent },
  { path: 'EngineCarInstallation', component: EngineCarInstallationComponent },
  { path: 'EngineCreation', component: EngineCreationComponent },
  { path: 'CarCreation', component: CarCreationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
