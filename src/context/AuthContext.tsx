import { createContext } from "react";
import type { ICredential, IUserdetail } from "../component/auth/Auth.contract";
export interface IAuthContext {
  login(credintials: ICredential): Promise<void | IUserdetail>;
  authUser?: IUserdetail | null;
}

const AuthContext = createContext<IAuthContext>({
  async login() {}, // this is the call back function that will be called when the user submits the login form. It takes the user's credentials as an argument and performs the login logic, such as sending a request to the server and handling the response. The function is defined as an asynchronous function, which allows it to handle asynchronous operations like API calls. its full definition will be provided in the AuthProvider component, where the actual login logic will be implemented.
  authUser: null,
});
export default AuthContext;
