import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './views/weather-detail/weather-detail.component';
import { WeatherHomeComponent } from './views/weather-home/weather-home.component';

const routes: Routes = [
  {
  path: 'home',
  component: WeatherHomeComponent,
  },
  { path: 'detail/:city',
    component: WeatherDetailComponent  
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
