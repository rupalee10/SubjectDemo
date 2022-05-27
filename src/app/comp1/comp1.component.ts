import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from './design-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  username;

  constructor(private _designsevices: DesignServiceService) {
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
