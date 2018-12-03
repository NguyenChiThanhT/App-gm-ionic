import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest, HttpEvent,
  HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import { LoadingController } from 'ionic-angular';
import _ from 'lodash';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  maxRequestId: number;
  requestUniqueIds: any[];
  loadingInstance: any;

  constructor(public loadingCtrl: LoadingController) {
    this.maxRequestId = 0;
    this.requestUniqueIds = [];
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const requestId = this.showLoadingModal();

    // const accessToken = localStorage.getItem('accessToken');
    const clonedReq = req.clone();

    return next.handle(clonedReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.hideLoadingModal(requestId);
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
          // Clean up the store & redirect to login page
          // this.userService.cleanUp();
        }
      }
    });
  }

  private showLoadingModal(): number {
    if (!this.loadingInstance) {
      this.loadingInstance = this.loadingCtrl.create({
        spinner: 'crescent',
        duration: 3000
      });
      this.loadingInstance.present();
    }

    const requestId = this.maxRequestId++;
    this.requestUniqueIds.push(requestId);

    return requestId;
  }

  private hideLoadingModal(requestId: number) {
    this.requestUniqueIds = _.filter(this.requestUniqueIds, (v) => {
      return v != requestId
    });

    if (this.loadingInstance && this.requestUniqueIds.length === 0) {
      this.loadingInstance.dismiss();
      this.loadingInstance = null;
    }
  }
}
