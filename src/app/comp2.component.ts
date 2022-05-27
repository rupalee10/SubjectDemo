import { Component } from '@angular/core';

Component({
  selector: 'comp2',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
});
export class Comp2Component {
  // @Input() name: string;
}
