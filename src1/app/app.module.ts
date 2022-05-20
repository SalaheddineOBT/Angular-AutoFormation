import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { NaveComponent } from './NaveBar/nave.component';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './home/home.component';
import { NaveService } from './NaveBar/nave.service';
import { EventComponent } from './events/event.component';
import { Event2Component } from './events/event2.component';

@NgModule({
  declarations: [
    AppComponent,
    NaveComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EventComponent,
    Event2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      NaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
