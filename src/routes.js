import { Route, Routes } from "react-router-dom";
import AuthPage from "./examples/pages/Auth/AuthPage";
import { Player } from "./examples/audio/player";

export default function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      <Route path="/" element={<Player></Player>}></Route>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false}></AuthPage>}
      ></Route>

      <Route path="*" element={<h2>404</h2>}></Route>
    </Routes>
  );
}
