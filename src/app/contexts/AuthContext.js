import { createContext, useCallback, useEffect, useState } from "react";
// import { localStorageKeys } from "../config/localStorageKeys";
// import { usersService } from "../services/usersService/index";
// import { useQuery } from "@tanstack/react-query";
// import { httpClient } from "../services/HttpClient";
// import toast from "react-hot-toast";
// import { PageLoader } from "../../view/components/PageLoader";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // const [signedIn, setSignedIn] = useState(() => {
  //   const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  //   return Boolean(storedAccessToken);
  // });

  // const setAccessToken = useCallback((accessToken) => {
  //   httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
  // }, []);

  // useEffect(() => {
  //   const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  //   if (storedAccessToken) {
  //     setAccessToken(storedAccessToken);
  //   }
  // }, [setAccessToken]);

  // const { isError, isFetching, isSuccess, remove } = useQuery({
  //   queryKey: ['users', 'me'],
  //   queryFn: () => usersService.me(),
  //   enabled: signedIn,
  //   staleTime: Infinity,
  // });

  // const signin = useCallback((accessToken) => {
  //   localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
  //   setAccessToken(accessToken);
  //   setSignedIn(true);
  // }, [setAccessToken]);

  // const signout = useCallback(() => {
  //   localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
  //   remove();
  //   setSignedIn(false);
  // }, [remove]);

  // useEffect(() => {
  //   if (isError) {
  //     signout();
  //     toast.error('Sessão expirada. Por favor, faça login novamente.');
  //   }
  // }, [isError, signout]);

  // if (isFetching) {
  //   return <PageLoader />;
  // }

  // return (
  //   <AuthContext.Provider value={{
  //     signedIn: isSuccess && signedIn,
  //     signin,
  //     signout
  //   }}>
  //     {children}
  //   </AuthContext.Provider>
  // );

  return (
    <AuthContext.Provider value={{
      signedIn: false,
      signin: () => {},
      signout: () => {}
    }}>
      {children}
    </AuthContext.Provider>
  );
}