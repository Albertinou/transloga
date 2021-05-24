import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './prices/prices.component';
import { CardsComponent } from './cards/cards.component';
import { PricetableComponent } from './pricetable/pricetable.component';

const routes: Routes = [
  { path: 'cards', component:CardsComponent},
  { path: 'prices', component:PricesComponent},
  { path: 'pricetable', component:PricetableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
