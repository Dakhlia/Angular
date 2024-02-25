import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetProdComponent } from './det-prod/det-prod.component';
import { AppartementComponent } from './appartement/appartement.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ApartFormComponent } from './apart-form/apart-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ResidenceComponent,
    NotFoundComponent,
    DetProdComponent,
    AppartementComponent,
    ReactiveformComponent,
    ApartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
