import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NgbdCarouselBasic } from './carousel-basic/carousel-basic.component';
import { PricesComponent } from './prices/prices.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PricesService } from './services/prices.service';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { PricetableComponent } from './pricetable/pricetable.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AuthService } from './services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NgbdCarouselBasic,
    PricesComponent,
    CardsComponent,
    FooterComponent,
    PricetableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxPageScrollCoreModule.forRoot({duration: 2000}),
    FontAwesomeModule,

  ],
  providers: [PricesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
