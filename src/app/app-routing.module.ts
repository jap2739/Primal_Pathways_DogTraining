import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: 'about-us', component:AboutUsComponent},
  {path: 'schedule', component:ScheduleComponent},
  {path: '',redirectTo: '/about-us', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
