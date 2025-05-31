import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/Login";
import { Home } from "../view/pages/Home";
import { AuthLayout } from "../view/layouts/AuthLayouts";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public Routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/" element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
