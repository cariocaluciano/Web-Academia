import { Outlet } from "react-router-dom";

import logo from '../../assets/logos/logo.svg';
import image from '../assets/images/login-image.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full justify-center items-center gap-48">
      <div className="">
        <img src={image} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full max-w-[366px] flex justify-center items-center flex-col gap-8">
        <div className="w-full">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}