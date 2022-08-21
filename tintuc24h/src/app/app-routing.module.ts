import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsianCupComponent } from './components/asian-cup/asian-cup.component';
import { BeautifyComponent } from './components/beautify/beautify.component';
import { EducationComponent } from './components/education/education.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { FashionHitechComponent } from './components/fashion-hitech/fashion-hitech.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FoodComponent } from './components/food/food.component';
import { FootballComponent } from './components/football/football.component';
import { FunnyComponent } from './components/funny/funny.component';
import { HealthComponent } from './components/health/health.component';
import { HomeComponent } from './components/home/home.component';
import { ItComponent } from './components/it/it.component';
import { LifeStyleComponent } from './components/life-style/life-style.component';
import { MarketComponent } from './components/market/market.component';
import { MusicComponent } from './components/music/music.component';
import { NewsComponent } from './components/news/news.component';
import { OtoComponent } from './components/oto/oto.component';
import { SecurityComponent } from './components/security/security.component';
import { SportComponent } from './components/sport/sport.component';
import { TravelComponent } from './components/travel/travel.component';
import { WeirdComponent } from './components/weird/weird.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'asian_cup',component:AsianCupComponent},
  {path:'beautify',component:BeautifyComponent},
  {path:'education',component:EducationComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'fashion',component:FashionComponent},
  {path:'fashion-hitech',component:FashionHitechComponent},
  {path:'finance',component:FinanceComponent},
  {path:'food',component:FoodComponent},
  {path:'football',component:FootballComponent},
  {path:'funny',component:FunnyComponent},
  {path:'health',component:HealthComponent},
  {path:'it',component:ItComponent},
  {path:'life_style',component:LifeStyleComponent},
  {path:'market',component:MarketComponent},
  {path:'music',component:MusicComponent},
  {path:'oto',component:OtoComponent},
  {path:'security',component:SecurityComponent},
  {path:'sport',component:SportComponent},
  {path:'travel',component:TravelComponent},
  {path:'weird',component:WeirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
