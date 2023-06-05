interface UserLoginSuccess {
  id: string;
  name: string;
  userName: string;
  companies: [{id: string; cname: string; clogo: string}];
  phone: number;
  email: string;
  regNo: number;
  userRole: string;
  userImage: string;
  currentCompanyIndex: number;
}

interface UserReducerModal {
  user: UserLoginSuccess;
  currentCompanyIndex: number;
}

export type {UserLoginSuccess, UserReducerModal};
