export type CompanyItem = {
  cName?: string;
  cLogo?: string;
  imageGallery?: string[];
  owner: string;
  address?: string;
  description?: string;
  email?: string;
  facebook?: string;
  phone?: string;
  time?: string;
  website?: string;
  id: string;
};

interface CompanyList {
  data: {
    companies: CompanyItem[];
  };
}

export type {CompanyList};
