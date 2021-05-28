import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './prices/prices.component';
import { AdminGuard } from './guards/admin.guard'



const routes: Routes = [
 { path: 'prices', component: PricesComponent, canActivate: [AdminGuard]},
 { path: '', redirectTo: '/' ,pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
