interface MembersItemSuccess {
  id: string;
  lcci: string;
  token: string;
  cname: string;
  oname: string;
  email: string;
  regDate: string;
  website: string;
  description: string;
  fb: string;
  approval: string;
  cover_pic: string;
  profile_pic: string;
  google: string;
  phone: string;
  address: string;
  time: string;
  category: string;
  position: string;
  utype: string;
  Member_Team: [
    {
      id: number;
      approve: string;
      member_id: string;
      title: string;
      image: string;
      created_at: string;
      updated_at: string;
    },
  ];
}

interface MembersMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
export type MembersItemList = {data: MembersItemSuccess[]; meta: MembersMeta};

export type {MembersItemSuccess, MembersMeta};
