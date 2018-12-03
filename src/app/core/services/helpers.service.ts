// Angular modules
import { Injectable } from '@angular/core';
import { TblMember } from '../../models/tbl-member.model';
import { TblArticle } from '../../models/tbl-article.model';
import * as _ from 'lodash';
import { TblPickup } from '../../models/tbl-pickup.model';


@Injectable()
export class HelpersService {

  constructor() {
  }

  transformArticleApiResults(res: any) {
    return res.data.map((o) => {
      const articleObj = this.buildArticleObj(o);

      const authorId = _.get(o, 'relationships.tbl_member.data.id');
      articleObj.author = this.buildAuthorObj(authorId, res.included);

      return articleObj;
    });
  }

  transformPickupApiResults(res: any) {
    return res.data.map((o) => {
      return this.buildPickupObj(o);
    });
  }

  buildPickupObj(pickup: any) {
    let pickupObj = <TblPickup>{}; // Use this to init empty object with type check

    pickupObj.id = pickup.id;
    pickupObj = _.assign(pickupObj, pickup.attributes);

    return pickupObj;
  }

  buildArticleObj(article: any) {
    let articleObj = <TblArticle>{}; // Use this to init empty object with type check

    articleObj.id = article.id;
    articleObj = _.assign(articleObj, article.attributes);

    return articleObj;
  }

  buildAuthorObj(authorId: string | number, includedData: any[]) {
    let imgRoute = 'https://weboo.link/images/member_image';
    // Find the author data in included data
    const authorJsonObj: any = _.find(includedData, {
      id: authorId,
      type: 'tbl_member'
    });

    let authorObj = <TblMember>{}; // Use this to init empty object with type check
    authorObj.id = authorId;
    authorObj = _.assign(authorObj, authorJsonObj.attributes);
    authorObj.avatar = `${ imgRoute }/${ authorId }.jpg`;

    return authorObj;
  }
}

