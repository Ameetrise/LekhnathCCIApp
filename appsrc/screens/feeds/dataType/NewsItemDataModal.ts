interface NewsItemDataModal {
  id: string;
  title: string;
  body: string;
  created_at: string;
  author: string;
  news_img: string;
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

export type NewItemList = {data: NewsItemDataModal[]; meta: NewsMeta};

export type {NewsItemDataModal, NewsMeta};
