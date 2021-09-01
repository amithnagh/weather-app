import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './views/weather-detail/weather-detail.component';
import { WeatherHomeComponent } from './views/weather-home/weather-home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherTileComponent } from './components/weather-tile/weather-tile.component';
import { FieldComponent } from './components/field/field.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastTileComponent } from './components/forecast-tile/forecast-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    WeatherHomeComponent,
    HeaderComponent,
    FooterComponent,
    WeatherTileComponent,
    FieldComponent,
    ForecastTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
