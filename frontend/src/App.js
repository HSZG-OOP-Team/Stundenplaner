import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import ResetPasswordPage from "./pages/forgot-password/ResetPasswordPage";
import PasswordChangedPage from "./pages/forgot-password/PasswordChangedPage";

function App() {
  const [page, setPage] = useState("login");

  if (page === "forgot-password") {
    return (
      <ForgotPasswordPage
        onSend={() => setPage("reset-password")}
      />
    );
  }

  if (page === "reset-password") {
    return (
      <ResetPasswordPage
        onChangePassword={() => setPage("password-changed")}
      />
    );
  }

  if (page === "password-changed") {
    return (
      <PasswordChangedPage
        onBackToLogin={() => setPage("login")}
      />
    );
  }

  return (
    <LoginPage
      onForgotPassword={() => setPage("forgot-password")}
    />
  );
}

export default App;