import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('mybutton') mybutton;
  constructor() { }

  focus() {
    setTimeout(() => {
    this.mybutton.el.focus();
    }, 1000);
  }

  blur() {
    this.mybutton.el.blur();
  }

  click() {
    alert('button action');
  }

}
