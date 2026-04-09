// provider component is responsible for providing the context value to the components that need it. It is a wrapper component that takes the children as a prop and renders them inside the provider. The provider component also defines the logic for the context value, such as the login function in this case, which will be passed down to the components that consume the context.
import { useState, type ReactNode } from "react";
import type {
  ICredential,
  IUserdetail,
} from "../../component/auth/Auth.contract";
import AuthContext from "../AuthContext";
import axiosInstance from "../../config/ApiClint";
import Cookies from "js-cookie";

export default function AuthProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [authUser, setAuthuser] = useState<IUserdetail | null>(null);
  const getLoggedInUser = async () => {
    try {
      const loggedInUser: IUserdetail = await axiosInstance.get("auth/me");
      setAuthuser(loggedInUser);
      console.log(loggedInUser);
      return loggedInUser;
    } catch (exception: any) {
      console.log(exception);
      throw exception;
    }
  };

  const login = async (credintials: ICredential): Promise<IUserdetail> => {
    try {
      //! axios
      const response = (await axiosInstance.post("auth/login", {
        ...credintials,
        expiresInMinutes: 24 * 60,
      })) as { accessToken: string };
      Cookies.set("auth_key", response.accessToken, {
        expires: 1,
        sameSiteme: "lax",
        secure: true,
      });

      return (await getLoggedInUser()) as IUserdetail; //! this is the better way to get the logged in user details after login, because it will set the authUser state and also return the logged in user details to the caller. this way we can avoid making multiple API calls to get the logged in user details in different components. we can just call the getLoggedInUser function once after login and it will set the authUser state and return the logged in user details to the caller.
      // return await getLoggedInUser();
    } catch (exception: any) {
      console.log(exception);
      throw exception;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login: login,
        authUser: authUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
