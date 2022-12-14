import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from 'src/services/shared-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shareService:SharedServicesService) { }

  ngOnInit(): void {
    this.shareService.sendRefresh()
  }

}
