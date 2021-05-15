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
  employeeAge: number;
  employeeAddress: string;
  message: string;
  constructor(public pricesservice:PricesService) { }

  CreateRecord(){
    let Record = {};
    Record['name'] = this.employeeName;
    Record['age'] = this.employeeAge;
    Record['address'] = this.employeeAddress;

    this.pricesservice.create_Newemployee(Record).then(res => {
      
      this.employeeName = "";
      this.employeeAge = undefined;
      this.employeeAddress= "";
      console.log(res);
      this.message = "New price added";
    }).catch(error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
