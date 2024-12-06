import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

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
        <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;