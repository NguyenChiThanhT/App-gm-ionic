import { TblMember } from './tbl-member.model';

export interface TblArticle {
  id: number | string;
  image_url: string;
  layout_flag: number;
  title: string;
  view_count: number;
  author: TblMember
}
