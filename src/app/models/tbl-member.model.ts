export interface TblMember {
  id: number | string;
  type: string;
  member_name: string;
  hp_url: string;
  instagram_url: string;
  twitter_url: string;
  facebook_url: string;
  note: string;
  avatar: string;
}

export interface TblMemberRaw {
  id: number | string;
  type: string;
  attributes: {
    member_name: string;
    hp_url: string;
    instagram_url: string;
    twitter_url: string;
    facebook_url: string;
    note: string;
  }
}
