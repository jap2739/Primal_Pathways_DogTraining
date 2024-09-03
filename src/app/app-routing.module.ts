import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'about-us', component:AboutUsComponent},
  {path: 'schedule', component:ScheduleComponent},
  {path: 'home', component:HomeComponent},
  {path: 'reviews', component:ReviewsComponent},
  {path: '',redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
