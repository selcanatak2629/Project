import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ClientHeaderComponent } from './components/layouts/client/client-header/client-header.component';
import { ClientLayoutComponent } from './components/layouts/client/client-layout/client-layout.component';
import { HomeComponent } from './components/home/home.component';
import { TravelplannerComponent } from './components/travelplanner/travelplanner.component';
import { SliderComponent } from './components/slider/slider.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { ClientFooterComponent } from './components/layouts/client/client-footer/client-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ClientHeaderComponent,
    ClientLayoutComponent,
    HomeComponent,
    TravelplannerComponent,
    SliderComponent,
    FilterComponent,
    CardComponent,
    ClientFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
