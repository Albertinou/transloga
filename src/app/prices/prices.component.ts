import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/services/prices.service';

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
    Record['loadingPort'] = this.loadingPort;
    Record['destinationPort'] = this.destinationPort;
    Record['priceTwenty'] = this.shippingPriceTwenty;
    Record['priceFourty'] = this.shippingPriceFourty;
    Record['company'] = this.companyName;
    
    

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

  EditRecord(record){
    console.log(record);
    record.isedit = true;
    record.editloadingport = record.loadingPort;
    record.editDestinationPort = record.destinationPort;
    record.editPriceTwenty = record.priceTwenty;
    record.editPriceFourty = record.priceFourty;
    record.editCompany = record.company;
  }

  updaterecord(recorddata){
    let record = {};
    record['loadingPort'] = recorddata.editloadingport;
    record['destinationPort'] = recorddata.editDestinationPort;
    record['priceTwenty'] = recorddata.editPriceTwenty;
    record['priceFourty'] = recorddata.editPriceFourty;
    record['company'] = recorddata.editCompany;
    this.pricesservice.update_price(recorddata.id, record);
    recorddata.isedit = false;
  }

  DeleteRecord(record_id){
    this.pricesservice.delete_price(record_id);
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
    });
  }
}
