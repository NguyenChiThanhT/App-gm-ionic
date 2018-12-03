// Angular modules
import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {

  handleErrorAvatar($event){
    $event.target.src = '../../../assets/imgs/logo.png';
  }
}
