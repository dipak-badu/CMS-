// The useAuth hook is a custom hook that allows components to access the authentication context. It uses the useContext hook to consume the AuthContext and provides the login function to the components that need it. This hook simplifies the process of accessing the authentication context and makes it easier for components to perform login operations without having to directly interact with the context provider.
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const useAuth = () => {
  const { login, authUser, authLoading } = useContext(AuthContext);
  return { login, authUser, authLoading };
};

//! AuthContext -> AuthProvider -> useAuth -> LoginForm
// AuthContext -> function decleration
// AuthProvider -> function definition
// useAuth -> custom hook to consume the context
// LoginForm -> component that uses the useAuth hook to perform login operations
