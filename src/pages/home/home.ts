import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SqlServiceProvider } from '../../providers/sql-service/sql-service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private sqlServiceProvider:SqlServiceProvider) {

  }

}
