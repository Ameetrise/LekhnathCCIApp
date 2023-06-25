export interface MembersItemSuccessItem {
  id: string;
  cName: string;
  cLogo: string;
  facebook: string;
  website: string;
  phone: string;
  category: string;
  address: string;
  time: string;
  email: string;
  description: string;
  owner: {name: string};
  imageGallery: string[];
}

interface MembersItemSuccess {
  companies: MembersItemSuccessItem[];
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
// export type MembersItemList = {data: MembersItemSuccess[]; meta: MembersMeta};
export type MembersItemList = MembersItemSuccess;

export type {MembersItemSuccess, MembersMeta};
