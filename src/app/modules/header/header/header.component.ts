import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedServicesService } from 'src/services/shared-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  routerUrl: any
  public subscribtion!: Subscription;
  constructor(private router: Router, private shareServices: SharedServicesService,) {
    this.subscribtion = this.shareServices.getRefresh().subscribe(() => {
      this.routerUrl=this.router.url;
      
    })
  }

  ngOnInit(): void {
    this.routerUrl = this.router.url
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }
  home(){
    
  }
}
