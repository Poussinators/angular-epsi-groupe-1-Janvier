import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
