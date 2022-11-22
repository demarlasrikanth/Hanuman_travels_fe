import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from 'src/services/shared-services.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(private shareService:SharedServicesService) {
    this.shareService.getRefresh()
   }

  ngOnInit(): void {
  }

}
