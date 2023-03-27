export interface signUpUser {
  name: string;
  login: string;
  password: string;
}

export interface signedUser {
  _id: string;
  name: string;
  login: string;
}

export interface loginUser {
  login: string;
  password: string;
}
