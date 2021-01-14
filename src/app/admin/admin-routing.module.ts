import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: 'main', component: ComponentsComponent,
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
