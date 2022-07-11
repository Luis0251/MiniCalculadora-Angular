import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniCalculadora';
  numero1: number= 0;
  numero2: number = 0;
  result : number = 0;

  suma():void {
    this.result = this.numero1 + this.numero2;
  }
  resta():void {
    this.result = this.numero1 - this.numero2;
  }
  multiplicar():void {
  this.result = this.numero1 * this.numero2;
  }

}
