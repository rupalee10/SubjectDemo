import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DesignserviceService {
  constructor() {}
  //userName = new Subject<any>();
  userName = new BehaviorSubject('UItrends');
}
