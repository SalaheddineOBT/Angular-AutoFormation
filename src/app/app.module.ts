import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { PersonneService } from './services/personne.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LogenService } from './services/login.service';
import { DepartementService } from './services/departement.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PersonneService,
    LogenService,
    DepartementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
