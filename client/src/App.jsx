import "./App.css";
import FrontPage from "./screen/frontpage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import HomePage from "./screen/home.jsx";
import Login from "./screen/login.jsx";
import SignUp from "./screen/signup.jsx";
import ReportPage from "./screen/reports.jsx";
import LabProfile from "./screen/profile.jsx";
import { useEffect } from "react";
import CreateReport from "./screen/createReport.jsx";
function App() {
  const { isAuthUser, check } = useAuthStore();

  useEffect(() => {
    check();
  }, [check]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          path="/"
          element={!isAuthUser ? < FrontPage /> : <HomePage />}
        />
        <Route
          path="/login"
          replace
          element={!isAuthUser ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          replace
          element={!isAuthUser ? <SignUp /> : <Navigate to="/home" />}
        />
        <Route
          path="/report"
          replace
          element={isAuthUser ? <ReportPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          replace
          element={isAuthUser ? <LabProfile /> : <Navigate to="/" />}
        />
      <Route
        path="/CreateReport"
        replace
        element={isAuthUser ? <CreateReport /> : <Navigate to="/" />}
      />
    </Routes>
  </BrowserRouter >
  );
}

export default App;
