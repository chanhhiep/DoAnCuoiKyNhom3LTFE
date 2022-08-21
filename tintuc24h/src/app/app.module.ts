import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { SecurityComponent } from './components/security/security.component';
import { FinanceComponent } from './components/finance/finance.component';
import { SportComponent } from './components/sport/sport.component';
import { FashionHitechComponent } from './components/fashion-hitech/fashion-hitech.component';
import { FoodComponent } from './components/food/food.component';
import { BeautifyComponent } from './components/beautify/beautify.component';
import { EducationComponent } from './components/education/education.component';
import { LifeStyleComponent } from './components/life-style/life-style.component';
import { MusicComponent } from './components/music/music.component';
import { WeirdComponent } from './components/weird/weird.component';
import { ItComponent } from './components/it/it.component';
import { OtoComponent } from './components/oto/oto.component';
import { MarketComponent } from './components/market/market.component';
import { TravelComponent } from './components/travel/travel.component';
import { HealthComponent } from './components/health/health.component';
import { FunnyComponent } from './components/funny/funny.component';
import { AsianCupComponent } from './components/asian-cup/asian-cup.component';
import { FootballComponent } from './components/football/football.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    EntertainmentComponent,
    SecurityComponent,
    FinanceComponent,
    SportComponent,
    FashionHitechComponent,
    FoodComponent,
    BeautifyComponent,
    EducationComponent,
    LifeStyleComponent,
    MusicComponent,
    WeirdComponent,
    ItComponent,
    OtoComponent,
    MarketComponent,
    TravelComponent,
    HealthComponent,
    FunnyComponent,
    AsianCupComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
