import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from 'src/services/shared-services.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private shareService:SharedServicesService) { }

  ngOnInit() {
    this.shareService.sendRefresh()

  }

}
