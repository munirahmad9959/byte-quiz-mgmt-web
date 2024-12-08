import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage"
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.auth.token));
  console.log("Token is 10:46pm:", useSelector((state) => state.auth.token));
  console.log("Is Auth:", isAuth);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={isAuth ? <Dashboard /> : <Navigate to="/login" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;