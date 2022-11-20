import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  active: any
  routerUrl: any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routerUrl=this.router.url
  }

}
