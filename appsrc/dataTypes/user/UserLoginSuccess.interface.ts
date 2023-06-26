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
  error: UserLoginFail;
  user: UserLoginSuccess;
  currentCompanyIndex: number;
}

interface UserLoginFail {
  code: number;
  error: string;
}

export type {UserLoginSuccess, UserReducerModal, UserLoginFail};
