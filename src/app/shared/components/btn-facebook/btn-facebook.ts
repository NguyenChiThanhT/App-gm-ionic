import { Component } from '@angular/core';

// Facebook login
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'btn-facebook',
  templateUrl: 'btn-facebook.html'
})
export class BtnFacebookComponent {

  constructor(private fb: Facebook) {
  }

  // event login facebook
  onLoginFacebook() {
    this.fb.login(['public_profile'])
      .then((res) => {
        this.fb.api("/me", ['public_profile', 'email'])
          .then(res => {
            // call api registry with facebook

          })
          .catch(error => {
            // handle error

          })
      })
      .catch(e => {
        console.log('Error logging into Facebook', e)
      });
  }

}
