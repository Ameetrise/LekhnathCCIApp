interface MembersItemSuccess {
  id: string;
  cname: string;
  oname: string;
  phone: string;
  address: string;
  time: string;
  category: string;
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
