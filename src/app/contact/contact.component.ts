import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: any;
  name: string;
  companyName: string;
  message: string;


  constructor(public contactservice:ContactService) { }

  CreateRecord(){
    let record = {};
    record['name'] = this.name;
    record['companyName'] = this.companyName;
    record['message'] = this.message;

    this.contactservice.create_newcontact(record).then(res => {
      
      this.name = "";
      this.companyName= "";
      this.message= "";
      console.log(res);
    }).catch(error => {
      console.log(error);
    })

  }

  ngOnInit(): void {
  
  }

}