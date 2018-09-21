import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/ts/app.component';
import { HeroesComponent } from './components/ts/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/ts/hero-detail.component';
import { LoonaDetailComponent } from './components/ts/loona-detail.component';
import { MessagesComponent } from './components/ts/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/ts/dashboard.component';
import { LoonaComponent } from './loona/loona.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { SomethingComponent } from './something/something.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    LoonaDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LoonaComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
