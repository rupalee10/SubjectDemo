import { Component, OnInit } from '@angular/core';
import { DesignserviceService } from '../designserviceservice.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
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
