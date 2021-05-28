import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/services/prices.service';

@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.scss']
})
export class PricetableComponent implements OnInit {
  price: any;
  companyName: string;
  shippingPriceTwenty: number;
  shippingPriceFourty: number;
  loadingPort: string;
  destinationPort: string;

  constructor(public pricesservice:PricesService) { }

  ngOnInit(): void {
    this.pricesservice.get_Allprices().subscribe(data =>{
      this.price = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          company: e.payload.doc.data()['company'],
          priceTwenty: e.payload.doc.data()['priceTwenty'],
          priceFourty: e.payload.doc.data()['priceFourty'],
          loadingPort: e.payload.doc.data()['loadingPort'],
          destinationPort: e.payload.doc.data()['destinationPort']
        }
      });
    });
  }

}
