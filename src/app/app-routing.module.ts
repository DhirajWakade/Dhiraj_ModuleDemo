import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportComponent } from './sport/sport.component';
import { NewsComponent } from './news/news.component';
import { TechnologyComponent } from './technology/technology.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'news', component: NewsComponent },
  { path: 'sport', component: SportComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
