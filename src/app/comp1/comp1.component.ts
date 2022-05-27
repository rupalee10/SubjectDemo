import { Component, OnInit } from '@angular/core';
import { DesignserviceService } from '../designservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  username;

  constructor(private _designsevices: DesignserviceService) {
    this._designsevices.userName.subscribe((uname) => {
      this.username = uname;
    });
  }
  //username: string = 'UXtrendz';
  // username: string;
  ngOnInit(): void {}

  updateusername(uname) {
    // this.username =uname.value;
    this._designsevices.userName.next(uname.value);
  }
}
