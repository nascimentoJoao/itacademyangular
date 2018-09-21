import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./components/ts/heroes.component";

import { DashboardComponent } from "./components/ts/dashboard.component";
import { HeroDetailComponent } from "./components/ts/hero-detail.component";

import { LoonaDetailComponent } from "./components/ts/loona-detail.component";
import { LoonaComponent } from "./loona/loona.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'memberDetail/:id', component: LoonaDetailComponent},
  { path: 'members', component: LoonaComponent },
  { path: '', redirectTo: '/dashboard', pathMatch:'full'}
];

@NgModule({
  exports:[ RouterModule ],
  imports:[ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
}


