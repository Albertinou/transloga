import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/service/prices.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  price: string;
  companyName: string;
  shippingPriceTwenty: number;
  shippingPriceFourty: number;
  loadingPort: string;
  destinationPort: string;
  message: string;
  constructor(public pricesservice:PricesService) { }

  CreateRecord(){
    let Record = {};
    Record['company'] = this.companyName;
    Record['priceTwenty'] = this.shippingPriceTwenty;
    Record['priceFourty'] = this.shippingPriceFourty;
    Record['loadingPort'] = this.loadingPort;
    Record['destinationPort'] = this.destinationPort;

    this.pricesservice.create_Newemployee(Record).then(res => {
      
      this.companyName = "";
      this.shippingPriceTwenty = undefined;
      this.shippingPriceFourty = undefined;
      this.loadingPort= "";
      this.destinationPort= "";
      console.log(res);
      this.message = "New price added to firebase database";
    }).catch(error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
