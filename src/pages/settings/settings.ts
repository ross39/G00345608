import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  /*constructor(public navCtrl: NavController, public navParams: NavParams, private push: Push) {
  }

  checkForPermissions(){
  	this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
*/
}
