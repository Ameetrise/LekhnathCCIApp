export interface NewsItemDataModal {
  title: string;
  description: string;
  createdAt: string;
  newsImage: string;
  author: {
    name: string;
    userRole: string;
    id: string;
  };
  id: string;
}
interface NewsMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export type NewItemList = {feeds: NewsItemDataModal[]};

export type {NewsMeta};
