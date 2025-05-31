import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../app/hooks/useAuth";

export function AuthGuard({ isPrivate }) {
  const signedIn  = false;

  console.log({signedIn, isPrivate})

  if(signedIn && !isPrivate) {
    return <Navigate to='/' replace />
  }

  if(!signedIn && isPrivate) {
    return <Navigate to='/login' replace/>
  }

  return <Outlet />
}