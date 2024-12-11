import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component'
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HOMEComponent },
  {path: 'features', component: FeaturesComponent},
  {path: 'about', component: AboutComponent },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
