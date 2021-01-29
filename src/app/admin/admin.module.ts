import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AdminRoutingModule } from './admin-routing.module';
import {MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';



@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
