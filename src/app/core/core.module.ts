import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class CoreModule { }
