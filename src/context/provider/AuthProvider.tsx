// provider component is responsible for providing the context value to the components that need it. It is a wrapper component that takes the children as a prop and renders them inside the provider. The provider component also defines the logic for the context value, such as the login function in this case, which will be passed down to the components that consume the context.
import { useEffect, useState, type ReactNode } from "react";
import type {
  ICredential,
  IUserdetail,
} from "../../component/auth/Auth.contract";
import AuthContext from "../AuthContext";
import axiosInstance from "../../config/ApiClint";
import Cookies from "js-cookie";
import Loading from "../../component/ui/loading/Loading";
// import { get } from "react-hook-form";

export default function AuthProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [authUser, setAuthuser] = useState<IUserdetail | null>(null); // this state is used to store the details of the logged in user. it is set to null when the user is not logged in and set to the user details when the user is logged in. it is also used to provide the logged in user details to the components that consume the context.

  const [authLoading, setAuthLoading] = useState<boolean>(false); //! this state is used to show the loading state while the authentication process is going on. it is set to true when the login function is called and set to false when the login process is completed. it is also used to show the loading state while fetching the logged in user details when the component is mounted.
  const getLoggedInUser = async () => {
    try {
      const loggedInUser: IUserdetail = await axiosInstance.get("auth/me");
      setAuthuser(loggedInUser);
      // console.log(loggedInUser);
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
        sameSite: "lax",
        secure: true,
      });

      return (await getLoggedInUser()) as IUserdetail; //! this is the better way to get the logged in user details after login, because it will set the authUser state and also return the logged in user details to the caller. this way we can avoid making multiple API calls to get the logged in user details in different components. we can just call the getLoggedInUser function once after login and it will set the authUser state and return the logged in user details to the caller.
      // return await getLoggedInUser();
    } catch (exception: any) {
      console.log(exception);
      throw exception;
    } finally {
      setAuthLoading(false);
    } //! this will ensure that the loading state is set to false after the login process is completed, regardless of whether it was successful or not. this way we can show the loading state while the login process is going on and hide it when the process is completed.
  };

  useEffect(() => {
    const token = Cookies.get("auth_key");
    if (token) {
      getLoggedInUser();
    }
    setAuthLoading(false);
  }, []); //! this useEffect is used to check if the user is already logged in when the component is mounted. it checks for the presence of the auth_key cookie, and if it exists, it calls the getLoggedInUser function to fetch the logged in user details and set the authUser state. it also sets the authLoading state to false after the authentication process is completed. this way we can ensure that the user is authenticated and we have the logged in user details available in the context when the component is rendered.

  return authLoading ? (
    <section>
      <Loading></Loading>
    </section>
  ) : (
    // if the authentication process is still going on, we can show a loading state to the user. this is optional, but it can improve the user experience by providing feedback that something is happening in the background while the authentication process is going on.
    <AuthContext.Provider
      value={{
        login: login,
        authUser: authUser,
        getLoggedInUser: getLoggedInUser,
        authLoading: authLoading, // we can also pass the authLoading state in the context value, so that the components that consume the context can also access it and show the loading state if needed.
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
