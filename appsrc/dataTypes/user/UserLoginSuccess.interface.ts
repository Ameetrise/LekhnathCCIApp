interface UserLoginSuccess {
  user: {
    id: string;
    name: string;
    userName: string;
    phone: string;
    userRole: string;
    userImage: string;
    isActive: boolean;
    companyList: {
      id: string;
      cName: string;
      cLogo: string;
      imageGallery: string[];
      owner: string;
    }[];
  };
  token: string;
}

interface UserReducerModal {
  user: UserLoginSuccess;
  currentCompanyIndex: number;
}

export type {UserLoginSuccess, UserReducerModal};
