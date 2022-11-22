import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  private subject = new Subject<any>();
  
  constructor() { }
  sendRefresh() {
    this.subject.next("hello");
  }
  getRefresh(): Observable<any> {
    return this.subject.asObservable();
  }
}
