interface SignInWithGoogleSuccessModal {
  idToken: string | null;
  serverAuthCode: string | null;
  scopes?: Array<string> | undefined;
  user: {
    email: string | null;
    id: string | null;
    givenName: string | null;
    familyName: string | null;
    photo: string | null; // url
    name: string | null; // full name
  };
}
export default SignInWithGoogleSuccessModal;
