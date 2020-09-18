import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PlansComponent } from './routes/plans/plans.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent
}, {
  path: 'plans',
  component: PlansComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
