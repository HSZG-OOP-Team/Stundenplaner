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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" sx={{ m: 1, p: 2 }}>
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;