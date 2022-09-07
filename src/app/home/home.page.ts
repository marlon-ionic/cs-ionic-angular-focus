import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('mybutton') mybutton;
  @ViewChild('myselect') myselect;
  @ViewChild('myselectitem') myselectitem: IonItem;
  constructor() { }

  focusSelect() {
    console.log('myselectitem', this.myselectitem);
    console.log('focusSelect', this.myselect.el.shadowRoot.querySelector('button#ion-sel-0'));
    this.myselect.el.shadowRoot.querySelector('button#ion-sel-0').focus();
  }

  blurSelect() {
    this.myselect.el.blur();
  }
}
