// Angular modules
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';

// Api
import { Api } from './http/api';
import { TblCategoryApi } from './http/tbl-category.api';
import { TblArticleApi } from './http/tbl-article.api';
import { TblMemberApi } from "./http/tbl-member.api";
import { AuthApi } from './http/auth.api';
import { AuthService } from './services/auth.service';
import { HelpersService } from './services/helpers.service';
import { SearchService } from './services/search.service';
import { TemplateService } from "./services/template.service";
import { TblPickupApi } from './http/tbl-pickup.api';


@NgModule({})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        Api,
        TblCategoryApi,
        TblArticleApi,
        TblMemberApi,
        TblPickupApi,
        AuthApi,
        AuthService,
        HelpersService,
        SearchService,
        TemplateService,
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
