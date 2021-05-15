import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/service/prices.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  employee: string;
  employeeName: string;
  shippingPrice: number;
  loadingPort: string;
  destinationPort: string;
  message: string;
  constructor(public pricesservice:PricesService) { }

  CreateRecord(){
    let Record = {};
    Record['company'] = this.employeeName;
    Record['price'] = this.shippingPrice;
    Record['loadingPort'] = this.loadingPort;
    Record['destinationPort'] = this.destinationPort;

    this.pricesservice.create_Newemployee(Record).then(res => {
      
      this.employeeName = "";
      this.shippingPrice = undefined;
      this.loadingPort= "";
      this.destinationPort= "";
      console.log(res);
      this.message = "New price added";
    }).catch(error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
