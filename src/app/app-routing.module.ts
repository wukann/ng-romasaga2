import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmorComponent } from './pages/armor.component';

const routes: Routes = [
  { path: '', redirectTo: '/armor', pathMatch: 'full' },
  { path: 'armor', component: ArmorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
