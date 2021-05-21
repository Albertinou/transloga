import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/service/prices.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  price: any;
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

    this.pricesservice.create_Newprice(Record).then(res => {
      
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

  EditRecord(Record){
    Record.isedit = true;
    Record.editCompany = Record.company;
    Record.editPriceTwenty = Record.priceTwenty;
    Record.editPriceFourty = Record.priceFourty;
    Record.editLoadingPort = Record.loadingPort;
    Record.editDestinationPort = Record.destinationPort;

  }

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
      console.log(this.price);
      
      
    });
  }

}
