import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetProdComponent } from './det-prod/det-prod.component';
import { AppartementComponent } from './appartement/appartement.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'residence',component:ResidenceComponent},
    {path:'',redirectTo:"/home",pathMatch:"full"},
    {path:'product/:id',component:DetProdComponent},
    {path:'App/:id',component:AppartementComponent},
    {path:'login',component:ReactiveformComponent},
    {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
