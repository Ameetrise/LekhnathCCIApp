interface UserLoginSuccess {
  id: string;
  name: string;
  userName: string;
  companies: [{id: string}];
  phone: number;
  email: string;
  regNo: number;
  userRole: string;
}

export default UserLoginSuccess;
