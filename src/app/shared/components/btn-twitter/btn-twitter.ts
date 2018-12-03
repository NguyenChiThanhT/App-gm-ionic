import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect';


@Component({
  selector: 'btn-twitter',
  templateUrl: 'btn-twitter.html'
})
export class BtnTwitterComponent {

  constructor(public tw: TwitterConnect) {
  }

  onSuccess(response) {
    // do something
  }

  onError(error) {
    // handle error

  }

  onLoginTwitter() {
    this.tw.login().then(this.onSuccess, this.onError);
  }
}
