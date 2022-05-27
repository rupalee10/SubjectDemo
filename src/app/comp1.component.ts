import { Component } from '@angular/core';

Component({
  selector: 'comp1',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
});
export class Comp1Component {
  // @Input() name: string;
  username: string = 'UXtrendz';
}
