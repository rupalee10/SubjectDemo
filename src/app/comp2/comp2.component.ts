import { Component, OnInit } from '@angular/core';
import { DesignserviceService } from '../designserviceservice';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private _designsevices: DesignserviceService) {
    this._designsevices.userName.subscribe((uname) => {
      this.username = uname;
    });
  }
  username: string = 'UXtrendz';

  ngOnInit(): void {}
  updateusername(uname) {
    // this.username =uname.value;
    this._designsevices.userName.next(uname.value);
  }
}
