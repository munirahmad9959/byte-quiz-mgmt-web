import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  console.log("Token is 1:35:", useSelector((state) => state.token));



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teacher-dashboard" element={<Dashboard />} />
        <Route path="/student-dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



