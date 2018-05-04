import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import {ChatPage} from '../chat/chat';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	username:string = "";

  constructor(public navCtrl: NavController,
  	private alertCtrl: AlertController){

  }
  showAlert(title:string, message:string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }

loginUser(){
	if(/^[a-zA-z0-9]+$/.test(this.username)){
		//make sure its good
		this.navCtrl.push(ChatPage, {
			username: this.username
		});
	}else{
		this.showAlert('Error','Invalid username');  
	}
}

settingsPage(){
   this.navCtrl.push(SettingsPage);
}
}
